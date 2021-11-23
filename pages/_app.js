import "../public/assets/fonts/fontawesome-pro-5.15.1-web-ulabs/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../styles/css/styles.css";

import Layout from "../Components/layout";
import Head from "next/head";
import Script from "next/script";
import Loader from "../Components/Loader";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  let loadingCount = 0;
  let time = 0;
  useEffect(() => {
    document.querySelector(".loader").classList.remove("loaded");
    document.body.classList.add("loading");
    const pictures = document.images;
    const picturesCount = pictures.length - 3;
    console.log("Loding...");
    let t = 1;
    const loaderInterval = setInterval(() => {
      time += 0.01;
      for (let picture of pictures) {
        picture.onload = () => {
          loadingCount += 1;
        };
        if (picture.style.display == "none") loadingCount += 1;
        if (loadingCount >= picturesCount || time >= 10) {
          document.querySelector(".loader").classList.add("loaded");
          document.body.classList.remove("loading");
          console.log("page is loaded");
          clearInterval(loaderInterval);
        }
      }
    }, 10);
  }, );

  return (
    <div>
      <Head>
        <title> Faramouj </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Loader />
        <Component {...pageProps} />
      </Layout>
      <Script src="../assets/scripts/scrollAnimation.js" />
      <Script src="../assets/scripts/cursor.js" />
    </div>
  );
}
