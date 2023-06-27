import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Description from "@/containers/detailCampaign/description";
import { ReducerContext } from "@/hooks/pageContext";
import getLink from "@/utils/getLink";
import { useRouter } from "next/router";
import { useContext, useEffect, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function DetailCampaign() {
  const router = useRouter();
  useEffect(() => {
    if (router.query.campaign == undefined) {
      router.replace("/u");
    }
  }, []);
  const { campaign } = useContext(ReducerContext);
  const data = useMemo(
    () => campaign.find((e) => e.id == router.query.campaign),
    [router.query.campaign]
  );

  // update

  useEffect(() => {
    if (data == null || data == undefined) {
      router.replace("/u");
    }
  }, [data]);

  return (
    <div className="bg-slate-50">
      <Navbar />
      <div className="pl-28">
        <div className="mt-16 text-xl font-light mb-20">
          {"Home > Campaign"}
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1.5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data.thumbnail.map((e) => (
            <SwiperSlide>
              <img
                src={getLink(e)}
                className="w-full h-96 rounded-2xl shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-20 pr-28 mb-28">
          <Description />
        </div>
      </div>
      <Footer />
    </div>
  );
}
