'use client'
import { PhraseDiv } from "../components/PhraseDiv";
import { SecretPhraseHeading } from "../components/secretphraseHeading";
import { AgreeAndNext } from "../components/agreeandnext";




export default function SecretPhrase(){

    return(
        <div className="flex h-screen justify-center bg-slate-900">
            <div className="flex flex-col justify-center items-center">
                <SecretPhraseHeading/>
                <PhraseDiv/>
                <AgreeAndNext/>
            </div>
        
        </div>
    )
}
