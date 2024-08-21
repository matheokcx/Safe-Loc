import Image from 'next/image'
import React from 'react';
import { NextRouter, useRouter } from 'next/router'

interface Props {
    objet: any;
    clientMail: string;
}

export default function Logement({ objet, clientMail }: Props) {

    const routeur: NextRouter = useRouter();

    return (
        <>
            <div className="w-1/6 h-1/2 p-4 rounded-lg border-2 border-gray-400 text-black flex flex-col items-center justify-center gap-4 transition-transform hover:-translate-y-2 hover:cursor-pointer">
                <Image src="/l1.jpg" width="100" height="100" alt="Photo logement" className="rounded-lg" onClick={() => routeur.push(`/logement/${objet}?mail=${clientMail}`)} />
                <h2 className="w-full font-sans text-black font-bold text-xl">{objet.titre}</h2>
            </div>
        </>
    )
}