import Head from 'next/head'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { SecondaryFeatures } from '../components/SecondaryFeatures'

export default function Home() {
  return (
    <>
      <Head>
        <title>foreseer</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <SecondaryFeatures />
      </main>
      <Footer />
    </>
  )
}
