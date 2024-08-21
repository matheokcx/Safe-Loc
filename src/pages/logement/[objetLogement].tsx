import { NextRouter, useRouter } from 'next/router'
import TopBar from "../../composants/TopBar"
import Head from 'next/head'
import Image from 'next/image'

export default function pageLogement() {

    const routeur: NextRouter = useRouter();
    const { objetLogement, mail }: any = routeur.query;

    return (
        <>
            <Head>
                <title>SafeLoc - </title>
            </Head>
            <div className="w-screen h-screen bg-white text-black font-sans flex flex-col items-center">
                <TopBar mailClient={mail} />
                <div className="w-full h-auto flex flex-col items-center gap-10 pt-10 overflow-y-auto">
                    <Image src="/l1.jpg" width="700" height="400" alt="Photographie du logement" className="rounded-lg" />
                    <h2 className="font-bold text-3xl text-center w-full">Titre du logement</h2>
                    <p>Description du logement</p>
                    <i>Prix journalier du Logement/jour</i>
                </div>
            </div>
        </>
    )
}