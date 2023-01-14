// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Foreseer</title>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/maskable_icon.png"></link>
          <meta name="theme-color" content="#fff" />
          <meta name="application-name" content="Foreseer" />
          <meta name="robots" content="index, follow" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Foreseer" />
          <meta
            name="description"
            content="Escape to paradise and indulge in luxury at our exclusive resorts. Unwind in style with breathtaking views, top-notch amenities, and unparalleled service. Perfect for romantic getaways, family vacations, and more."
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#000000" />

          <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
          <link rel="canonical" href="https://messageverse.vercel.app/" />

          <link
            rel="apple-touch-icon"
            sizes="167x167"
            href="/maskable_icon.png"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icon-48x48.png"
          />

          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/maskable_icon.png" color="#5bbad5" />
          <link rel="shortcut icon" href="/favicon.ico" />

          <meta property="og:image" content="/maskable_icon.png" />
        </Head>
        <body className="font-sans">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
