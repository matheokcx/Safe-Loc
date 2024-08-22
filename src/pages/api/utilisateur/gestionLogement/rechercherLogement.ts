import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        try {
            const { recherche } = req.query;

            const logementsSimilaires = await prisma.logement.findMany({
                where: {
                    titre: {
                        contains: recherche as string
                    }
                }
            })
            if (logementsSimilaires != null) {
                res.status(200).json(logementsSimilaires);
            }
            else {
                res.status(500).json({ message: "Il n'y a aucun logement qui correspond à votre recherche .." });
            }
        }
        catch (e: any) {
            const retour: string = e.message;
            res.status(500).json({ message: retour });
        }
    }
    else {
        res.status(405).json({ message: "La méthode de la requête HTTP n'est pas prise en charge" });
    }
}