'use client'

import { useEffect, useRef, useState } from "react"
import { WalletCard } from "./walletCard";
import { createSolWallet } from "../actions/generate";
import Image from "next/image";
import { Balance } from "./balance";
import axios from "axios";

interface KeysType {
    public: string;
    private: string;
  }

export function SolWalletDiv(){


    const[keys, setKeys] = useState<KeysType[]>([{public: "", private: ""}])
    const [index, setIndex] = useState(0);
    const [bal, setBal] = useState('');
    const isMounted = useRef(false);
    const[cut, setCut] = useState(false);

    useEffect(() => {
        if (isMounted.current) {
          // Run only after the initial render
          fetchBalance(keys[0].public);
        } else {
          // Mark as mounted after the first render
          isMounted.current = true;
        }
      }, [keys]); 

      


   

    const fetchBalance = async (address: string) => {
        if (address == '') {
          return 0;
        }
          const rpcUrl = "https://api.devnet.solana.com";
          const body = {
            jsonrpc: "2.0",
            id: 1,
            method: "getBalance",
            params: [address],
          };

          const response = await axios.post(rpcUrl, body, {
            headers: { "Content-Type": "application/json" },
          });
    
          if (response.data && response.data.result !== undefined) {
            const lamports: number = response.data.result.value;
            const sol: number = lamports / 1e9; 
            setBal(sol.toString());
          } else {
            throw new Error("Failed to fetch balance.");
          }
       
      };
      
    


   
    return(<div>
        <Balance balance={bal.toString()} sign="SOL "/>
        <div className="flex justify-between mb-4 ml-4">
            <div className=" flex items-center">
            
                <Image className="rounded-full" src={'/sol.png'} alt="sol" width={50} height={50}></Image>
            
              <h2 className="text-2xl font-sans font-semibolds text-stone-50 ml-2">Solana Wallets : </h2>
            </div>
            <div>
                <button className="bg-cyan-400 text-slate-900 font-semibold font-lg p-2 rounded mr-4" onClick={async () => {
                    const mn = localStorage.getItem('mnemonic');
                    if(mn !== null){
                      const pair = await createSolWallet(mn, index);
                    setIndex(()=>{return index+1})
                    if(cut == false){
                        const key = keys;
                        key.shift();
                        setKeys(key);
                        setCut(true);
                    }
                    setKeys([...keys, pair]);
                    }
                
                    
                    }}>Add Wallet</button>
            </div>
                
            </div>
        <div>
            {keys.map((m, i)=> <WalletCard key={i} address={m.public} secret={m.private} bg="bg-slate-900"/>)}
             

        </div>
        </div>
    )
}