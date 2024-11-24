'use client'
import { CopyDiv } from "./copyDiv";
import { DivElement } from "./divElement";


export function PhraseDiv(){

    const mnemonic = localStorage.getItem("mnemonic")||""


    return(<div className="bg-slate-500 mt-6 p-4 rounded ">
        <div className="grid grid-cols-3 gap-4 max-w-md lg:max-w-2xl lg:grid-cols-4 ">
            {mnemonic.split(' ').map((m, i)=>(<DivElement key={i} text={m}/>))}
            
        </div>
        <CopyDiv mnemonics={mnemonic}/>
        </div>
    )
}