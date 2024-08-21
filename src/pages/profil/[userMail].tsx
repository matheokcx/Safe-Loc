import { useRouter, NextRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import TopBar from '../../composants/TopBar'

export default function pageDeProfil() {

    const routeur: NextRouter = useRouter();
    const { userMail } = routeur.query;

    return (
        <>
            <Head>
                <title>SafeLoc - {userMail}</title>
                <link rel="icon" href="/logo.png" />
            </Head>
            <div className="w-screen h-screen -font-sans text-black flex flex-col items-center">
                <TopBar mailClient={userMail as string} />
                <div className="w-full h-1/3 flex flex-col items-center pt-16">
                    <div className="w-1/3 h-1/2 bg-gray-400 rounded-xl flex flex-col items-center pt-16">
                        <p>Test pour le profil de {userMail}</p>
                    </div>
                </div>
            </div>
        </>
    )
}