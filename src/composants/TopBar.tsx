import Image from 'next/image'
import { useState } from "react"

export default function TopBar() {

    const [valeurRecherche, setValeurRecherche] = useState<string>("");

    return (
        <>
            <div className="w-full h-2/6 rounded-xl bg-green-400 flex flex-row justify-center items-center gap-4">
                <input type="text" value={valeurRecherche} onChange={(e: any) => setValeurRecherche(e.target.value)} placeholder="Chercher le meilleur logement" className="w-4/6 h-7 border-2 border-gray-400 text-black rounded-xl p-2" />
                <Image src="/reservationIcon.png" width="50" height="50" alt="Réservations" />
            </div>
        </>
    )
}