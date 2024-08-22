import TopBar from '../composants/TopBar'
import Logement from "../composants/Logement"
import Head from 'next/head'
import { useRouter, NextRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function accueil() {

    const routeur: NextRouter = useRouter();

    const { mailUtilisateur } = routeur.query;

    const [logements, setLogements] = useState<any[]>([]);

    const chargerLogements = async () => {
        const requete = await fetch("/api/utilisateur/gestionLogement/chargementLogement", { method: "GET" });

        const retour = await requete.json();

        if (requete.ok) {
            setLogements(retour);
        }
        else {
            alert(retour);
        }
    }

    useEffect(() => {
        chargerLogements();
    }, [])

    return (
        <>
            <Head>
                <title>SafeLoc - Accueil</title>
                <link rel="icon" href="/logo.png" />
            </Head>
            <div className=" w-screen h-screen flex flex-col items-center bg-white">
                <TopBar mailUser={mailUtilisateur as string} />
                <div className=" w-full h-5/6 flex flex-col lg:flex-row items-center lg:justify-center overflow-y-auto lg:flex-wrap gap-10 pl-4 pt-8">
                    {logements.map((e: any, index) => <Logement objetLogement={e} key={index} userMail={mailUtilisateur as string} />)}
                </div>
            </div>
        </>
    )
}