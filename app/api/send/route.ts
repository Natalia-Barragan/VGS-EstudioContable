
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'VGS Web <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL!],
      subject: `Nuevo contacto de: ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Nuevo Contacto VGS</title>
          </head>
          <body style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #F8F6F4; margin: 0; padding: 0;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin-top: 20px; margin-bottom: 20px;">
              <!-- Header -->
              <div style="background-color: #0F172A; padding: 30px 40px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 1px;">VGS</h1>
                <p style="color: #C5A086; margin: 5px 0 0 0; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Estudio Contable</p>
              </div>
              
              <!-- Content -->
              <div style="padding: 40px;">
                <h2 style="color: #0F172A; margin: 0 0 20px 0; font-size: 20px; border-bottom: 2px solid #F8F6F4; padding-bottom: 10px;">Nuevo Mensaje de Contacto</h2>
                
                <div style="margin-bottom: 25px;">
                  <p style="color: #64748B; font-size: 12px; text-transform: uppercase; margin: 0 0 5px 0; font-weight: 600;">Nombre</p>
                  <p style="color: #0F172A; font-size: 16px; margin: 0;">${name}</p>
                </div>
                
                <div style="margin-bottom: 25px;">
                  <p style="color: #64748B; font-size: 12px; text-transform: uppercase; margin: 0 0 5px 0; font-weight: 600;">Email</p>
                  <p style="color: #0F172A; font-size: 16px; margin: 0;"><a href="mailto:${email}" style="color: #C5A086; text-decoration: none;">${email}</a></p>
                </div>
                
                <div>
                  <p style="color: #64748B; font-size: 12px; text-transform: uppercase; margin: 0 0 10px 0; font-weight: 600;">Mensaje</p>
                  <div style="background-color: #F8F6F4; padding: 20px; border-radius: 6px; border-left: 4px solid #C5A086;">
                    <p style="color: #334155; font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
                  </div>
                </div>
              </div>
              
              <!-- Footer -->
              <div style="background-color: #F8F6F4; padding: 20px; text-align: center; border-top: 1px solid #E2E8F0;">
                <p style="color: #94A3B8; font-size: 12px; margin: 0;">© 2026 VGS Estudio Contable.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
