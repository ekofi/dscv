import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { CssBaseline } from "@nextui-org/react";

export default function Document() {
  return (
    <Html>
      <Head>
        {CssBaseline.flush()}
        <Script id="prefinery">
          {`prefinery=window.prefinery||function()
          {(window.prefinery.q = window.prefinery.q || []).push(arguments)};`}
        </Script>
        <Script
          id="prefinery-2"
          src="https://widget.prefinery.com/widget/v2/yqa3uvzy.js"
          defer
        ></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
