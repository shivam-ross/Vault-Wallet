'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export function HomeComponent (){
    const router = useRouter();
    return(
        <div className="h-screen flex justify-center bg-slate-900">
            <div className="flex flex-col justify-center text-center items-center">
                <Image src="/Untitled design.png" alt="logo" width={150} height={150}></Image>
                <div className='mt-4 mb-10'>
                    <h1 className='text-stone-50 text-5xl font-bold subpixel-antialiased'>Welcome to Vault</h1>
                    <p className='text-slate-400 text-xl font-sans'>Next Gen Crypto Wallet</p>
                </div>
                <div className='flex flex-col mt-10'>
                    <button onClick={() => router.push('/createwallet')} className='border-2 border-cyan-400 bg-slate-900 text-cyan-400 mb-2 px-8 py-2 rounded-lg text-md font-semibold font-sans text-lg'>
                        Create a new wallet
                    </button>
                    <button onClick={() => router.push('/importwallet')} className='bg-cyan-400 text-slate-900 px-8 py-2 rounded-lg text-md font-semibold font-sans text-lg' > Import wallet</button>
                </div>
            </div>
        </div>
    )
} 