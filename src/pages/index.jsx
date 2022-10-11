import Head from 'next/head'

import { BestSellers } from '@/components/BestSellers'
import { CallToAction } from '@/components/CallToAction'
import { Categories } from '@/components/Categories'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { MeetTheChef } from '@/components/MeetTheChef'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          7 Islands Bakery - One stop destination for your bakery pleasures
        </title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <BestSellers />
        <Categories />
        <SecondaryFeatures />
        <MeetTheChef />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
