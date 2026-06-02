import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  const { name, email, countryCode, phone, project, message } = await req.json();
  const fullPhone = phone ? `${countryCode} ${phone}` : null;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "CodeShila Contact <onboarding@resend.dev>",
      to: "shivashah5152@gmail.com",
      replyTo: email,
      subject: `[CodeShila] New Inquiry — ${escapeHtml(project || "General")}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f8fafc; border-radius: 12px;">
          <h2 style="color: #0f172a; margin-bottom: 24px;">New Project Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; color: #64748b; width: 120px;">Name</td><td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${escapeHtml(name)}</td></tr>
            <tr><td style="padding: 10px 0; color: #64748b;">Email</td><td style="padding: 10px 0; color: #0f172a;"><a href="mailto:${escapeHtml(email)}" style="color: #0057ff;">${escapeHtml(email)}</a></td></tr>
            ${fullPhone ? `<tr><td style="padding: 10px 0; color: #64748b;">Phone</td><td style="padding: 10px 0; color: #0f172a;">${escapeHtml(fullPhone)}</td></tr>` : ""}
            <tr><td style="padding: 10px 0; color: #64748b;">Project</td><td style="padding: 10px 0; color: #0f172a;">${escapeHtml(project || "Not specified")}</td></tr>
          </table>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
          <h3 style="color: #0f172a; margin-bottom: 12px;">Message</h3>
          <p style="color: #374151; line-height: 1.7; white-space: pre-wrap;">${escapeHtml(message)}</p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
          <p style="color: #94a3b8; font-size: 12px;">Sent via CodeShila landing page · Reply directly to this email to respond to ${escapeHtml(name)}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
  }
}
