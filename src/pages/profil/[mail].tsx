import { useRouter, NextRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import TopBar from '../../composants/TopBar'

export default function pageDeProfil() {

    const routeur: NextRouter = useRouter();
    const { mail } = routeur.query;

    return (
        <>
            <Head>
                <title>SafeLoc - {mail}</title>
                <link rel="icon" href="/logo.png" />
            </Head>
            <div className="w-screen h-screen -font-sans bg-white text-black flex flex-col items-center">
                <TopBar mailUser={mail as string} />
                <div className="w-full h-1/3 flex flex-col items-center pt-16">
                    <div className="w-5/6 lg:w-1/3 h-5/6 border-solid border-2 border-gray-400 rounded-xl flex flex-col items-center justify-center ">
                        <p>Test pour le profil de {mail}</p>
                    </div>
                </div>
            </div>
        </>
    )
}