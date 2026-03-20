import * as dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(process.cwd(), '../../.env') });
// Fallback in case process.cwd is already the root
dotenv.config({ path: path.resolve(process.cwd(), '.env') });
import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { contactSubmissionsTable } from "@workspace/db/schema";
import { SubmitContactBody } from "@workspace/api-zod";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

let firestore: any = null;
try {
  if (firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId) {
    const app = initializeApp(firebaseConfig);
    firestore = getFirestore(app);
  } else {
    console.warn("Firebase config is missing in environment variables. Firestore skipping.");
  }
} catch (e) {
  console.error("Error initializing Firebase:", e);
}

const router: IRouter = Router();

router.post("/contact", async (req, res) => {
  try {
    const body = SubmitContactBody.parse(req.body);

    await db.insert(contactSubmissionsTable).values({
      name: body.name,
      email: body.email,
      phone: body.phone ?? null,
      company: body.company ?? null,
      message: body.message,
    });

    if (firestore) {
      try {
        await addDoc(collection(firestore, "contact_submissions"), {
          name: body.name,
          email: body.email,
          phone: body.phone ?? null,
          company: body.company ?? null,
          message: body.message,
          createdAt: new Date().toISOString()
        });
      } catch (fbErr) {
        console.error("Failed to save to Firebase Firestore:", fbErr);
      }
    }

    res.json({
      success: true,
      message: "Thank you for your inquiry. Our team will get back to you within 24 business hours.",
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Invalid request. Please check your submission and try again." });
  }
});

export default router;
