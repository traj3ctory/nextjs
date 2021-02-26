import Layout from '../components/Layout';
// Bootstrap style
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
 