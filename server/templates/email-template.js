export const emailBodyTouser = (name, portfolioUrl) => `<div style="max-width:600px; margin:auto; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color:#030712; color:#f1f5f9; padding:40px; border-radius:16px; border: 1px solid rgba(255,255,255,0.1);">
  <div style="text-align: center; margin-bottom: 30px;">
    <h1 style="color:#8b5cf6; margin:0; font-size: 28px;">OBTILA</h1>
    <p style="color:#94a3b8; font-size: 14px; margin-top: 5px;">AI & Data Science Solutions</p>
  </div>

  <div style="background:rgba(255,255,255,0.03); padding:30px; border-radius:12px; border: 1px solid rgba(255,255,255,0.05);">
    <h2 style="color:#f1f5f9; margin-top:0;">Hello ${name},</h2>
    <p style="color:#94a3b8; line-height: 1.6;">Thank you for reaching out! I've received your message and will review it meticulously. Expect a response shortly.</p>

    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
        <p style="color:#8b5cf6; margin-bottom:0; font-weight:bold;">Best regards,</p>
        <p style="color:#f1f5f9; margin-top:5px;">Abdelrahman Khalid Radaideh</p>
    </div>
    
    <div style="text-align: center; margin-top: 40px;">
        <a href="${portfolioUrl}" style="display:inline-block; background:linear-gradient(to right, #8b5cf6, #22d3ee); border-radius:30px; color:#ffffff; padding:14px 30px; text-decoration:none; font-weight:bold; shadow: 0 4px 15px rgba(139,92,246,0.3);">Return to Portfolio</a>
    </div>
  </div>
</div>
`;

export const emailBodyToOwner = (subject, name, email, message) => `<div style="max-width:600px; margin:auto; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color:#030712; color:#f1f5f9; padding:40px; border-radius:16px; border: 1px solid rgba(255,255,255,0.1);">
  <div style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 20px; margin-bottom: 30px;">
    <h2 style="color:#8b5cf6; margin:0;">🚀 New Transmission</h2>
    <p style="color:#94a3b8; font-size: 14px; margin-top: 5px;">Inbound message from OBTILA Portfolio</p>
  </div>

  <div style="background:rgba(255,255,255,0.03); padding:30px; border-radius:12px; border: 1px solid rgba(255,255,255,0.05);">
    <div style="margin-bottom: 20px;">
        <h3 style="color:#22d3ee; margin:0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Subject</h3>
        <p style="color:#f1f5f9; margin:5px 0 0 0; font-size: 16px;">${subject}</p>
    </div>

    <div style="margin-bottom: 20px;">
        <h3 style="color:#22d3ee; margin:0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Sender</h3>
        <p style="color:#f1f5f9; margin:5px 0 0 0; font-size: 16px;">${name} (${email})</p>
    </div>

    <div style="margin-top: 30px; padding: 20px; background:rgba(255,255,255,0.02); border-radius: 8px; border-left: 4px solid #8b5cf6;">
        <h3 style="color:#22d3ee; margin:0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Message Content</h3>
        <p style="color:#f1f5f9; margin:10px 0 0 0; line-height: 1.6;">${message}</p>
    </div>
  </div>
</div>`