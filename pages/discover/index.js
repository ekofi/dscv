import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Discover from "../../comps/discover";
import { Input, Button, Text } from "@nextui-org/react";
import { useSession, getSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  console.log(session);

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
      <Discover />
    </div>
  );
}

export async function getServerSideProps(context) {
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
