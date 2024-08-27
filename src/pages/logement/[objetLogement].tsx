import { NextRouter, useRouter } from 'next/router'
import { useEffect } from "react"
import TopBar from "../../composants/TopBar"
import Head from 'next/head'
import Image from 'next/image'

export default function pageLogement() {

    const routeur: NextRouter = useRouter();
    const { titre, description, prix, mail } = routeur.query;

    return (
        <>
            <Head>
                <title>SafeLoc - </title>
            </Head>
            <div className="w-screen h-screen bg-white text-black font-sans flex flex-col items-center">
                <TopBar mailUser={mail as string} modifierLogement={null} />
                <div className="w-full h-auto flex flex-col items-center gap-10 pt-10 overflow-y-auto">
                    <Image src="/l1.jpg" width="700" height="400" alt="Photographie du logement" className="rounded-lg" />
                    <h2 className="font-bold text-3xl text-center w-full">{titre}</h2>
                    <p>{description}</p>
                    <i>{prix}€/jour</i>
                </div>
            </div>
        </>
    )
}