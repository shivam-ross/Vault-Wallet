'use client'
import { useRouter } from "next/navigation";
import { useState } from "react"

export function AgreeAndNext(){
    const[saved, setSaved] = useState(false);
    const router=useRouter();
    return(
        <div className="text-center mt-6">
            <div className="mb-4">
                <label className="text-stone-50 font-lg font-semibold font-sans">
                    <input type="checkbox" checked={saved} className="mr-4" onChange={()=> {
                        setSaved(!saved);
                    }}></input>
                    I saved my recovery phrase
                </label>
            </div>
            <button disabled={!saved} onClick={()=> {router.push('/dashboard')}}
             className={(saved ?"bg-cyan-400 " : "bg-cyan-900 ") + "text-slate-900 font-sans font-semibold text-lg py-2 max-w-md w-full rounded"}>Next</button>
        </div>
    )
}