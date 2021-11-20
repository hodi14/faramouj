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
  // const [routerChange, setRouterChange] = useState(false);
  // const loading = (refresh) => {
  //   if (!refresh) {
  //     const imgs = document.images;
  //     let counter = 0;

  //     [].forEach.call(imgs, (img) => {
  //       if (img.complete) incrementCounter();
  //       else img.addEventListener("load", incrementCounter, false);
  //     });

  //     function incrementCounter() {
  //       counter++;
  //       if (counter === imgs.length) {
  //         console.log("all images are loaded");
  //         document.querySelector(".loader").classList.add("loaded");
  //       }
  //     }
  //   }
  //   window.onload = () => {
  //     const imgs = document.images;
  //     let counter = 0;

  //     [].forEach.call(imgs, (img) => {
  //       if (img.complete) incrementCounter();
  //       else img.addEventListener("load", incrementCounter, false);
  //     });

  //     function incrementCounter() {
  //       counter++;
  //       if (counter === imgs.length) {
  //         console.log("all images are loaded");
  //         document.querySelector(".loader").classList.add("loaded");
  //       }
  //     }
  //   };
  // };
  // useEffect(() => {
  //   loading(true);
  // }, []);

  // const router = useRouter();
  // const routeLoad = (e) => {
  //   console.log("finished");
  //   document.querySelector(".loader").classList.add("loaded");
  // };
  // useEffect(() => {
  //   if (router && router.query) {
  //     setRouterChange(true);
  //   }
  // }, [router]);
  // if (routerChange) routeLoad(false);

  useEffect(() => {
    // const pictures = document.images;
    // const picturesCount = pictures.length - 2;
    // let loadingCount = 0;
    // setInterval(() => {
    //   for (let picture of pictures) {
    //     picture.onload = () => {
    //       loadingCount += 1;
    //       console.log("loaded images are " + loadingCount);
    //     }
    //     if (picture.style.display == "none")
    //       loadingCount += 1;
    //      if (loadingCount == picturesCount) {
    //        document.querySelector(".loader").classList.add("loaded");
    //      }
    //   }
    // }, 10);
    document.querySelector(".loader").classList.remove("loaded");
    document.querySelector(".loader").classList.add("loaded");
  })

  return (
    <div>
      <Head>
        <title> Faramouj </title>{" "}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Loader />
        <Component {...pageProps} />
      </Layout>
      <Script src="../assets/scripts/scrollAnimation.js" />
      <Script src="../assets/scripts/header.js" />
      <Script src="../assets/scripts/cursor.js" />
    </div>
  );
}
