import Image from "next/image";
import Navbar from "@/components/navbar";
import About from "@/containers/home/about";
import Product from "@/containers/home/product";
import Manual from "@/containers/home/manual";
import Team from "@/containers/home/team";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* JUMBOTRON */}
      <div className="jumbotron">
        <div className="j2">
          <div className="w-[35%] pl-12 h-full flex justify-center flex-col">
            <div className="font-bold text-slate-50 text-5xl mb-6">
              Dari Nasi Uduk sampai Mie Gludug
            </div>
            <div className="font-medium text-white text-2xl mb-5">
              Pesennya sat set tinggal duduk Makan puas ampe perut hampir
              meledug
            </div>
            <img src="/logo/logo-white.svg" width={"248px"} />
          </div>
        </div>
        <div className={"j1"}></div>
        <img className={"banner"} src="/images/jumbotron.jpg" />
      </div>
      <About />
      <Product />
      <Manual />
      <Team />

      <Footer />
    </div>
  );
}
