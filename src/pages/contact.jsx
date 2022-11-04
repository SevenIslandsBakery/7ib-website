import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Footer } from '@/components/Footer'
import PagesHeader from '@/components/PagesHeader'

export default function Contact() {
  return (
    <div className="bg-white h-full flex flex-col justify-between">
      <PagesHeader></PagesHeader>
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg md:grid md:max-w-none md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
              Support related to order
            </h2>
            <div className="mt-3">
              <p className="text-lg text-gray-500">
                All our orders are taken on Whatsapp. If you face any issues regarding your order call us, or whatsapp us on this number. 
              </p>
            </div>
            <div className="mt-9">
              <div className="flex">
                <div className="flex-shrink-0">
                  <PhoneIcon
                    className="h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>+91 (996) 755 1778</p>
                  <p className="mt-1">Mon-Fri 8am to 6pm IST</p>
                </div>
              </div>
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <EnvelopeIcon
                    className="h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>sevenislandsbakery@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 md:mt-0">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
              Location
            </h2>
            <div className="mt-3">
              <p className="text-lg text-gray-500">
                We are currently accepting orders within Mumbai only.
              </p>
            </div>
            <div className="mt-9">
              <div className="flex">
                
                <div className="text-base text-gray-500">
                  <p>Hiranandani Estate, Thane, Maharashtra, India 400607</p>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
