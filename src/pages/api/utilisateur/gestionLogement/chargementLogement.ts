import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        try {
            const logements = await prisma.logement.findMany();
            res.status(200).json(logements);
        }
        catch (e: any) {
            const retour: string = e.message;
            res.status(500).json({ message: retour });
        }
    }
    else {
        res.status(405).json({ message: "Méthode de la requête HTTP non-pris en charge" });
    }
}