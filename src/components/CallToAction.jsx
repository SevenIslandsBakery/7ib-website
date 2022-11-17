import Image from 'next/future/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-lime-300 py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-gray-600 sm:text-4xl">
            We are on Whatsapp too!
          </h2>
          <p className="mt-4 text-lg tracking-tight text-gray-500">
            Our comprehensive menu for bakeries is just a tap away on your Whatsapp. 
          </p>
          <Button href={'https://wa.me/c/919967551778'} target="_blank" color="white" className="mt-10">
            Checkout the Catalog
          </Button>
        </div>
      </Container>
    </section>
  )
}
