import Image from 'next/image'
import { useState } from "react"
import { useRouter, NextRouter } from 'next/router'

interface Props {
    mailUser: string;
}

export default function TopBar({ mailUser }: Props) {

    const [valeurRecherche, setValeurRecherche] = useState<string>("");
    const routeur: NextRouter = useRouter();

    return (
        <>
            <div className="w-full h-1/6 rounded-xl border-solid border-b-4 border-b-black flex flex-col overflow-y-auto lg:flex-row lg:justify-center items-center gap-2 lg:gap-8">
                <Image src="/logo.png" width="90" height="90" alt="Logo Accueil" onClick={() => routeur.push(`/accueil?mail=${mailUser}&mailUtilisateur=${mailUser}`)} className="transition-transform hover:scale-105 hover:cursor-pointer" />
                <input type="text" value={valeurRecherche} onChange={(e: any) => setValeurRecherche(e.target.value)} placeholder="Chercher le meilleur logement" className="lg:w-2/3 w-5/6 h-7 border-2 border-gray-300 text-black rounded-lg p-2" />
                <span className="flex flex-row items-center gap-4">
                    <Image src="/reservationIcon.png" width="40" height="40" alt="Réservations" className="hover:cursor-pointer" />
                    <Image src="/photoProfilDefaut.png" width="60" height="60" alt="Profil" onClick={() => routeur.push(`/profil/${mailUser}`)} className="transition-transform hover:scale-105 hover:cursor-pointer" />
                </span>
            </div>
        </>
    )
}