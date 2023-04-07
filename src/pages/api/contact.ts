import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default function SendContact (req: NextApiRequest, res: NextApiResponse) {
    const transporter = nodemailer.createTransport({
        service: "Mail.ru",
        auth: {
            user: "htmproject@mail.ru",
            pass: "cnEdqRhQyfpMcMhzwnve"
        }
    });

    const mailOptions = {
        from: "htmproject@mail.ru",
        to: "i@htmteam.ru",
        subject: "Новая заявка HTM",
        text: `Имя: ${req.body.name}   Телефон: ${req.body.phone}`,
        html:
                `
                <div>Имя: ${req.body.name}</div>
                <p>Телефон:${req.body.phone}</p>
                <p>Тип услуги:${req.body.service}</p>
                <p>Телефон:${req.body.comment}</p>
                `
    };

    transporter.sendMail(mailOptions, (err, info) => {

        if (err) {
            return res.status(404).json({
                error: `Connection refused at ${err}`
            });
        }
        return res.status(250).json({
            success: `Message delivered to ${info.accepted}`
        });

    });

    res.status(200);
}