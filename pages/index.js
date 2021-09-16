import Features from "../components/Home/Features";
import Header from "../components/Home/Header";
import LateCovered from "../components/Home/LateCovered";
import OurService from "../components/Home/OurService";
import Testimonials from "../components/Home/Testimonials";


export default function Home() {
  return (
    <>
      <Header/>
      <OurService/>
      <Features/>
      <Testimonials/>
      <LateCovered/>
    </>
  )
}
