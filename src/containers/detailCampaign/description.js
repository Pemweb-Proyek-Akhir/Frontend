import { ReducerContext } from "@/hooks/pageContext";
import { getUserToken } from "@/utils/storageUtil";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

export default function Description() {
  const router = useRouter();
  useEffect(() => {
    if (router.query.campaign == undefined) {
      router.replace("/u");
    }
  }, []);
  const { campaign } = useContext(ReducerContext);
  const [paket, setPaket] = useState([]);

  const data = campaign.find((e) => e.id == router.query.campaign);

  const getPackage = async () => {
    try {
      const request = await axios.get("http://localhost:8000/api/package", {
        headers: { Authorization: `Bearer ${getUserToken()}` },
      });
      setPaket(request.data.data);
    } catch (err) {}
  };

  useEffect(() => {
    if (data == null || data == undefined) {
      router.replace("/u");
    }
  }, [data]);

  useEffect(() => {
    getPackage();
    console.log(router.asPath);
  }, []);

  return (
    <div className="flex gap-x-20">
      <div className="basis-[50%]">
        <div className="mb-10">
          <div className="text-2xl font-bold mb-3">{data.name}</div>
          <div className="text-xl flex justify-between px-6 bg-white shadow-md py-3 rounded-xl mb-4">
            <span className="w-[220px] inline-block">
              {"Potential Earn Chips"}
            </span>
            <span className="flex items-center">
              <img src="/icons/chips.svg" className="inline-block mr-1" />
              100
            </span>
          </div>
          <div className="bg-white px-6 py-5 rounded-xl shadow-lg">
            <div className="w-full bg-gray-200 rounded-full mb-4 h-2.5 dark:bg-gray-700">
              <div
                className="bg-primary h-2.5 rounded-full"
                style={{
                  width: `${(data.current / data.target) * 100}%`,
                }}
              ></div>
            </div>
            <div className="flex justify-between items-center">
              <div className="font-medium text-xl text-slate-800">
                Donation Target:{" "}
              </div>
              <div className="text-slate-600">
                {data.current} boxes of {data.target} boxes
              </div>
            </div>
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
          {paket.map((e) => {
            return (
              <div
                onClick={() => router.push(`${router.asPath}/${e.id}`)}
                className="bg-white rounded-xl shadow-md px-8 py-6 flex justify-between hover:bg-secondary text-slate-600 hover:text-white hover:cursor-pointer"
              >
                <div className="font-medium text-xl">{e.name}</div>
                <div className="font-semibold text-xl">Rp{e.price}</div>
              </div>
            );
          })}
          {/* <div
            onClick={() => router.push(`${router.asPath}/1`)}
            className="bg-white rounded-xl shadow-md px-8 py-6 flex justify-between hover:bg-secondary text-slate-600 hover:text-white hover:cursor-pointer"
          >
            <div className="font-medium text-xl">
              Paket 1 : Nasi, Telur, Tempe, Sayur
            </div>
            <div className="font-semibold text-xl">Rp10.000,00</div>
          </div>
          <div
            onClick={() => router.push(`${router.asPath}/2`)}
            className="bg-white rounded-xl shadow-md px-8 py-6 flex justify-between hover:bg-secondary text-slate-600 hover:text-white hover:cursor-pointer"
          >
            <div className="font-medium text-xl">
              Paket 2 : Nasi, Telur, Tempe, Sayur
            </div>
            <div className="font-semibold text-xl">Rp10.000,00</div>
          </div>
          <div
            onClick={() => router.push(`${router.asPath}/3`)}
            className="bg-white rounded-xl shadow-md px-8 py-6 flex justify-between hover:bg-secondary text-slate-600 hover:text-white hover:cursor-pointer"
          >
            <div className=" font-medium text-xl">
              Paket 3 : Nasi, Telur, Tempe, Sayur
            </div>
            <div className="font-semibold text-xl">Rp10.000,00</div>
          </div>
          <div
            onClick={() => router.push(`${router.asPath}/4`)}
            className="bg-white rounded-xl shadow-md px-8 py-6 flex justify-between hover:bg-secondary text-slate-600 hover:text-white hover:cursor-pointer"
          >
            <div className=" font-medium text-xl">
              Paket 4 : Nasi, Telur, Tempe, Sayur
            </div>
            <div className="font-semibold text-xl">Rp10.000,00</div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
