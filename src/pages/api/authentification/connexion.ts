import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma: PrismaClient = new PrismaClient();

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const { mailEntre, passwordEntre } = req.query;
            const testConnexion = await prisma.utilisateur.findMany({
                where: {
                    mail: mailEntre as string,
                    password: passwordEntre as string
                },
            });

            if (testConnexion.length > 0) {
                res.status(201).json({ message: 'Connexion réussi !' });
            }
            else {
                res.status(401).json({ message: "Mail ou mot de passe incorrect .." })
            }
        }
        catch (e: any) {
            const retour: string = e.message;
            console.log(retour)
            res.status(500).json({ message: retour });
        }
        prisma.$disconnect();
    }
    else {
        res.status(405).json({ message: "Méthode de la requête HTTP non-prise en charge." })
    }
}