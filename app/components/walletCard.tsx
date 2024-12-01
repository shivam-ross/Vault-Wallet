

type props={
    address:string,
    secret:string,
    bg: string
}

export function WalletCard({address, secret, bg}:props){
    

    return(
      <div className=" flex border-2 border-slate-400 rounded mx-4 my-2 p-2 justify-between overflow-y-auto max-w-screen ">
           
            <div>
                <div className="flex sm:flex-row flex-col max-w-screen overflow-y-auto">
                    
                    <h3 className="text-slate-200 font-semibold font-sans text-md mr-3">Public Key:</h3>
                    <div className="flex justify-start">
                        <p className={bg + " text-stone-50 w-96 h-16 max-w-[70dvw] sm:max-w-[35dvw] break-words"}>{address}</p>
                    </div>
                </div>
                <div className="flex sm:flex-row flex-col max-w-screen overflow-y-auto">
                    <h3 className="text-slate-200 font-semibold font-sans text-md mr-3 pr-3">Private Key:</h3>
                    <div className="flex justify-start">
                    <p className={bg + " text-stone-50 w-full h-24 max-w-[70dvw] sm:max-w-[35dvw] break-words"}>{secret}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

