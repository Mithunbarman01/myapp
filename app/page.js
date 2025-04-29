import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className=" grid grid-cols-2 h-[50vh]">
        <div className="  flex flex-col gap-4 items-center justify-center">
          <p className="font-bold text-3xl" >The best URL shortner in this market</p>
          <p className="px-56 font-medium">
          Shorten your long, complicated URLs with BitLinks — the fastest and simplest link shortener. Create clean, easy-to-share links in just seconds. Whether for social media, emails, or marketing, BitLinks makes your links look professional and reliable. Start shortening today and make every link count with speed and simplicity!
          </p>
          
          <div className='flex gap-3 justify-start'>
          <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white cursor-pointer'>Try Now</button></Link>
          <Link href="https://github.com/Mithunbarman01" target="_blank"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white cursor-pointer'>GitHub</button></Link>
        </div>

      
        </div>
        <div className=" flex justify-start relative">
          <Image className="mix-blend-darken" alt="an Image of a vector" src={"/vector.svg"} fill={true} />
        </div>
      </section>
    </main>
  );
}
