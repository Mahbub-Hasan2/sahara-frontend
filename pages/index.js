/* eslint-disable react/display-name */
import dynamic from 'next/dynamic'
import DownloadApp from "../components/ShareComponents/DownloadApp";
import Features from "../components/Home/Features";
// import Header from "../components/Home/Header";
import LateCovered from "../components/Home/LateCovered";
import Testimonials from "../components/ShareComponents/Testimonials";
import Loading from "../components/ShareComponents/Loading";

const Header = dynamic(() => import('../components/Home/Header'), {
  loading: () => <Loading />,
  ssr: false,
});
const OurService = dynamic(() => import('../components/ShareComponents/OurService'), {
  loading: () => <Loading />,
  ssr: false,
});

export default function Home() {
  return (
    <>
      {/* <Loading /> */}
      <Header />
      <OurService />
      <Features />
      <Testimonials />
      <LateCovered />
      <DownloadApp />
    </>
  )
}
