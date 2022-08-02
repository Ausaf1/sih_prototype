const nodemailer = require("nodemailer");

const sendEmail = (options) => {
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: options.to,
    subject: options.subject,
    text: options.text,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log("Error occurs", err);
    } else {
      console.log(data);
    }
  });
};

module.exports = sendEmail;
