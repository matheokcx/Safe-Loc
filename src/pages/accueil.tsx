import TopBar from '../composants/TopBar'

export default function accueil() {
    return (
        <>
            <div className="bg-white w-screen h-screen flex flex-col items-center text-black">
                <TopBar />
                <div className="h-4/6 w-full flex flex-col"></div>
            </div>
        </>
    )
}