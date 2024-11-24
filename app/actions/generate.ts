'use server'
import { Keypair } from '@solana/web3.js';
import { generateMnemonic, mnemonicToSeed } from 'bip39';
import { derivePath } from 'ed25519-hd-key';
import nacl from 'tweetnacl';
import { Wallet, HDNodeWallet } from "ethers";

export async function mn(){
  const mn = await generateMnemonic();
  return mn;
}




  export async function createSolWallet(mnemonic:string, index: number): Promise<{public:string, private: string }> {


      const seed =  await mnemonicToSeed(mnemonic);
      const path = `m/44'/501'/${index}'/0'`; 
      const derivedSeed = derivePath(path, seed.toString('hex')).key;
      const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
      const keypair = Keypair.fromSecretKey(secret);

      const pairs = {
        public : keypair.publicKey.toBase58(),
        private : Buffer.from(keypair.secretKey).toString('hex')
    }
      return pairs;
   
  };

  export async function createEthWallet(mnemonic: string, index: number): Promise<{public: string, private: string}>{
    const seed = await mnemonicToSeed(mnemonic);
    const derivationPath = `m/44'/60'/${index}'/0'`;
    const hdNode = HDNodeWallet.fromSeed(seed);
    const child = hdNode.derivePath(derivationPath);
    const privateKey = child.privateKey;
    const wallet = new Wallet(privateKey);
    const keys = {
      public : wallet.address,
      private : privateKey
                };
    return keys
  }