/* eslint-disable react/display-name */
import dynamic from 'next/dynamic'
import Loading from "../components/ShareComponents/Loading";

const Header = dynamic(() => import('../components/Home/Header'), {
  loading: () => <Loading />,
  ssr: false,
});
const OurService = dynamic(() => import('../components/ShareComponents/OurService'), {
  loading: () => <Loading />,
  ssr: false,
});
const Features = dynamic(() => import('../components/Home/Features'), {
  loading: () => <Loading />,
  ssr: false,
});

const Testimonials = dynamic(() => import('../components/ShareComponents/Testimonials'), {
  loading: () => <Loading />,
  ssr: false,
});

const LateCovered = dynamic(() => import('../components/Home/LateCovered'), {
  loading: () => <Loading />,
  ssr: false,
});
const DownloadApp = dynamic(() => import('../components/ShareComponents/DownloadApp'), {
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
