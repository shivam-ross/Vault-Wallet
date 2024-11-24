'use client'
import Image from "next/image";
import { Balance } from "./balance";
import { createEthWallet } from "../actions/generate";
import { useEffect, useRef, useState } from "react";
import { WalletCard } from "./walletCard";
import axios from "axios";


export function Etherium () {
    const[keys, setKeys] = useState<{public:string, private:string}[]>([{public:'', private:''}]);
    const [index, setIndex] = useState(0);
    const [bal, setBal] = useState("");
    const isMounted =useRef(false);
    const [cut, setCut] = useState(false);


    // useEffect(()=>{

    //     const mn = localStorage.getItem("mnemonic");
    //                 if(mn !== null){
    //                     const firstKey  = [];
    //                     createEthWallet(mn,index).then((res)=>{
    //                         firstKey.push(res)});
    //                     setIndex(()=>{return index+1;})
    //                      setKeys(firstKey)
    //                 };
            

    // },[])


    useEffect(() => {
        if (isMounted.current) {
          // Run only after the initial render
          fetchBalance(keys[0].public);
        } else {
          // Mark as mounted after the first render
          isMounted.current = true;
        }
      }, [keys]); // Runs when `data` changes

      
    
      


    const fetchBalance = async (address: string) => {
        if (!address) {
          return 0;
        };
          // Replace YOUR_INFURA_PROJECT_ID with your Infura project ID
          const infuraUrl = "https://mainnet.infura.io/v3/470f5c53115547199d44f1409c208a31";
    
          // JSON-RPC request payload
          const body = {
            jsonrpc: "2.0",
            method: "eth_getBalance",
            params: [address, "latest"], // Fetch balance at the latest block
            id: 1,
          };
    
          // Make the POST request with Axios
          const response = await axios.post(infuraUrl, body, {
            headers: { "Content-Type": "application/json" },
          });
    
          if (response.data.result) {
            // Convert hex balance (wei) to Ether
            const wei = BigInt(response.data.result); // Hex balance
            const ether = (wei / BigInt(10 ** 18)).toString(); // Convert wei to Ether
            setBal(ether);
          } else {
            throw new Error("Failed to fetch balance.");
          }
        
      };


    
    
    return(
        <div className='bg-stone-900 py-8 rounded-xl m-4 max-w-screen'>
            <Balance balance={bal} sign="ETH"/>
            <div>
            <div className="flex justify-between mb-4 ml-4">
            <div className=" flex items-center">
            
                <Image className="rounded-full" src={'/eth.png'} alt="sol" width={50} height={50}></Image>
            
              <h2 className="text-2xl font-sans font-semibolds text-stone-50 ml-2">Etherium Wallets : </h2>
            </div>
            <div>
                <button onClick={async() => { 
                    const mn = localStorage.getItem("mnemonic");
                    if(mn !== null){
                        const pair = await createEthWallet(mn,index);
                        await setIndex(()=>{return index+1;})
                        if(cut == false){
                            const key = keys;
                            key.shift();
                            setKeys(key);
                            setCut(true);
                        }
                         await setKeys([...keys, pair]);
                        
                    };
    
                }
            }
                    className="bg-cyan-400 text-stone-900 font-semibold font-lg p-2 rounded mr-4">Add Wallet</button>
            </div>
                
            </div>

            {keys.map((m, i)=> <WalletCard key={i} address={m.public} secret={m.private} bg="bg-stone-900"/>)}

        </div>
        </div>
    )
}