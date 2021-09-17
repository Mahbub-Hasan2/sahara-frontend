import DownloadApp from "../components/ShareComponents/DownloadApp";
import Features from "../components/Home/Features";
import Header from "../components/Home/Header";
import LateCovered from "../components/Home/LateCovered";
import OurService from "../components/ShareComponents/OurService";
import Testimonials from "../components/ShareComponents/Testimonials";

export default function Home() {
  return (
    <>
      <Header/>
      <OurService/>
      <Features/>
      <Testimonials/>
      <LateCovered/>
      <DownloadApp/>
    </>
  )
}
