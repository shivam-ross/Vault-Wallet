'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";



export default function ImportWallet(){
    const [secret, setScecret] = useState([""]);
    const [number, setNumber] = useState(12);
    const [checked, setChecked] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const arr = Array(number).fill("");
        setScecret(arr);
    },[number]);

    useEffect(() => {
        const isEmpty = secret.some((item) => item === "");
        setChecked(!isEmpty);
    }, [secret]);

    useEffect(() => {
        const mnemonic = localStorage.getItem("mnemonic");
        if (mnemonic) {
            setScecret(mnemonic.split(" "));
        }
    },[]);

    return(
        <div className="flex flex-col min-h-screen justify-center bg-slate-900 items-center w-full">
            <div className="text-center ">
                <h1 className=" text-4xl text-stone-50 md:text-5xl font-semibold font-sans "> Enter Secret Recovery Phrase</h1>
                <p className="text-slate-400 text-lg font-sans my-4">hii there</p>
                <button 
                onClick={() => { if( number == 12){
                    setNumber(24);
                }else{
                    setNumber(12);
                }
                }
                }
                className="text-cyan-400 text-lg font-sans " >
            {(number == 12)? "Use 24 Words Secret Phrase" : "Use 12 Words Secret Phrase"}</button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 bg-slate-700 gap-4 mt-10 p-4 w-[90vw] md:w-[60vw]"
            onPaste={(e) => {
                const pastedData = e.clipboardData.getData("text");
                const words = pastedData.split(" ");
                const newSecret = [...secret];
                for (let i = 0; i < words.length; i++) {
                    newSecret[i] = words[i];
                }
                setScecret(newSecret);
            }
            }>
                {secret.map((item, index) => (
                    <input 
                    key={index}
                    value={secret[index]}
                    type="text" 
                    className="border-2 border-cyan-400 bg-slate-900 text-slate-50 mb-2 px-8 py-2 rounded-lg text-md font-semibold font-sans text-lg"
                    placeholder={`Word ${index + 1}`}
                    onPaste={(e) => {
                        e.preventDefault();
                    }
                    }
                    
                    onChange={(e) => {
                        const newSecret = [...secret];
                        newSecret[index] = e.target.value;
                        setScecret(newSecret);
                    }}
                    />
                ))}
               
            </div>
            <div className="flex w-full justify-center mt-4">
            <button onClick={async ()=> {
                const mnemonic = secret.join(" ");
                localStorage.setItem("mnemonic", mnemonic);
                router.push('/dashboard');}}
             disabled = {!checked}
             className={(checked ?"bg-cyan-400 " : "bg-cyan-900 ") + "text-slate-900 font-sans font-semibold text-lg max-w-sm w-full py-2 rounded"}>
            Next</button>
            </div>
                        
        </div>
    )
}
