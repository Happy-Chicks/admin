import Image from "next/image";
import Head from "next/head";
import TopBar from "../components/topbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-screen">
        <div className="w-full h-full ">
          <div className="w-full h-[10%] border-4 border-black">
            <TopBar />
          </div>
          <div className="w-full h-[87%] overflow-y-scroll mt-[1.5%] border-4 border-black">
            <p>Dashboard</p>
          </div>
        </div>
      </main>
    </>
  );
}
