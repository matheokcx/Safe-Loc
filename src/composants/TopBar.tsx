import Image from 'next/image'
import { useState } from "react"
import { useRouter, NextRouter } from 'next/router'

interface Props {
    mailClient: string;
}

export default function TopBar({ mailClient }: Props) {

    const [valeurRecherche, setValeurRecherche] = useState<string>("");
    const routeur: NextRouter = useRouter();

    return (
        <>
            <div className="w-full h-1/4 rounded-xl border-2 border-b-gray-600 border-solid flex flex-row justify-center items-center gap-8">
                <Image src="/logo.png" width="70" height="70" alt="Logo Accueil" onClick={() => routeur.push(`/accueil?mail=${mailClient}&mailUtilisateur=${mailClient}`)} className="transition-transform hover:scale-105 hover:cursor-pointer" />
                <input type="text" value={valeurRecherche} onChange={(e: any) => setValeurRecherche(e.target.value)} placeholder="Chercher le meilleur logement" className="w-2/3 h-7 border-2 border-gray-400 text-black rounded-lg p-1" />
                <Image src="/reservationIcon.png" width="40" height="40" alt="Réservations" className="hover:cursor-pointer" />
                <Image src="/photoProfilDefaut.png" width="60" height="60" alt="Profil" onClick={() => routeur.push(`/profil/${mailClient}`)} className="transition-transform hover:scale-105 hover:cursor-pointer" />
            </div>
        </>
    )
}