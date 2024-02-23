import { NextResponse } from "next/server";
import { mailTransporter } from "@/lib/mailer";
/**
 * @swagger
 * /api/email:
 *  post:
 *   description: Send an email
 *   responses:
 *    200:
 *     description: Success
 *    400:
 *     description: Bad request
 *    500:
 *     description: Internal server error
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       required:
 *         - emailTo
 *         - subject
 *         - text
 *       properties:
 *         emailTo:
 *           type: string
 *         subject:
 *           type: string
 *         text:
 *           type: string
 *       
 */
export async function POST(
    request: Request) {
    const body = await request.json();
    if(!body) {
        return NextResponse.json({ error: "No body provided" }, { status: 400 });
    }
    const { emailTo, subject, text } = body;
    if(!emailTo || !subject || !text) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: emailTo,
        subject,
        text,
    };
    try {
        await mailTransporter.sendMail(mailOptions);
    } catch (error) {
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
    return NextResponse.json({ message: "Email sent" }, { status: 200 });
}