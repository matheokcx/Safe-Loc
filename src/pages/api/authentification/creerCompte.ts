import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const { mailValeur, passwordValeur, typeValeur } = req.body;

            if (mailValeur === "" || passwordValeur === "" || typeValeur === "") {
                res.status(500).json({ message: "L'un des champs n'est pas remplit correctement" });
            }
            else {
                const compteExiste = await prisma.utilisateur.findFirst({
                    where: {
                        mail: mailValeur
                    }
                });

                if (compteExiste != null) {
                    res.status(402).json({ message: "Vous avez déjà un compte chez SafeLoc, Connectez vous !" });
                }
                else {
                    const maxIdResult = await prisma.utilisateur.findFirst({
                        orderBy: {
                            idUtilisateur: 'desc',
                        },
                        select: {
                            idUtilisateur: true,
                        },
                    });
                    if (maxIdResult && compteExiste == null) {
                        await prisma.utilisateur.create({
                            data: {
                                idUtilisateur: maxIdResult.idUtilisateur + 1,
                                mail: mailValeur,
                                password: passwordValeur,
                                type: typeValeur
                            }
                        });
                        res.status(200).json({ message: "Compte créé avec succès !" });
                    }
                }
            }
        }
        catch (e: any) {
            const retour: string = e.message;
            res.status(500).json({ message: retour });
        }
    }
    else {
        res.status(405).json({ message: "Méthode de la requête HTTP non-prise en charge" });
    }
}