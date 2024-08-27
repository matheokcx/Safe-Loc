import Image from 'next/image'
import React from 'react';
import { NextRouter, useRouter } from 'next/router'

interface Props {
    objetLogement: any;
    userMail: string;
}

export default function Logement({ objetLogement, userMail }: Props) {

    const routeur: NextRouter = useRouter();

    return (
        <>
            <div className="w-5/6 lg:w-1/6 h-1/2 p-2 rounded-lg border-2 border-gray-400 text-black flex flex-col items-center gap-8 transition-transform hover:-translate-y-2 hover:cursor-pointer">
                <Image src="/l1.jpg" width="100" height="100" alt="Photo logement" className="rounded-lg w-5/6 h-1/2" onClick={() => routeur.push(`/logement/${objetLogement.idLogement}?titre=${objetLogement.titre}&description=${objetLogement.description}&prix=${objetLogement.prixJournalier}&mail=${userMail}`)} />
                <h2 className="w-full font-sans text-black text-center font-bold text-xl">{objetLogement.titre}</h2>
                <p className="w-full text-center">{objetLogement.prixJournalier}€/Jour</p>
            </div>
        </>
    )
}