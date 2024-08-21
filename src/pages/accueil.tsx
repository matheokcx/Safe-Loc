import TopBar from '../composants/TopBar'
import { useRouter, NextRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function accueil() {

    const routeur: NextRouter = useRouter();
    const { mailUtilisateur } = routeur.query;


    return (
        <>
            <div className=" w-screen h-screen flex flex-col items-center bg-blue-800">
                <TopBar mailClient={mailUtilisateur as string} />
                <div className=" w-full h-3/4 flex flex-col">
                </div>
            </div>
        </>
    )
}