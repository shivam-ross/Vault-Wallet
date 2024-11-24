import Link from "next/link";

export function SecretPhraseHeading(){
    return(
        <div className="text-center ">
            <h1 className=" text-4xl text-stone-50 md:text-5xl font-semibold font-sans ">Secret Recovery Phrase</h1>
            <p className="text-slate-400 text-lg font-sans my-4">save these words in a safe place</p>
            <Link className="text-cyan-400 text-lg font-sans " href={'/createwallet'}>
            Read the warnings again</Link>
        </div>
    )
}