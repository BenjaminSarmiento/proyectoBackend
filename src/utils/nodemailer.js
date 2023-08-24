import nodmailer from 'nodemailer'


export const transporter = nodmailer.createTransport({
    service: 'gmail',
    port: 465,
    auth: {
        user: 'benjaminsarmiento03@gmail.com',
        pass: 'kjvzuthxqbpdmxny',
    },
})