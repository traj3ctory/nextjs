import Link from "next/link";
import { BsArrowLeft } from 'react-icons/bs'

/**
 * @author traj3ctory
 * @function NotFound
 **/

const NotFound = (props) => {
  return (
    <div id="not-found">
      <h6><span className="h3">404<i className="title mx-2"></i></span>This page could not be found</h6>
      <Link href="/">
        <a className="nav-link btn btn-sm btn-dark mt-3"><BsArrowLeft />&ensp;HomePage</a>
      </Link>
    </div>
  );
};
// prismic.io
export default NotFound;
