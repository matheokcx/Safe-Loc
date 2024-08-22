import { useState } from 'react'
import { useRouter, NextRouter } from "next/router"
import Head from 'next/head'

export default function inscription() {

    const routeur: NextRouter = useRouter();
    const [valeurMail, setValeurMail] = useState<string>("");
    const [valeurMotDePasse, setValeurMotDePasse] = useState<string>("");
    const [valeurTypeCompte, setValeurTypeCompte] = useState<string>("");
    const [messageErreur, setMessageErreur] = useState<string>("");

    const creerCompte = async () => {
        const requete = await fetch("/api/authentification/creerCompte", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                mailValeur: valeurMail,
                passwordValeur: valeurMotDePasse,
                typeValeur: valeurTypeCompte
            })
        });

        if (requete.ok) {
            routeur.push(`/accueil?mailUtilisateur=${valeurMail}`);
        }
        else {
            const retour: any = await requete.json();
            setMessageErreur(retour.message);
        }
    }

    return (
        <>
            <Head>
                <title>SafeLoc - Inscription</title>
            </Head>
            <div className='w-screen h-screen bg-gradient-to-br from-green-500 to-green-900 dark:from-green-800 dark:to-green-950 bg-fixed flex flex-col justify-center items-center font-sans'>
                <div className='w-3/4 lg:w-1/3 h-2/3 rounded-lg text-black bg-white flex flex-col justify-center items-center gap-10 p-2'>
                    <h2 className='w-full font-bold text-2xl text-center'>SafeLoc - Créer un compte</h2>
                    <input type='mail' value={valeurMail} placeholder="Votre Mail" onChange={(e: any) => setValeurMail(e.target.value)} className='text-black w-3/4 lg:w-2/3 h-7 rounded-xl border-2 border-gray-400 p-1' />
                    <input type='password' value={valeurMotDePasse} placeholder="Votre mot de passe" onChange={(e: any) => setValeurMotDePasse(e.target.value)} className='text-black w-3/4 lg:w-2/3 h-7 rounded-xl border-2 border-gray-400 p-1' />
                    <fieldset className="w-full flex flex-row justify-around">
                        <label>Client:</label><input type="radio" onChange={(e: any) => setValeurTypeCompte("client")} />
                        <label>Vendeur:</label><input type="radio" onChange={(e: any) => setValeurTypeCompte("vendeur")} />
                    </fieldset>
                    <p className="w-full text-center text-red-500 text-sm">{messageErreur}</p>
                    <span className="w-full flex flex-row gap-4 justify-center items-center">
                        <button className="w-fit p-2 rounded-lg bg-green-400 text-white font-bold" onClick={() => routeur.push("/")}>Se connecter</button>
                        <button onClick={() => creerCompte()} className="w-fit p-2 rounded-lg bg-fuchsia-400 text-white font-bold">Créer votre compte</button>
                    </span>
                </div>
            </div>
        </>
    )
}