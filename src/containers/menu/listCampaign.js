import Footer from "@/components/footer";
import { useRouter } from "next/router";

export default function ListCampaign() {
  const router = useRouter();

  return (
    <div className="">
      <div className="text-center text-5xl font-bold mb-24">
        Popular Campaign
      </div>
      <div className="flex flex-wrap gap-x-14 gap-y-14 mb-36 px-24">
        <img
          src="/images/campaign-1.jpg"
          className="w-[600px] h-[260px] grow hover:cursor-pointer"
          onClick={() => router.push("/u/1")}
        />
        <img
          src="/images/campaign-2.jpg"
          className="w-[600px] h-[260px] grow hover:cursor-pointer"
          onClick={() => router.push("/u/1")}
        />
        <img
          src="/images/campaign-3.jpg"
          className="w-[600px] h-[260px] grow hover:cursor-pointer"
          onClick={() => router.push("/u/1")}
        />
        <img
          src="/images/campaign-4.jpg"
          className="w-[600px] h-[260px] grow hover:cursor-pointer"
          onClick={() => router.push("/u/1")}
        />
      </div>
      <Footer />
    </div>
  );
}
