const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "elmer.antony12@gmail.com", // Aquí debes colocar tu correo electrónico
    pass: "AEspinoza1", // Aquí debes colocar la contraseña de tu correo electrónico
  },
});

export const sendEmail = async (email, subject, message, cb) => {
  const mailOptions = {
    from: "elmer.antony12@gmail.com", // Aquí debes colocar tu correo electrónico
    to: email,
    subject: subject,
    html: message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      cb(false);
    } else {
      console.log("Email sent: " + info.response);
      cb(true);
    }
  });
};

module.exports = sendMail;
