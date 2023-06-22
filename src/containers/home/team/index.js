import Image from "next/image";

export default function Team() {
  return (
    <div className="px-24 mb-20">
      <div className="text-5xl text-center font-bold text-slate-900 mb-20">
        Our Team
      </div>
      <div className="flex space-x-8 text-center text-slate-700 text-[28px] font-bold">
        <div className="grow px-4  py-10 bg-slate-100 rounded-2xl shadow-lg">
          <Image
            className="mx-auto mb-10"
            src="/images/fadli.png"
            width={212}
            height={212}
          />
          <div className="mb-8">
            Muhammad
            <br />
            Fadli Hasan
          </div>
          <div className="text-xl font-normal">215150200111063</div>
        </div>
        <div className="grow px-4 py-10 bg-slate-100 rounded-2xl shadow-lg">
          <Image
            className="mx-auto mb-10"
            src="/images/khansa.png"
            width={212}
            height={212}
          />
          <div className="mb-8">
            Khansa Salsabila
            <br />
            Sangdiva Laksono
          </div>
          <div className="text-xl font-normal">215150201111068</div>
        </div>
        <div className="grow px-4 py-10 bg-slate-100 rounded-2xl shadow-lg">
          <Image
            className="mx-auto mb-10"
            src="/images/radit.png"
            width={212}
            height={212}
          />
          <div className="mb-8">
            Raditya Atmaja
            <br />
            Satria Permadhi
          </div>
          <div className="text-xl font-normal">215150200711042</div>
        </div>
        <div className="grow px-4 py-10 bg-slate-100 rounded-2xl shadow-lg">
          <Image
            className="mx-auto mb-10"
            src="/images/roiyan.png"
            width={212}
            height={212}
          />
          <div className="mb-8">
            Roiyan Zain
            <br />
            Rofiif
          </div>
          <div className="text-xl font-normal">215150200111051</div>
        </div>
      </div>
    </div>
  );
}
