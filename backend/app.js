require('dotenv').config();

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const port =  process.env.PORT || 5000;

app.use(cors({
  origin: "https://v1shivamdarbar.vercel.app", // Allow only requests from the Vite dev server
  methods: ["GET", "POST"],       // Allow these HTTP methods
  credentials: true               // Allow cookies if needed
}));
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

function sendEmail({ email, message, name }) {
  console.log(" email, message, name ", email, message, name);
  
  

  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
      user: process.env.EMAIL_USER,
       pass: process.env.EMAIL_PASS,
      },
    });

    const mail_configs = {
      from: email,
      to: process.env.EMAIL_USER,          // Your email to receive the message
      subject: name,                     // The name as the subject
      html: `<p>${message}</p><p>Best Regards</p>`, // Message content
      replyTo: email  
    };

    transporter.sendMail(mail_configs, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return reject({ message: "Failed to send email." });
      }
      return resolve({ message: "Email sent successfully." });
    });
  });
}


app.get("/", (req, res) => {
  console.log("Incoming query:", req.query); // Debug incoming parameters
  sendEmail(req.query)
    .then((response) => res.json(response))
    .catch((error) => {
      console.error("Error sending email:", error);
      res.status(500).json(error);
    });
});


app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`);
});