/* eslint-disable react/display-name */
import dynamic from 'next/dynamic'
import Loading from "../components/ShareComponents/Loading";
import { useRouter } from 'next/router';

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
  const router = useRouter();
  const { locale } = router;

  return (
    <>
      {/* <Loading /> */}
      <Header />
      <OurService />
      {/* <h2>hello - {locale}</h2> */}
      <Features />
      <Testimonials />
      <LateCovered />
      <DownloadApp />
    </>
  )
}
