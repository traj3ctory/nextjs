import Link from "next/link";
import { useEffect } from 'react';
import { useRouter } from 'next/router'
import { BsArrowLeft } from 'react-icons/bs';
import Head from "next/head";

/**
 * @author traj3ctory
 * @function NotFound
 **/

const NotFound = (props) => {
const router = useRouter();

useEffect(() => {
  // effect
  // return () => {
  //   cleanup
  // };
  setTimeout(() => {
    // router.go(-1);
    router.push('/');
  }, 3000)
}, []);

  return (
    <>
      <Head>
        <title>Traj3ctory | 404</title>
        <meta name="keywords" content="traj3ctory" />
      </Head>
    <div id="not-found">
      <h6><span className="h3">404<i className="title mx-2"></i></span>This page could not be found</h6>
      <Link href="/">
        <a className="nav-link btn btn-sm btn-dark mt-3"><BsArrowLeft />&ensp;HomePage</a>
      </Link>
    </div>
    </>
  );
};
// prismic.io
export default NotFound;
