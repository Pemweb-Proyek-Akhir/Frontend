import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <div className="j2">
          <div className="w-[35%] pl-12 h-full flex justify-center flex-col">
            <div className="font-bold text-white text-5xl mb-6">
              Dari Nasi Uduk sampai Mie Gludug
            </div>
            <div className="font-medium text-white text-2xl mb-5">
              Pesennya sat set tinggal duduk Makan puas ampe perut hampir
              meledug
            </div>
            <img src="/logo/logo-white.svg" width={"248px"} />
          </div>
        </div>
        <div className="j1 absolute"></div>
        <img className="absolute banner" src="/images/jumbotron.jpg" />
      </div>
    </div>
  );
}
