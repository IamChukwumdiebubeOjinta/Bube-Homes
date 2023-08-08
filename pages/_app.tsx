import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "./global.css";
import Header from "../components/header";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Bube&apos;s Home</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="description"
          content="Find Affordable Housing with Bube's Home"
        />
      </Head>
      <section>
        <Header />
        <Component {...pageProps} />
        <Footer
          imageIds="/houseline2.svg"
          smallImageIds="/social-media-logo5.svg"
          mediumImageIds="/social-media-logo6.svg"
          smallImageIds2="/social-media-logo7.svg"
          smallImageIds3="/social-media-logo8.svg"
          largeImageIds="/social-media-logo9.svg"
          propOverflow="unset"
        />
      </section>
    </React.Fragment>
  );
}

export default MyApp;
