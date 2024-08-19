import { useState } from 'react'

export default function forgotPassword() {

    const [valeurChamp, setValeurChamp] = useState<string>("");
    const [retour, setRetour] = useState<string>("");

    const resetPassword = async () => {
        const requete = await fetch("/api/authentification/resetPassword", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                adresseMail: valeurChamp
            })
        });

        if (!requete.ok) {
            setRetour("Mail introuvable");
        }
    }

    return (
        <>
            <div className="bg-gradient-to-br from-green-400 to-blue-400 bg-fixed w-screen h-screen flex flex-col justify-center items-center">
                <div className="w-1/3 h-2/3 bg-white text-black font-sans rounded-xl flex flex-col justify-center items-center gap-14">
                    <h2 className='w-full font-bold text-2xl text-center'>SafeLoc - Réinitialiser votre mot de passe</h2>
                    <input type="mail" placeholder="Entrer votre mail pour réinitialiser votre mdp" value={valeurChamp} onChange={(e: any) => setValeurChamp(e.target.value)} className='text-black w-3/4 lg:w-2/3 h-7 rounded-xl border-2 border-gray-400 p-1' />
                    <p className="text-sm w-full text-center">Nous vous enverrons un e-mail sur votre adresse pour pouvoir réinitaliser votre mot de passe</p>
                    <button onClick={() => resetPassword()} className="w-1/3 p-4 rounded-lg bg-green-400 text-white">Envoyer</button>
                    <p className="text-red-400">{retour}</p>
                </div>
            </div>
        </>
    )
}