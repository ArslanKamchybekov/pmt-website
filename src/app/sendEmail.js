// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'your-email@gmail.com', // Replace with your email
        pass: 'your-email-password', // Replace with your email password or app password
      },
    });

    // Send mail
    try {
      await transporter.sendMail({
        from: `"${name}" <${email}>`, // Sender address
        to: 'pmtchicago@gmail.com', // List of recipients
        subject: 'New Contact Form Submission', // Subject line
        text: message, // Plain text body
        html: `<p>${message}</p>`, // HTML body
      });

      return res.status(200).json({ status: 'Message sent' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
