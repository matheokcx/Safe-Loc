import { NextRouter, useRouter } from 'next/router'
import { useEffect } from "react"
import TopBar from "../../composants/TopBar"
import Head from 'next/head'
import Image from 'next/image'

export default function pageLogement() {

    const routeur: NextRouter = useRouter();
    const { objetLogement } = routeur.query;
    const { mail } = routeur.query;
    console.log(objetLogement);

    let logement: any = null;

    const retrouverInfos = async () => {
        const requete = await fetch(`/api/utilisateur/gestionLogement/trouverLogement?identifiant=${objetLogement}`, { method: 'GET' });
        const retour: any = await requete.json();
        if (requete.ok) {
            logement = retour;
            console.log(retour);
        }
        else {
            alert(retour.message);
        }
    }

    useEffect(() => {
        retrouverInfos();
    }, [])

    return (
        <>
            <Head>
                <title>SafeLoc - </title>
            </Head>
            <div className="w-screen h-screen bg-white text-black font-sans flex flex-col items-center">
                <TopBar mailUser={mail as string} />
                <div className="w-full h-auto flex flex-col items-center gap-10 pt-10 overflow-y-auto">
                    <Image src="/l1.jpg" width="700" height="400" alt="Photographie du logement" className="rounded-lg" />
                    <h2 className="font-bold text-3xl text-center w-full">Titre du logement</h2>
                    <p>{logement != null ? logement.description : null}</p>
                    <i>{logement != null ? logement.prixJournalier : null}€/jour</i>
                </div>
            </div>
        </>
    )
}