import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Input, Button, Text, Navbar, Link } from "@nextui-org/react";
import { useSession, signIn, signOut, getSession } from "next-auth/react";

export default function Home() {
  return (
    <Navbar isBordered variant={"floating"}>
      <Navbar.Brand>
        <Text b color="inherit" hideIn="xs">
          #Dscv
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        <Navbar.Link href="#">Features</Navbar.Link>
        <Navbar.Link isActive href="#">
          Customers
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Link color="inherit" href="#">
          Login
        </Navbar.Link>
        <Navbar.Item>
          <Button auto flat as={Link} href="#">
            Sign Up
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}
