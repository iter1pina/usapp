import Image from "next/image";

export default function Home() {
  return (
   <main className="w-full h-screen gap-4 flex flex-col items-center justify-center bg-slate-500">
       {/*Aqui fica o logo da US*/} 
        <Image src="/img/usLogo.jpg" width={170} height={170} alt="us_image" className="rounded-full"/>
      
      <div className="w-20 h-20 mx-auto rounded-full">{/*Guess div do utilizador*/}
      </div>

      <div className="flex flex-col gap-6 text-xl itens-center justify-center">
       <form action="">
        <div className="flex flex-col gap-1 text-gray-950">
        <label htmlFor="">Nome</label>
        <input type="text" className="p-2 m-2 bg-slate-200 shadow-black border-gray-500 text-black rounded-md"/>
        </div>
        <div className="flex flex-col gap-1 text-gray-950">
          <label htmlFor="">email</label>
          <input type="email" className="p-2 m-2 bg-slate-200 shadow-black border-gray-500 text-black rounded-md"/>
        </div>
        <div className="flex flex-col gap-1 text-gray-950">
          <label htmlFor="">Password</label>
          <input type="password" className="p-2 m-2 bg-slate-200 shadow-black border-gray-500 text-black rounded-md"/>
        </div>
        <button>Slavar</button>
       </form>
      </div>

   </main>
  );
}
