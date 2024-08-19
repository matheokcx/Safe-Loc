import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"
import { SMTPClient } from 'emailjs';

const prisma = new PrismaClient();


export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'PUT') {
        const { adresseMail } = req.body;
        const client = new SMTPClient({
            user: adresseMail,
            password: 'ton-mot-de-passe',
            host: 'smtp.gmail.com', // Serveur SMTP (pour Gmail)
            ssl: true, // Utilisation de SSL pour la sécurité
        });
    }
    else {
        res.status(405).json({ message: "Méthode de la requête" });
    }
}