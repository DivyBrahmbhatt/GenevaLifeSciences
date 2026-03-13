import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { contactSubmissionsTable } from "@workspace/db/schema";
import { SubmitContactBody } from "@workspace/api-zod";

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
