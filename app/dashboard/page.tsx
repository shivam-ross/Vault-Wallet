import { Etherium } from "../components/etherium";
import { Solana } from "../components/solana";

export default function Dashboard(){
    return(
        <div className="grid sm:grid-cols-2 gap-3 bg-slate-400 min-h-screen max-w-screen">
            <Solana/>
            <Etherium/>
        </div>
    )
}