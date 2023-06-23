import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useState } from "react";

export default function Pembayaran() {
  const [pembayaran, setPembayaran] = useState(0);

  const handleOptionChange = (e) => {
    setPembayaran(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="px-32 py-24">
        <div className="text-[22px] font-light mb-16">
          {"Home > Campaign > Payment"}
        </div>
        <div className="flex gap-28">
          <div className="basis-[40%]">
            <div className="text-xl font-bold mb-6">Data Order</div>
            <div className="mb-2">Name</div>
            <input className="mb-6" placeholder="Input Your Name" />
            <div className="mb-2">Address</div>
            <input className="mb-6" placeholder="Input Your Address" />
            <div className="mb-2">Phone Number</div>
            <input className="mb-10" placeholder="Input Your Phone Number" />
            <div className="text-xl font-bold mb-4">Receiver</div>
            <div className="py-5 px-4 text-xl text-slate-800 shadow-lg rounded-lg ">
              <div className="mb-1">Yayasan Adihusada Malang</div>
              <div className="text-slate-400 font-light mb-4">
                (+62) 812-3456-7890
              </div>
              <div className="font-bold">Jl. Veteran No. 190</div>
              <div>Klojen, Kota Malang, Jawa Timur, 65115</div>
            </div>
          </div>
          <div className="basis-[60%]">
            <div className="font-bold text-xl mb-6">Order Resume</div>
            <div className="bg-slate-100 rounded-xl mb-10 shadow-md px-8 py-6 flex justify-between  text-slate-600">
              <div className=" font-medium text-xl">
                Paket 4 : Nasi, Telur, Tempe, Sayur
              </div>
              <div className="font-semibold text-xl">Rp10.000,00</div>
            </div>
            <div className="text-xl font-bold mb-6">Payment Method</div>
            <div>
              <div
                onClick={() => setPembayaran(1)}
                className="bg-slate-100 hover:cursor-pointer items-center gap-5 text-slate-600 text-xl rounded-xl flex justify-start mb-10 shadow-md px-8 py-6"
              >
                <input
                  type="radio"
                  value="1"
                  checked={pembayaran == 1}
                  id="1"
                  onChange={handleOptionChange}
                  className="w-fit"
                />
                <img src="/icons/shopeepay.svg" />
                <div>ShopeePay</div>
              </div>
              <div
                onClick={() => setPembayaran(2)}
                className="bg-slate-100 hover:cursor-pointer items-center gap-5 text-slate-600 text-xl rounded-xl flex justify-start mb-7 shadow-md px-8 py-6"
              >
                <input
                  type="radio"
                  value="2"
                  checked={pembayaran == 2}
                  id="2"
                  onChange={handleOptionChange}
                  className="w-fit"
                />
                <img src="/icons/gopay.svg" />
                <div>Gopay</div>
              </div>
              <button
                className="px-5 py-3 bg-secondary rounded-lg text-white shadow-md disabled:bg-slate-300"
                disabled={pembayaran == 0}
              >
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
