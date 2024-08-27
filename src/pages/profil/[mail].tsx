import { useRouter, NextRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import TopBar from '../../composants/TopBar'

export default function pageDeProfil() {

    const routeur: NextRouter = useRouter();
    const { mail } = routeur.query;

    const [nouveauMail, setNouveauMail] = useState<string>("");
    const [motDePasseActuel, setMotDePasseActuel] = useState<string>("");
    const [nouveauMotDePasse, setNouveauMotDePasse] = useState<string>("");

    const modifierInformations = async () => {
        const requete = await fetch("../api/utilisateur/gestionInfos/modifierInfos", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                motDePasseActuel: motDePasseActuel,
                nouveauMotDePasse: nouveauMotDePasse,
                mailActuel: mail,
                nouveauMail: nouveauMail
            })
        });

        const retour = await requete.json();
        alert(retour.message);
        if (requete.ok) {
            routeur.push("/");
        }
    }

    return (
        <>
            <Head>
                <title>SafeLoc - {mail}</title>
                <link rel="icon" href="/logo.png" />
            </Head>
            <div className="w-screen h-screen -font-sans bg-white text-black flex flex-col items-center">
                <TopBar mailUser={mail as string} modifierLogement={null} />
                <div className="w-full h-5/6 flex flex-col items-center pt-16">
                    <div className="w-5/6 lg:w-2/3 h-5/6 border-solid border-2 border-gray-400 rounded-xl flex flex-col items-center justify-center gap-4 p-5">
                        <input type="mail" value={nouveauMail} onChange={(e: any) => setNouveauMail(e.target.value)} placeholder="Votre nouveau mail" className="w-full text-black rounded-lg p-1 border-2 border-gray-400" />
                        <span className="w-full flex flex-row gap-4 justify-center">
                            <input type="password" value={motDePasseActuel} onChange={(e: any) => setMotDePasseActuel(e.target.value)} placeholder="Mot de passe actuel" className="w-1/2 text-black rounded-lg p-1 border-2 border-gray-400" />
                            <input type="text" value={nouveauMotDePasse} onChange={(e: any) => setNouveauMotDePasse(e.target.value)} placeholder="Votre nouveau mot de passe" className="w-1/2 text-black rounded-lg p-1 border-2 border-gray-400" />
                        </span>
                        <button onClick={() => modifierInformations()} className="w-1/4 h-10 rounded-xl bg-red-400 text-white ">Envoyer</button>
                        <button onClick={() => routeur.push("/")} className="w-1/4 h-10 rounded-xl bg-red-400 text-white">Déconnexion</button>
                    </div>
                </div>
            </div>
        </>
    )
}