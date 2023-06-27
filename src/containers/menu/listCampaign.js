import Footer from "@/components/footer";
import PageContext, { ReducerContext } from "@/hooks/pageContext";
import getLink from "@/utils/getLink";
import { getUserToken } from "@/utils/storageUtil";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

export default function ListCampaign() {
  const router = useRouter();

  const { campaign, setCampaign } = useContext(ReducerContext);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/campaign", {
        headers: { Authorization: `Bearer ${getUserToken()}` },
      })
      .then((e) => {
        setCampaign(e.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="">
      <div className="text-center text-5xl font-bold mb-24">
        Popular Campaign
      </div>
      <div className="flex flex-wrap gap-x-14 gap-y-14 mb-36 px-24">
        {campaign.map((e) => {
          return (
            <img
              src={getLink(e.thumbnail[0])}
              className="w-[600px] h-[260px]  hover:cursor-pointer"
              onClick={() => router.push(`/u/${e.id}`)}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
