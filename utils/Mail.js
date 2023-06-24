const nodemailer = require('nodemailer');


async function mai(subject, to, message) {


    // Working code-01
    // const transporter = nodemailer.createTransport({
    //     host: 'smtp.ethereal.email',
    //     port: 587,
    //     auth: {
    //         user: 'fermin.senger@ethereal.email',
    //         pass: 'h9kbXdexp34Pc655f1'
    //     }
    // });

    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "mrjoon005@gmail.com",
            pass: "lshnhwbozsmtaoiq",
        },
    });

    // const transporter = nodemailer.createTransport({
    //     host: 'imap.ethereal.email',
    //     port: 993,
    //     auth: {
    //         user: 'fermin.senger@ethereal.email',
    //         pass: 'h9kbXdexp34Pc655f1'
    //     }
    // });

    const messages = message

    const options = {
        from: "Mail@eventspot.com <sharjunhussain@outlook.com>",
        to: to,
        subject: subject,
        text: messages,
        html: `
        <h1 style="color:red; font-size:50px; text-align:center;"> EventSpot Hall Booking </h1>
        <div style="color:black; font-size:16px; text-align:justify;" ><p> ${messages}</p></div>`
    }

    const SENDMAIL = async (mailDetails, callback) => {
        try {
            const info = await transporter.sendMail(mailDetails)
            callback(info);
        } catch (error) {
            console.log(error);
        }
    };

    SENDMAIL(options, (info) => {
        console.log("Email sent successfully");
        console.log("MESSAGE ID: ", info.messageId);
    });

    //    let info = await transporter.sendMail({
    //     from: `"Fred Foo 👻" `, // sender address
    //     to: "mrjoon005@gmail.com", // list of receivers
    //     subject: "Hello ✔", // Subject line
    //     text: "Hello world?", // plain text body
    //     html: "<b>Hello world?</b>", // html body
    //   });





}



module.exports = mai;