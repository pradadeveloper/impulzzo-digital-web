import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { nombre, email, empresa, mensaje, servicio } = await req.json();

    if (!nombre || !email || !mensaje) {
      return NextResponse.json({ error: 'Campos requeridos faltantes' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Impulzzo Digital <hola@impulzzodigital.com>',
      to: 'juanfelipepradaing@gmail.com',
      subject: `Nuevo contacto: ${nombre}${empresa ? ` · ${empresa}` : ''}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0f0f11; color: #e5e5e5; border-radius: 12px; overflow: hidden;">
          <div style="background: #1a1a2e; padding: 32px; border-bottom: 1px solid rgba(255,255,255,0.08);">
            <h2 style="margin: 0; color: #ffffff; font-size: 20px;">Nuevo mensaje de contacto</h2>
            <p style="margin: 8px 0 0; color: #888; font-size: 14px;">Impulzzo Digital — Formulario web</p>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #888; font-size: 13px; width: 100px;">Nombre</td>
                <td style="padding: 10px 0; color: #fff; font-size: 14px; font-weight: 600;">${nombre}</td>
              </tr>
              <tr style="border-top: 1px solid rgba(255,255,255,0.05);">
                <td style="padding: 10px 0; color: #888; font-size: 13px;">Email</td>
                <td style="padding: 10px 0; color: #4f9cf9; font-size: 14px;"><a href="mailto:${email}" style="color: #4f9cf9;">${email}</a></td>
              </tr>
              ${empresa ? `
              <tr style="border-top: 1px solid rgba(255,255,255,0.05);">
                <td style="padding: 10px 0; color: #888; font-size: 13px;">Empresa</td>
                <td style="padding: 10px 0; color: #fff; font-size: 14px;">${empresa}</td>
              </tr>` : ''}
              ${servicio ? `
              <tr style="border-top: 1px solid rgba(255,255,255,0.05);">
                <td style="padding: 10px 0; color: #888; font-size: 13px;">Servicio</td>
                <td style="padding: 10px 0; color: #fff; font-size: 14px;">${servicio}</td>
              </tr>` : ''}
              <tr style="border-top: 1px solid rgba(255,255,255,0.05);">
                <td style="padding: 10px 0; color: #888; font-size: 13px; vertical-align: top;">Mensaje</td>
                <td style="padding: 10px 0; color: #e5e5e5; font-size: 14px; line-height: 1.6;">${mensaje.replace(/\n/g, '<br/>')}</td>
              </tr>
            </table>
            <div style="margin-top: 24px;">
              <a href="mailto:${email}" style="display: inline-block; background: #4f9cf9; color: #0f0f11; font-weight: 700; font-size: 14px; padding: 12px 24px; border-radius: 100px; text-decoration: none;">Responder a ${nombre}</a>
            </div>
          </div>
        </div>
      `,
    });

    await resend.emails.send({
      from: 'Impulzzo Digital <hola@impulzzodigital.com>',
      to: email,
      subject: '¡Recibimos tu mensaje, pronto te contactamos!',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0f0f11; color: #e5e5e5; border-radius: 12px; overflow: hidden;">
          <div style="background: #1a1a2e; padding: 32px; border-bottom: 1px solid rgba(255,255,255,0.08);">
            <h2 style="margin: 0; color: #ffffff; font-size: 20px;">¡Gracias por contactarnos, ${nombre}!</h2>
            <p style="margin: 8px 0 0; color: #888; font-size: 14px;">Impulzzo Digital</p>
          </div>
          <div style="padding: 32px;">
            <p style="color: #e5e5e5; font-size: 15px; line-height: 1.7; margin: 0 0 16px;">
              Recibimos tu mensaje y nos pondremos en contacto contigo en las próximas <strong style="color: #fff;">24 horas</strong>.
            </p>
            <p style="color: #888; font-size: 14px; line-height: 1.6; margin: 0 0 24px;">
              Si tienes algo urgente, puedes escribirnos directamente por WhatsApp o agendar una llamada.
            </p>
            <div style="display: flex; gap: 12px; flex-wrap: wrap;">
              <a href="https://wa.me/573043838770" style="display: inline-block; background: #22c55e; color: #fff; font-weight: 700; font-size: 13px; padding: 10px 20px; border-radius: 100px; text-decoration: none;">WhatsApp</a>
              <a href="https://calendly.com/juanfelipepradaing/30min" style="display: inline-block; background: rgba(79,156,249,0.15); color: #4f9cf9; font-weight: 700; font-size: 13px; padding: 10px 20px; border-radius: 100px; text-decoration: none; border: 1px solid rgba(79,156,249,0.3);">Agendar llamada</a>
            </div>
          </div>
          <div style="padding: 24px 32px; border-top: 1px solid rgba(255,255,255,0.05);">
            <p style="margin: 0; color: #555; font-size: 12px;">Impulzzo Digital · impulzzodigital.com</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Error al enviar el mensaje' }, { status: 500 });
  }
}
