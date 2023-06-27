import Navbar from "@/components/navbar";
import MenuBanner from "@/containers/menu/banner";
import ListCampaign from "@/containers/menu/listCampaign";
import { getUserToken } from "@/utils/storageUtil";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Menu() {
  const router = useRouter();
  useEffect(() => {
    if (!getUserToken()) {
      router.replace("/");
    }
  }, []);

  return (
    <div>
      <Navbar />
      <MenuBanner />
      <ListCampaign />
      <div></div>
    </div>
  );
}
