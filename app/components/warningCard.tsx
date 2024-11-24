import Image from "next/image"

type props = {
    src:string,
    text:string,
    h:number,
    w:number
};

export function WarningCard({src, text, h, w}:props){
    return(
        <div className="flex items-center gap-3 bg-slate-500 max-w-md p-2 mt-2 rounded">
            <div>
                <Image className="" width={w} height={h} src={src} alt="icon"></Image>
            </div>
            <div>
                <p className="text-stone-50 text-lg font-normal font-sans">{text}</p>
            </div>
        </div>
    )
}