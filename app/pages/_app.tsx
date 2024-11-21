import type { AppProps } from "next/app";
import Head from "next/head";

import { ControllerState, GeneralsProvider, useGenerals } from "../context/generals.context";

import { Layout } from "../components/layouts";
import { Favicon } from "../components/globals";

import "../styles/globals.css";
import "swiper/css";
import { NavbarProvider } from "../context/navbar.context";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getGenerals } from "../lib/getGenerals";

interface CustomPageProps {
   generals: ControllerState;
}

function MyApp({ Component, pageProps }: AppProps<CustomPageProps>) {
   return (
      <>
         <Head>
            <title>Logistic</title>
            <Favicon />
         </Head>
         <GeneralsProvider generals={pageProps.generals}>
            <NavbarProvider>
               <Layout>
                  <Component {...pageProps} />
               </Layout>
            </NavbarProvider>
         </GeneralsProvider>
      </>
   );
}

export default MyApp;
