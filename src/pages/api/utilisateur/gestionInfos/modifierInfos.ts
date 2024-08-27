import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next';

const prisma: PrismaClient = new PrismaClient();

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "PUT") {
        try {
            const { motDePasseActuel, nouveauMotDePasse, mailActuel, nouveauMail } = req.body;

            if (nouveauMotDePasse === "" && nouveauMail === "") {
                res.status(404).json({ message: "Aucun champ n'est rempli." });
            }
            else {
                if (nouveauMail !== "") {
                    const existeDeja = await prisma.utilisateur.findFirst({
                        where: {
                            mail: nouveauMail
                        }
                    });

                    if (existeDeja === null) {
                        await prisma.utilisateur.updateMany({
                            where: {
                                mail: mailActuel
                            },
                            data: {
                                mail: nouveauMail
                            }
                        });
                        res.status(201).json({ message: "Mail modifié avec succès !" });
                    }
                    else {
                        res.status(401).json({ message: "Ce mail est déjà attribué à un compte." });
                    }
                }

                if (nouveauMotDePasse !== "" && motDePasseActuel !== "") {
                    const verificationMotDePasse = await prisma.utilisateur.findFirst({
                        where: {
                            mail: mailActuel,
                            password: motDePasseActuel
                        }
                    });

                    if (verificationMotDePasse !== null) {
                        await prisma.utilisateur.updateMany({
                            where: {
                                mail: mailActuel,
                                password: motDePasseActuel
                            },
                            data: {
                                password: nouveauMotDePasse
                            }
                        });
                        res.status(201).json({ message: "Mot de passe modifié avec succès !" });
                    }
                    else {
                        res.status(401).json({ message: "Mot de passe incorrect." });
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
        res.status(405).json({ message: "Méthode de la requête HTTP non-prise en charge." });
    }
}