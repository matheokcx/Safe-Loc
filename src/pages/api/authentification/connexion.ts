import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma: PrismaClient = new PrismaClient();

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const { mailEntre, passwordEntre } = req.query;

            if (mailEntre === "" || passwordEntre === "") {
                res.status(500).json({ message: "L'un des champs est vide" });
            }
            else {
                const testCompteExiste = await prisma.utilisateur.findFirst({
                    where: {
                        mail: mailEntre as string
                    }
                });

                if (testCompteExiste != null) {
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
                        res.status(401).json({ message: "Mail ou mot de passe incorrect .." });
                    }
                }
                else {
                    res.status(500).json({ message: "Vous n'avez pas de compte, créez en un !" });
                }
            }
        }
        catch (e: any) {
            const retour: string = e.message;
            res.status(500).json({ message: retour });
        }
    }
    else {
        res.status(405).json({ message: "Méthode de la requête HTTP non-prise en charge." })
    }
}