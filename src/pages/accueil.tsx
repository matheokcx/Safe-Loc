import TopBar from '../composants/TopBar'
import Logement from "../composants/Logement"
import { useRouter, NextRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function accueil() {

    const routeur: NextRouter = useRouter();
    const { mail } = routeur.query;
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
            <div className=" w-screen h-screen flex flex-col items-center bg-white">
                <TopBar mailClient={mailUtilisateur as string} />
                <div className=" w-full h-3/4 flex flex-row flex-wrap gap-10 pl-4 pt-8">
                    {logements.map((e: any, index) => <Logement objet={e} key={index} clientMail={mailUtilisateur as string} />)}
                </div>
            </div>
        </>
    )
}