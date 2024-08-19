import { useState } from 'react'
import { useRouter, NextRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {

  const routeur: NextRouter = useRouter();
  const [valeurMail, setValeurMail] = useState<string>("");
  const [valeurMotDePasse, setValeurMotDePasse] = useState<string>("");
  const [messageErreur, setMessageErreur] = useState<string>("");

  const tenterConnexion = async () => {
    const requete = await fetch(`/api/authentification/connexion?mailEntre=${valeurMail}&passwordEntre=${valeurMotDePasse}`);
    if (requete.ok) {
      routeur.push(`/accueil?mailUtilisateur=${valeurMail}`);
    }
    else {
      const retour: any = await requete.json()
      setMessageErreur(retour.message)
    }
  }

  return (
    <>
      <Head>
        <title>SafeLoc - Connexion</title>
      </Head>
      <div className='w-screen h-screen bg-gradient-to-tl from-green-300 to-green-800 bg-fixed flex flex-col justify-center items-center font-sans'>
        <div className='w-3/4 lg:w-1/3 h-1/2 rounded-lg text-black bg-white flex flex-col justify-center items-center gap-8 p-2'>
          <h2 className='w-full font-bold text-2xl text-center'>SafeLoc - Connexion</h2>
          <input type='mail' value={valeurMail} placeholder="Votre Mail" onChange={(e: any) => setValeurMail(e.target.value)} className='text-black w-3/4 lg:w-2/3 h-7 rounded-xl border-2 border-gray-400 p-1' />
          <span className="w-3/4 lg:w-2/3 flex flex-row gap-2 justify-center items-center">
            <input type='password' value={valeurMotDePasse} placeholder="Votre mot de passe" onChange={(e: any) => setValeurMotDePasse(e.target.value)} className='text-black w-2/3 h-7 rounded-xl border-2 border-gray-400 p-1' />
            <button onClick={() => tenterConnexion()} className='w-1/3 h-8 rounded-xl bg-green-400 text-white font-bold transition-transform hover:-translate-y-2 hover:bg-green-600 hover:cursor-pointer'>Go</button>
          </span>
          <Link href="/forgotPassword" >Mot de passe oublié ?</Link>
          <p className='text-red-500 text-sm'>{messageErreur}</p>
          <button onClick={() => routeur.push('/signIn')} className="w-fit p-2 rounded-lg transition-colors bg-fuchsia-400 bg-opacity-55 hover:bg-opacity-100 text-white font-bold">S'inscrire'</button>
        </div>
      </div>
    </>
  );
}
