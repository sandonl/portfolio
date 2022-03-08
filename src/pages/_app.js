import Theme from "../styles/theme";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sandon Lai</title>
        <meta property="og:title" content="Sandon Lai" key="title" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/sandonl/portfolio/main/readme_image/homepage.png"
        />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
