import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Description from "@/containers/detailCampaign/description";
import { Swiper, SwiperSlide } from "swiper/react";

export default function DetailCampaign() {
  return (
    <div>
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
          <SwiperSlide>
            <img src="/images/campaign-1.jpg" className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/campaign-1.jpg" className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/campaign-1.jpg" className="w-full" />
          </SwiperSlide>
        </Swiper>
        <div className="mt-20 pr-28 mb-28">
          <Description />
        </div>
      </div>
      <Footer />
    </div>
  );
}
