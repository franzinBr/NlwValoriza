
import { createTransport } from "nodemailer";
import { ErrorResponse } from "./ErrorResponse";

interface IOptions {
    to: string,
    subject: string,
    text: string
}

class EmailSender {

    static send({to, subject, text}: IOptions) {
        const transporter = createTransport({
            service: process.env.EMAIL_SERVICE,
            auth: {user: process.env.EMAIL_USERNAME, pass: process.env.EMAIL_PASSWORD}
        })
        const mailOptions = {
            from: process.env.EMAIL_FROM,
            to: to,
            subject: subject,
            html: text,
        }

        transporter.sendMail(mailOptions, function(err, info){
            if(err) throw new ErrorResponse("Error sending the e-mail", 422)
        })

    
    }
}

export { EmailSender }