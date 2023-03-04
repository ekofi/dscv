import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Landing from "../comps/landing";
import { Input, Button, Text } from "@nextui-org/react";

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
      <Landing />
    </div>
  );
}
