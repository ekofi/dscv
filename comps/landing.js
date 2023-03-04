import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Input, Button, Text } from "@nextui-org/react";
import { useSession, signIn, signOut } from "next-auth/react";
import React, { useState } from "react";

export default function Home() {
  const { data: session } = useSession();
  const [email, setEmail] = useState("js");
  const [password, setPassword] = useState("aa");

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Time to <a>#Dscv!</a>{" "}
      </h1>
      <Text blockquote>
        Dscv is the best platform to shop online with the people you love.
      </Text>

      <p className={styles.description}>
        <div id="pfy_embed_signup">
          <form
            action="https://i.prefinery.com/projects/yqa3uvzy/users/post"
            id="pfy_signup_form"
            class="pfy-signup-form"
            method="post"
            accept-charset="UTF-8"
            novalidate
          >
            <input id="referrer" name="referrer" type="hidden" value="" />

            <input
              id="referral_token"
              name="referral_token"
              type="hidden"
              value=""
            />

            <input id="utm_source" name="utm_source" type="hidden" value="" />
            <input id="utm_medium" name="utm_medium" type="hidden" value="" />
            <input
              id="utm_campaign"
              name="utm_campaign"
              type="hidden"
              value=""
            />
            <input id="utm_term" name="utm_term" type="hidden" value="" />
            <input id="utm_content" name="utm_content" type="hidden" value="" />

            <div class="pfy-field-group mb-2">
              <label for="pfy_user_profile_email">Join the waitlist!</label>
              <br />
              <Input
                autocomplete="email"
                placeholder="Your best email"
                type="email"
                name="user[profile][email]"
                id="pfy_user_profile_email"
                width="300px"
              />
              <br />
            </div>

            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="061bc0233701397cd52c3a5b6ecc7cbcfcf61c01"
                tabindex="-1"
                value=""
                autocomplete="off"
              />
            </div>

            <Button type="submit" value="Submit" style={{ width: "300px" }}>
              Submit
            </Button>
          </form>
        </div>
      </p>
      <Button
        onClick={() =>
          signIn("credentials", {
            email,
            password,
            // The page where you want to redirect to after a
            // successful login
            callbackUrl: `${window.location.origin}/discover`,
          })
        }
        type="submit"
        value="Submit"
        style={{ width: "300px" }}
      >
        Login
      </Button>
    </main>
  );
}
