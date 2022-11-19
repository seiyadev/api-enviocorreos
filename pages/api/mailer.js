const nodemailer = require("nodemailer");

export default async function (req, res) {
  const config = {
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "axelherrerauwu@gmail.com",
      pass: "wzcialeehrnsunhb",
    },
  };

  const transport = nodemailer.createTransport(config);

  const info = await transport.sendMail({
    from: '"Axel Chávez" axelherrerauwu@gmail.com',
    to: req.body.email,
    subject: "Mensaje de prueba",
    html: "<p>" + req.body.body_msg + "</p>",
  });
  return res.status(200).json({ message: "Email sent" });
}
