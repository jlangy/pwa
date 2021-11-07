import Head from "next/head";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Next.js PWA Example</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <link
          href="/apple_splash_2048.jpg"
          sizes="2048x2732"
          rel="apple-touch-startup-image"
        />
        <link
          href="/apple_splash_1668.jpg"
          sizes="1668x2224"
          rel="apple-touch-startup-image"
        />
        <link
          href="/apple_splash_1536.jpg"
          sizes="1536x2048"
          rel="apple-touch-startup-image"
        />
        <link
          href="/apple_splash_1125.jpg"
          sizes="1125x2436"
          rel="apple-touch-startup-image"
        />
        <link
          href="/apple_splash_1242.jpg"
          sizes="1242x2208"
          rel="apple-touch-startup-image"
        />
        <link
          href="/apple_splash_750.jpg"
          sizes="750x1334"
          rel="apple-touch-startup-image"
        />
        <link
          href="/apple_splash_640.jpg"
          sizes="640x1136"
          rel="apple-touch-startup-image"
        />
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
