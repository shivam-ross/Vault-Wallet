import { ClickAndNext } from "../components/clickAndNext";
import { TopHeading } from "../components/topHeading";
import { WarningCard } from "../components/warningCard";

export default function CreateWallet(){
    return(
        <div className="flex h-screen justify-center bg-slate-900">
            <div className="flex flex-col justify-center items-center">
                <TopHeading heading={"Secret Recovery Phrase Warning"} para1={"on the next page, ypu will recieve your secret"}
                para2={"recovery phrase"}/>
                <WarningCard text={"This is the ONLY way to recover your account if you lose access to your device or password."}
                src={"/warning.png"} h={70} w={70}/>
                <WarningCard text={"Write it down, store it in a safe place, and NEVER share it with anyone."}
                src="/lock.png" h={50} w={50}/>
                <ClickAndNext/>
            </div>
        </div>
    )
}