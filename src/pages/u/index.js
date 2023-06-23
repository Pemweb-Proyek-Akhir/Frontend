import Navbar from "@/components/navbar";
import MenuBanner from "@/containers/menu/banner";
import ListCampaign from "@/containers/menu/listCampaign";

export default function Menu() {
  return (
    <div>
      <Navbar />
      <MenuBanner />
      <ListCampaign />
      <div></div>
    </div>
  );
}
