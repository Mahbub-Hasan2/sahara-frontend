import '../styles/Sass/main.scss';
import Layout from '../Layout/Layout';

// pages all scss
import "../styles/Sass/pages/home.scss";
import "../styles/Sass/pages/aboutUs.scss";
import "../styles/Sass/pages/joinUs.scss";
import "../styles/Sass/pages/blogs.scss";

// Import Swiper styles
// eslint-disable-next-line
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());  

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
