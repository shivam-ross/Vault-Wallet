type prop = {
    text:string
};
export function DivElement({text}:prop){
    return(<div className="bg-slate-600 px-10 py-2 rounded">
        <div className="flex text-cyan-400 rounded text-lg font-sans font-medium ">
            <p className="">{text}</p>
        </div>
        </div>
    )
}