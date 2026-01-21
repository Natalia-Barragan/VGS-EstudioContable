
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(request: Request) {
//   try {
//     const { name, email, message } = await request.json();

//     const { data, error } = await resend.emails.send({
//       from: 'VGS Web <onboarding@resend.dev>',
//       to: [process.env.CONTACT_EMAIL!],
//       subject: `Nuevo contacto de: ${name}`,
//       html: `
//         <div>
//           <h1>Nuevo Mensaje de Contacto</h1>
//           <p><strong>Nombre:</strong> ${name}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Mensaje:</strong></p>
//           <blockquote style="border-left: 4px solid #ccc; padding-left: 10px; margin-left: 0;">
//             ${message}
//           </blockquote>
//         </div>
//       `,
//     });

//     if (error) {
//       return Response.json({ error }, { status: 500 });
//     }

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error }, { status: 500 });
//   }
// }
