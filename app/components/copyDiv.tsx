'use client'

import { useEffect, useState } from "react"

type prop = {
    mnemonics: string
}

export function CopyDiv ({mnemonics}:prop){
    const[copied, setCopied] = useState(false);
    useEffect(()=> {
        localStorage.setItem("mnemonics", mnemonics);
    },[mnemonics])
return(
    <div className="text-center mt-4 text-md font-semibold text-stone-50 font-sans">
            <p onClick={() => {
             navigator.clipboard.writeText(mnemonics);
             setCopied(true);
            }}>{(copied)? "copied...!" : "click here to copy"}</p>
        </div>
)
}