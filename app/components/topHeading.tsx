type props = {
    heading:string,
    para1: string,
    para2: string
};

export function TopHeading({heading, para1, para2}:props){
    return(
        <div className="text-center">
                    <h1 className="font-sans text-2xl md:text-3xl lg:text-4xl font-bold text-stone-50">{heading}</h1>
                    <p className="tracking-widest font-mono text-slate-400 text-md mt-4">{para1}<br/>{para2}</p>
                </div>
    )
}