import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: `"${name}" <${email}>`,
      subject: `[Portfolio] New message from ${name}`,
      html: `
        <div style="font-family:monospace;background:#0a0a0a;color:#e0e0e0;padding:32px;max-width:600px;margin:0 auto;border:1px solid #1c1c1c;">
          <div style="color:#00d4ff;font-size:11px;letter-spacing:4px;margin-bottom:24px;">PORTFOLIO_CONTACT</div>
          <h2 style="color:#e0e0e0;font-size:18px;margin:0 0 24px;">New message from your portfolio</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="color:#6b7280;font-size:11px;letter-spacing:2px;padding:8px 0;border-bottom:1px solid #1c1c1c;width:80px;">NAME</td>
              <td style="color:#e0e0e0;font-size:13px;padding:8px 0 8px 16px;border-bottom:1px solid #1c1c1c;">${name}</td>
            </tr>
            <tr>
              <td style="color:#6b7280;font-size:11px;letter-spacing:2px;padding:8px 0;border-bottom:1px solid #1c1c1c;">EMAIL</td>
              <td style="color:#00d4ff;font-size:13px;padding:8px 0 8px 16px;border-bottom:1px solid #1c1c1c;">
                <a href="mailto:${email}" style="color:#00d4ff;text-decoration:none;">${email}</a>
              </td>
            </tr>
          </table>
          <div style="margin-top:24px;">
            <div style="color:#6b7280;font-size:11px;letter-spacing:2px;margin-bottom:12px;">MESSAGE</div>
            <div style="color:#e0e0e0;font-size:13px;line-height:1.7;background:#080808;border:1px solid #1c1c1c;padding:16px;">
              ${message.trim().replace(/\n/g, "<br>")}
            </div>
          </div>
          <div style="margin-top:24px;color:#3a3a3a;font-size:11px;">
            Reply to this email to respond directly to ${name}.
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: "Message received. I'll get back to you soon." });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
