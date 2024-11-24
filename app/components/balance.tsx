type balanceType = {
    balance: string,
    sign: string
}

export function Balance({balance, sign}: balanceType){

    return(
        <div className="p-4 mb-4">
                <p className="text-gray-200 font-md font-sans font-semibold">Balance :</p>
                <div className="flex text-stone-50 font-normal font-serif ml-4">
                    <h2 className="text-lg mr-2">{sign}</h2>
                    <h2 className="text-6xl">{balance}</h2>
                </div>
            </div>
    )
}