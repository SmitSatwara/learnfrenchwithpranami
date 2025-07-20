const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;
  console.log('📨 Contact form received:', { name, email });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // 1. Send email to YOU
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    console.log('✅ Email sent to site owner');

    // 2. Send confirmation email to USER
    await transporter.sendMail({
      from: `"Learn French with Pranami" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thanks for reaching out!',
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for contacting <strong>Learn French with Pranami</strong>. I’ve received your message and will get back to you shortly.</p>
        <p>Meanwhile, feel free to follow on Instagram: 
        <a href="https://instagram.com/learnfrenchwithpranami">@learnfrenchwithpranami</a></p>
        <br>
        <p>Merci ! 🇫🇷<br>— Pranami</p>
      `,
    });

    console.log('✅ Confirmation email sent to sender');

    res.status(200).json({ success: true, message: 'Emails sent successfully!' });
  } catch (err) {
    console.error('❌ Email sending error:', err);
    res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
