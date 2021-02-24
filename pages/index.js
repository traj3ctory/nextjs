import Link from "next/link";
import style from '../styles/home.module.scss';

export default function Home() {
  return (
    <>
      <div className={style.homepage}>
        <h1>Homepage</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
          sequi, eum laudantium veritatis impedit illum sunt quod, rerum
          explicabo ducimus consequuntur alias. Aperiam amet, quos animi optio
          harum doloribus vel!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
          sequi, eum laudantium veritatis impedit illum sunt quod, rerum
          explicabo ducimus consequuntur alias. Aperiam amet, quos animi optio
          harum doloribus vel!
        </p>

        <Link href="/ninja">
          <a className="btn btn-sm btn-primary">See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
