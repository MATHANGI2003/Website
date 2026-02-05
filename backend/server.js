const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Contact = require('./models/Contact');
const Application = require('./models/application');
const nodemailer = require("nodemailer");
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json()); // Global JSON middleware

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('✅ MongoDB Atlas connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // xxx@gmail.com
    pass: process.env.EMAIL_PASS, // App password
  },
});

// Basic route (health check)
app.get('/', (req, res) => {
  res.send('🌐 Server is running');
});

// Contact form route

app.post("/api/contact", async (req, res) => {
  try {
    const { user_name, user_email, user_phone, message } = req.body;

    // Save to DB
    await Contact.create(req.body);

    // Send Mail
    await transporter.sendMail({
      from: `"Website Contact" <${user_email}>`,
      to: process.env.EMAIL_USER, // RECEIVER (xxx@gmail.com)
      subject: "CeiTCS -New Contact Form Message",
      html: `
        <h3> Message Received</h3>
        <p><b>Name:</b> ${user_name}</p>
        <p><b>Email:</b> ${user_email}</p>
        <p><b>Phone:</b> ${user_phone}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Mail sending failed" });
  }
});
// Application submission route
app.post('/api/applications', upload.fields([
  { name: 'certificate', maxCount: 1 },
  { name: 'resume', maxCount: 1 }
]), async (req, res) => {
  try {
    const { name, email, position, experience } = req.body;

    if (!req.files?.certificate?.[0] || !req.files?.resume?.[0]) {
      return res.status(400).json({ error: 'Certificate and Resume are required' });
    }

    const certificate = req.files.certificate[0];
    const resume = req.files.resume[0];

    const newApplication = new Application({
      name,
      email,
      position,
      experience,
      certificate: {
        data: fs.readFileSync(certificate.path),
        contentType: certificate.mimetype,
        filename: certificate.originalname,
      },
      resume: {
        data: fs.readFileSync(resume.path),
        contentType: resume.mimetype,
        filename: resume.originalname,
      },
    });

    await newApplication.save();

    // Optionally delete files after saving to DB
    fs.unlinkSync(certificate.path);
    fs.unlinkSync(resume.path);

    res.status(200).json({ message: 'Application submitted successfully' });
  } catch (err) {
    console.error('Error saving application:', err);
    res.status(500).json({ error: 'Error saving application' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
