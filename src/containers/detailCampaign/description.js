import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Description() {
  const router = useRouter();

  useEffect(() => {
    console.log(router.asPath);
  }, []);

  return (
    <div className="flex gap-x-20">
      <div className="basis-[50%]">
        <div className="mb-10">
          <div className="text-xl flex">
            <span className="w-[220px] inline-block">
              {"Potential Earn Chips"}
            </span>
            <span className="flex items-center">
              <img src="/icons/chips.svg" className="inline-block mr-1" />
              100
            </span>
          </div>
          <div className="text-xl">
            <span className="w-[220px] inline-block">{"Donation Target:"}</span>
            <span className="text-slate-600">100 boxes</span>
          </div>
        </div>
        <div className="text-slate-800 text-xl font-bold mb-2">Description</div>
        <div className="text-justify text-slate-600 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
          quis sapien eu rutrum. Fusce vitae enim eget ipsum eleifend feugiat eu
          vel neque. Praesent sit amet justo magna. Sed aliquam nisl ut diam
          eleifend, id vehicula dolor vehicula. Praesent at ante ut sapien
          placerat dapibus in ut magna. Sed lacinia turpis vel neque efficitur
          mollis. Donec eget interdum ipsum. Vivamus euismod lorem sed consequat
          consectetur. Sed pretium nunc sit amet ante suscipit fringilla.
          Aliquam erat volutpat. Sed non arcu velit. Vivamus quis lectus eget
          nisi efficitur aliquam. Nullam sodales turpis id odio vulputate
          varius. Sed nec felis eu arcu convallis suscipit.
        </div>
      </div>
      <div className="basis-[50%]">
        <div className="font-bold text-xl mb-10">Choose your package</div>
        <div className="flex flex-col gap-6">
          <div
            onClick={() => router.push(`${router.asPath}/1`)}
            className="bg-slate-100 rounded-xl shadow-md px-8 py-6 flex justify-between hover:bg-secondary text-slate-600 hover:text-white hover:cursor-pointer"
          >
            <div className="font-medium text-xl">
              Paket 1 : Nasi, Telur, Tempe, Sayur
            </div>
            <div className="font-semibold text-xl">Rp10.000,00</div>
          </div>
          <div
            onClick={() => router.push(`${router.asPath}/2`)}
            className="bg-slate-100 rounded-xl shadow-md px-8 py-6 flex justify-between hover:bg-secondary text-slate-600 hover:text-white hover:cursor-pointer"
          >
            <div className="font-medium text-xl">
              Paket 2 : Nasi, Telur, Tempe, Sayur
            </div>
            <div className="font-semibold text-xl">Rp10.000,00</div>
          </div>
          <div
            onClick={() => router.push(`${router.asPath}/3`)}
            className="bg-slate-100 rounded-xl shadow-md px-8 py-6 flex justify-between hover:bg-secondary text-slate-600 hover:text-white hover:cursor-pointer"
          >
            <div className=" font-medium text-xl">
              Paket 3 : Nasi, Telur, Tempe, Sayur
            </div>
            <div className="font-semibold text-xl">Rp10.000,00</div>
          </div>
          <div
            onClick={() => router.push(`${router.asPath}/4`)}
            className="bg-slate-100 rounded-xl shadow-md px-8 py-6 flex justify-between hover:bg-secondary text-slate-600 hover:text-white hover:cursor-pointer"
          >
            <div className=" font-medium text-xl">
              Paket 4 : Nasi, Telur, Tempe, Sayur
            </div>
            <div className="font-semibold text-xl">Rp10.000,00</div>
          </div>
        </div>
      </div>
    </div>
  );
}
