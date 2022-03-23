import React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* TODO: restructuring with object data */}
          <meta name="application-name" content="PWA App" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="PWA App" />
          <meta name="description" content="Best PWA App in the world" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#000000" />

          <link rel="apple-touch-icon" href="/icons/icon-144.png" />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/icons/icon-144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/icon-144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="167x167"
            href="/icons/icon-144.png"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/icon-144.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/icon-144.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/icons/icon-144.png" color="#5bbad5" />
          <link rel="shortcut icon" href="/favicon.ico" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://localhost:3000" />
          <meta name="twitter:title" content="PWA App" />
          <meta
            name="twitter:description"
            content="Best PWA App in the world"
          />
          <meta
            name="twitter:image"
            content="http://localhost:3000/icons/icon-192.png"
          />
          <meta name="twitter:creator" content="@Tomibudis" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="PWA App" />
          <meta property="og:description" content="Best PWA App in the world" />
          <meta property="og:site_name" content="PWA App" />
          <meta property="og:url" content="https://localhost:3000" />
          <meta
            property="og:image"
            content="http://localhost:3000/icons/icon-192.png"
          />

          <link
            rel="apple-touch-startup-image"
            href="/splash-1125.png"
            sizes="2048x2732"
          />
          <link
            rel="apple-touch-startup-image"
            href="/splash-1125.png"
            sizes="1668x2224"
          />
          <link
            rel="apple-touch-startup-image"
            href="/splash-1125.png"
            sizes="1536x2048"
          />
          <link
            rel="apple-touch-startup-image"
            href="/splash-1125.png"
            sizes="1125x2436"
          />
          <link
            rel="apple-touch-startup-image"
            href="/splash-1125.png"
            sizes="1242x2208"
          />
          <link
            rel="apple-touch-startup-image"
            href="/splash-1125.png"
            sizes="750x1334"
          />
          <link
            rel="apple-touch-startup-image"
            href="/splash-1125.png"
            sizes="640x1136"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
