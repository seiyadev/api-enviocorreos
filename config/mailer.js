const nodemailer = require('nodemailer');

sendMail = async (mensaje)=>{
    const config = {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'axelherrerauwu@gmail.com',
            pass: 'wzcialeehrnsunhb'
        }
    }

    const transport = nodemailer.createTransport(config);

    const info = await transport.sendMail(mensaje);

    return info;
}
