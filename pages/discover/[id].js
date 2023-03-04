import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Landing from "../../comps/landing";
import Navbar from "../../comps/navbar";

import { Input, Button, Text, Link } from "@nextui-org/react";

import { useSession, signIn, signOut, getSession } from "next-auth/react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>#Dscv</title>
        <meta
          name="description"
          content="Dscv is the best platform to shop online with the people you love."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <br />
      <iframe
        id="iFrameExample"
        title="iFrame Example"
        src="https://www.amazon.com"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        width="100%"
        height="100%"
        scrolling="auto"
      ></iframe>
    </div>
  );
}

/* export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
 */
