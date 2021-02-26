import Head from "next/head";
import Link from "next/link";
import style from "../styles/home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Traj3ctory | Home</title>
        <meta name="keywords" content="traj3ctory" />
      </Head>
      <div className={style.homepage}>
        <h1 className={style.title}>Homepage</h1>
        <p className={style.content}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
          sequi, eum laudantium veritatis impedit illum sunt quod, rerum
          explicabo ducimus consequuntur alias. Aperiam amet, quos animi optio
          harum doloribus vel!
        </p>
        <p className={style.content}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
          sequi, eum laudantium veritatis impedit illum sunt quod, rerum
          explicabo ducimus consequuntur alias. Aperiam amet, quos animi optio 
          harum doloribus vel!
        </p>

        <Link href="/ninjas">
          <a className={`btn btn-sm btn-primary ${style.btn}`}>
            See Ninja Listing
          </a>
        </Link>
      </div>
    </>
  );
}
