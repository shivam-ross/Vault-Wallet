'use client'
import { useRouter } from "next/navigation";
import { useState } from "react"
import { mn } from "../actions/generate";

export function ClickAndNext(){
    const[checked, setChecked]=useState(false);
    const router = useRouter();

    return(
        <div>
            <div className="max-w-md flex items-center p mt-2">
                
                    <input checked={checked} onChange={()=> setChecked(!checked)}
                     className="mr-3 w-4 h-4 border-gray-600 bg-gray-700 focus:ring-blue-500 rounded text-cyan-400" type="checkbox"></input>
                    <p className="text-stone-50 leading-8 text-sm font-sans md:text-base lg:text-lg ">
                    I understand that I am responsible for saving my
                    secret recovery phrase, and that it is the only way
                    to recover my wallet
                </p>
            </div>
            <div className="text-center mt-4">
            <button disabled={!checked} onClick={async ()=> {
                const mnemonic =await mn();
                localStorage.setItem("mnemonic", mnemonic);
                router.push('/secretphrase')}}
            className={(checked ?"bg-cyan-400 " : "bg-cyan-900 ") + "text-slate-900 font-sans font-semibold text-lg max-w-md w-full py-2 rounded"}>Next</button>
            </div>

            
        </div>
    )
} 