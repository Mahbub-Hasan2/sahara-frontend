import '../styles/Sass/main.scss';
import Layout from '../Layout/Layout';

// Import Swiper styles
// eslint-disable-next-line
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
