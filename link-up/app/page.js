import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="bg-[rgb(37,79,26)] min-h-[100vh] grid grid-cols-2">
        <div className=" flex items-center justify-center flex-col ml-[5vw] gap-4">
          <h1 className="text-[rgb(210,232,35)] font-bold text-7xl">Everything you are. In one, simple link in bio.</h1>
          <p className="text-[rgb(210,232,35)] text-lg">Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
        </div>
        <div className=" flex items-center justify-center flex-col mr-[5vw]">u r col 2</div>


      </section>


      <section className="bg-[rgb(71,25,25)] min-h-[100vh]">
      </section>
    </main>
  );
}
