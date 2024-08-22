import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next';

const prisma: PrismaClient = new PrismaClient();

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        try {
            const { identifiant }: any = req.query;
            const recherche = await prisma.logement.findFirst({
                where: {
                    idLogement: identifiant,
                }
            });
            res.status(200).json(recherche);
        }
        catch (e: any) {
            const retour: string = e.message;
            res.status(500).json({ message: retour });
        }
    }
    else {
        res.status(405).json({ message: "Méthode de la requête non-prise en charge." });
    }
}