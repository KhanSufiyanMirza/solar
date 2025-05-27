import { type NextRequest } from 'next/server';
import * as sgMail from '@sendgrid/mail';

// Initialize SendGrid with API key
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? '';
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? '';

if (!SENDGRID_API_KEY || !CONTACT_FROM_EMAIL || !CONTACT_TO_EMAIL) {
  throw new Error('Required environment variables are not set');
}

// sgMail.setApiKey(SENDGRID_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, message } = data;

    // Validate the input
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'All fields are required' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email format' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    // Create email content
    const emailData: sgMail.MailDataRequired = {
      to: CONTACT_TO_EMAIL,
      from: {
        email: CONTACT_FROM_EMAIL,
        name: 'Solar Contact Form'
      },
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send email using SendGrid
    await sgMail.send(emailData);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Contact form submission error:', error);
    return new Response(JSON.stringify({ error: 'Failed to submit contact form' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
