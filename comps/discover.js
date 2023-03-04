import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Input, Button, Text, Grid } from "@nextui-org/react";
import { useSession, signIn, signOut } from "next-auth/react";
import React, { useState } from "react";

export default function Home() {
  const { data: session } = useSession();
  const [discover, setDiscover] = useState(false);
  const [data, setData] = useState("");

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{session && session.user.name} </h1>
      <Grid.Container gap={2} justify="center">
        <Grid xs={2}>
          <a href="/">
            <Button type="submit" value="Submit">
              Home
            </Button>
          </a>
        </Grid>
        <Grid xs={2}>
          <a href="/account">
            <Button type="submit" value="Submit">
              Account
            </Button>
          </a>
        </Grid>
        <Grid xs={2}>
          <Button onClick={() => signOut()} type="submit" value="Submit">
            Sign Out
          </Button>
        </Grid>
      </Grid.Container>
      {!discover ? (
        <>
          {data.length !== 0 ? (
            <></>
          ) : (
            <>
              <p className={styles.description}>
                <div id="pfy_embed_signup">
                  <div>
                    <Text>Step 1</Text>
                    <Button
                      type="submit"
                      value="Submit"
                      style={{ width: "300px", marginBottom: "30px" }}
                    >
                      Connect Your Wallet
                    </Button>
                  </div>
                  <Text>Step 2</Text>

                  <Button
                    onClick={() => setDiscover(true)}
                    type="submit"
                    value="Submit"
                    style={{ width: "300px" }}
                  >
                    Create Your Discover
                  </Button>
                </div>
              </p>
            </>
          )}
        </>
      ) : (
        <>
          <p className={styles.description}>
            <div id="pfy_embed_signup">
              <div>
                <Text>Step 1</Text>
                <Button
                  type="submit"
                  value="Submit"
                  style={{ width: "300px", marginBottom: "30px" }}
                >
                  Connect Your Wallet
                </Button>
              </div>
              <Text>Step 2</Text>

              <Button
                onClick={() => setDiscover(true)}
                type="submit"
                value="Submit"
                style={{ width: "300px" }}
              >
                Create Your Discover
              </Button>
            </div>
          </p>
        </>
      )}
    </main>
  );
}
