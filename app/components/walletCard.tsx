

type props={
    address:string,
    secret:string,
    bg: string
}

export function WalletCard({address, secret, bg}:props){
    

    return(
        <div className=" flex border-2 border-slate-400 rounded mx-4 my-2 p-2 justify-between ">
           
            <div>
                <div className="sm:flex">
                    <h3 className="text-slate-200 font-semibold font-sans text-md mr-3">Public Key:</h3>
                    <textarea readOnly={true} value={address} className={bg + " text-stone-50 w-96 h-16"}></textarea>
                </div>
                <div className="sm:flex">
                    <h3 className="text-slate-200 font-semibold font-sans text-md mr-3 pr-3">Private Key:</h3>
                    <textarea readOnly={true} value={secret} className={bg + " text-stone-50 w-full h-24"}></textarea>
                </div>
            </div>
        </div>
    )
}

