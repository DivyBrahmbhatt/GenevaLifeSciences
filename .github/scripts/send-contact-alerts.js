const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

// --- CONFIGURATION ---
// Set to current date so it doesn't immediately dump thousands of old emails during the first run.
const CUTOFF_DATE = new Date('2026-03-21T00:00:00Z');
const COLLECTION_NAME = 'contact_submissions';
const TO_EMAIL = 'genevalifesciencespvtltd712@gmail.com';

// Initialize Firebase Admin
if (!process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
    console.error("Missing FIREBASE_SERVICE_ACCOUNT_KEY env var");
    process.exit(1);
}

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}
const db = admin.firestore();

// Initialize Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// --- HELPERS ---

async function sendEmail(to, subject, htmlContent) {
    try {
        await transporter.sendMail({
            from: `"Geneva Life Sciences" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            html: htmlContent
        });
        console.log(`[EMAIL SENT] to ${to}`);
        return true;
    } catch (error) {
        console.error(`[EMAIL ERROR] Failed to send to ${to}:`, error);
        return false;
    }
}

function parseTimestamp(ts) {
    if (!ts) return null;
    if (ts.toDate) return ts.toDate();
    return new Date(ts);
}

async function markAsProcessed(docId) {
    try {
        await db.collection(COLLECTION_NAME).doc(docId).update({
            emailSent: true,
            emailSentAt: admin.firestore.FieldValue.serverTimestamp()
        });
        console.log(`[DB UPDATE] Marked ${docId} as processed.`);
    } catch (err) {
        console.error(`[DB ERROR] Failed to update ${docId}:`, err);
    }
}

// --- PROCESSOR ---

async function processContactSubmissions() {
    console.log(`\n--- Processing ${COLLECTION_NAME} ---`);

    const snapshot = await db.collection(COLLECTION_NAME)
        .orderBy('createdAt', 'desc')
        .limit(50)
        .get();

    if (snapshot.empty) {
        console.log('No new contact submissions found.');
        return;
    }

    for (const doc of snapshot.docs) {
        const data = doc.data();

        // 1. Skip if already processed
        if (data.emailSent === true) continue;

        // 2. Check Date Cutoff
        const docDate = parseTimestamp(data.createdAt);
        if (!docDate || docDate < CUTOFF_DATE) {
            continue;
        }

        console.log(`Found new contact entry from: ${data.name || 'Unknown'}`);

        // 3. Send Email
        const subject = `New Contact Form Entry | Geneva Life Sciences`;
        const htmlBody = `
<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #333; line-height: 1.6; background-color: #f9f9f9; padding: 20px; }
  .email-wrapper { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
  .header { background-color: #0056b3; color: #ffffff; padding: 20px 30px; font-size: 20px; font-weight: 600; text-align: center; }
  .content { padding: 30px; }
  p { margin-bottom: 15px; }
  .details-box { background-color: #f1f5f9; padding: 20px; border-radius: 6px; margin-top: 20px; margin-bottom: 20px; border-left: 4px solid #0056b3; }
  .detail-row { margin-bottom: 10px; }
  .detail-label { font-weight: 600; color: #555; display: inline-block; width: 80px; }
  .detail-value { color: #111; }
  .message-box { background-color: #ffffff; border: 1px solid #e1e1e1; padding: 15px; border-radius: 4px; margin-top: 10px; font-style: italic; color: #444; white-space: pre-wrap; }
  .footer { margin-top: 30px; padding: 20px 30px; background-color: #f1f1f1; font-size: 12px; color: #777; text-align: center; border-top: 1px solid #eaeaea; }
</style>
</head>
<body>
<div class="email-wrapper">
  <div class="header">Geneva Life Sciences</div>
  <div class="content">
    <p>Hello Team,</p>

    <p>You have received a new contact form entry from the corporate website. Please review the details below and follow up with the client accordingly.</p>

    <div class="details-box">
      <div class="detail-row">
        <span class="detail-label">Name:</span>
        <span class="detail-value">${data.name || 'Not Provided'}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Email:</span>
        <span class="detail-value"><a href="mailto:${data.email}">${data.email || 'Not Provided'}</a></span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Phone:</span>
        <span class="detail-value">${data.phone || 'Not Provided'}</span>
      </div>
      <div class="detail-row" style="margin-top: 15px;">
        <span class="detail-label" style="width: 100%;">Message:</span>
        <div class="message-box">${data.message || 'No message attached.'}</div>
      </div>
    </div>

    <p>Please respond to this inquiry as soon as possible.</p>
    <p>Best regards,<br><b>Automated Mailing System</b></p>
  </div>
  <div class="footer">
    This is an automated notification from genevalifesciences.com.<br>
    Please do not reply directly to this generic email address.
  </div>
</div>
</body>
</html>`;

        const sent = await sendEmail(TO_EMAIL, subject, htmlBody);
        if (sent) {
            await markAsProcessed(doc.id);
        }
    }
}

// --- MAIN ---

async function main() {
    try {
        await processContactSubmissions();
        console.log('\nFinished processing contact alerts.');
        process.exit(0);
    } catch (error) {
        console.error('Fatal Error:', error);
        process.exit(1);
    }
}

main();
