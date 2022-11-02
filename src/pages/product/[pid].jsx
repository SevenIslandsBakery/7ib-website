/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import { Footer } from '@/components/Footer'
import { Logo } from '@/components/Logo'
import products from '@/products/products.json'
import { useRouter } from 'next/router'

import { Disclosure, Tab } from '@headlessui/react'
import { StarIcon } from '@heroicons/react/20/solid'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { HeartIcon, HomeIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/Button'

const breadcrumbs = [{ id: 1, name: 'Catalog', href: '/catalog' }]
const policies = [
  {
    name: 'Guilt Free',
    icon: HeartIcon,
    description: 'Specially curated keeping your health in mind',
  },
  {
    name: 'Homemade',
    icon: HomeIcon,
    description: 'No unnecessary additives',
  },
]
const footerNavigation = {
  products: [
    { name: 'Bags', href: '#' },
    { name: 'Tees', href: '#' },
    { name: 'Objects', href: '#' },
    { name: 'Home Goods', href: '#' },
    { name: 'Accessories', href: '#' },
  ],
  company: [
    { name: 'Who we are', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
  customerService: [
    { name: 'Contact', href: '#' },
    { name: 'Shipping', href: '#' },
    { name: 'Returns', href: '#' },
    { name: 'Warranty', href: '#' },
    { name: 'Secure Payments', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Find a store', href: '#' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Product() {
  const [product, setProduct] = useState(products[0])
  const [relatedProducts, setRelatedProducts] = useState([])
  // const [pid, setPid] = useState(1);
  const router = useRouter()

  useEffect(() => {
    console.log(router)
    const { pid } = router.query
    if (pid) {
      const newProduct = products.filter(
        (prod) => prod.id.toString() === pid
      )[0]
      console.log(newProduct);
      setProduct(newProduct)
    }
  }, [router])

  useEffect(() => {
    const neededProducts = products
    .filter((prod) => prod.category === product.category && prod.id!=product.id)
    .sort(() => Math.random() - 0.5);
    if(neededProducts.length>3){
      neededProducts.slice(3);
    }
    setRelatedProducts(neededProducts)
  }, [product])

  return (
    <div className="bg-white">
      <header className="relative">
        <nav aria-label="Top">
          {/* Secondary navigation */}
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="border-b border-gray-200">
                <div className="flex h-16 items-center justify-between">
                  {/* Logo (lg+) */}
                  <div className="hidden lg:flex lg:items-center">
                    <a href="/">
                      <div className="flex">
                        <span className="sr-only">Your Company</span>
                        <Logo className="mx-auto h-10 w-auto" />
                        <h6 className="mx-3 max-w-2xl font-display text-2xl font-medium tracking-tight text-slate-900 2xl:text-2xl">
                          7{' '}
                          <span className="relative whitespace-nowrap text-orange-600">
                            <svg
                              aria-hidden="true"
                              viewBox="0 0 418 42"
                              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
                              preserveAspectRatio="none"
                            >
                              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                            </svg>
                            <span className="relative">Islands </span>
                          </span>
                          Bakery
                        </h6>
                      </div>
                    </a>
                  </div>
                  {/* Mobile menu and search (lg-) */}
                  <div className="flex flex-1 items-center lg:hidden"></div>

                  {/* Logo (lg-) */}
                  <a href="/" className="lg:hidden">
                    <div className="flex">
                      <h6 className="mx-3 max-w-2xl font-display text-2xl font-medium tracking-tight text-slate-900 2xl:text-2xl">
                        7{' '}
                        <span className="relative whitespace-nowrap text-orange-600">
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 418 42"
                            className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
                            preserveAspectRatio="none"
                          >
                            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                          </svg>
                          <span className="relative">Islands </span>
                        </span>
                        Bakery
                      </h6>
                      <span className="sr-only">Your Company</span>
                      <Logo className="mx-auto h-10 w-auto" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          {/* Product */}
          <div className="bg-white">
            <div className="pt-6 pb-16 sm:pb-24">
              <nav
                aria-label="Breadcrumb"
                className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
              >
                <ol role="list" className="flex items-center space-x-4">
                  {breadcrumbs.map((breadcrumb) => (
                    <li key={breadcrumb.id}>
                      <div className="flex items-center">
                        <a
                          href={breadcrumb.href}
                          className="mr-4 text-sm font-medium text-gray-900"
                        >
                          {breadcrumb.name}
                        </a>
                        <svg
                          viewBox="0 0 6 20"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          className="h-5 w-auto text-gray-300"
                        >
                          <path
                            d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </li>
                  ))}
                  <li className="text-sm">
                    <a
                      href={'/product/'+product.id}
                      aria-current="page"
                      className="font-medium text-gray-500 hover:text-gray-600"
                    >
                      {product.name}
                    </a>
                  </li>
                </ol>
              </nav>
              <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
                  <div className="lg:col-span-5 lg:col-start-8">
                    <div className="flex justify-between">
                      <h1 className="text-xl font-medium text-gray-900">
                        {product.name}
                      </h1>
                      <p className="text-xl font-medium text-gray-900">
                        Rs. {product.price}
                      </p>
                    </div>
                    <div>
                      <p>{product.weight} gms</p>
                    </div>
                    {/* Reviews */}
                    <div className="mt-4">
                      <h2 className="sr-only">Reviews</h2>
                      <div className="flex items-center">
                        <p className="text-sm text-gray-700">
                          {product.rating}
                          <span className="sr-only"> out of 5 stars</span>
                        </p>
                        <div className="ml-1 flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              className={classNames(
                                product.rating > rating
                                  ? 'text-yellow-400'
                                  : 'text-gray-200',
                                'h-5 w-5 flex-shrink-0'
                              )}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                        <div
                          aria-hidden="true"
                          className="ml-4 text-sm text-gray-300"
                        >
                          ·
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Image gallery */}
                  <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
                    <h2 className="sr-only">Images</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                      {product.imageSrc.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={product.imageAlt}
                          className={classNames(
                            index == 0
                              ? 'lg:col-span-2 lg:row-span-2'
                              : 'hidden lg:block',
                            'rounded-lg'
                          )}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 lg:col-span-5">
                    <form>
                      {/* Color picker */}

                      <Button
                        type="submit"
                        className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        href={product.whatsappLink}
                        target="_blank"
                      >
                        Order Now
                      </Button>
                    </form>

                    {/* Product details */}
                    <div className="mt-10">
                      <h2 className="text-sm font-medium text-gray-900">
                        Description
                      </h2>

                      <div
                        className="prose prose-sm mt-4 text-gray-500"
                        dangerouslySetInnerHTML={{
                          __html: product.description,
                        }}
                      />
                    </div>

                    <div className="mt-8 border-t border-gray-200 pt-8">
                      <h2 className="text-sm font-medium text-gray-900">
                        Fabric &amp; Care
                      </h2>

                      <div className="prose prose-sm mt-4 ml-4 text-gray-500">
                        <ul className="list-disc">
                          {product.details.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Policies */}
                    <section
                      aria-labelledby="policies-heading"
                      className="mt-10"
                    >
                      <h2 id="policies-heading" className="sr-only">
                        Our Policies
                      </h2>

                      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                        {policies.map((policy) => (
                          <div
                            key={policy.name}
                            className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center"
                          >
                            <dt>
                              <policy.icon
                                className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
                                aria-hidden="true"
                              />
                              <span className="mt-4 text-sm font-medium text-gray-900">
                                {policy.name}
                              </span>
                            </dt>
                            <dd className="mt-1 text-sm text-gray-500">
                              {policy.description}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section
            aria-labelledby="related-heading"
            className="mt-10 border-t border-gray-200 py-16 px-4 sm:px-0"
          >
            <h2
              id="related-heading"
              className="text-xl font-bold text-gray-900"
            >
              Customers also bought
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
              {relatedProducts.map((product) => (
                <div key={product.id}>
                  <div className="relative">
                    <div className="relative h-72 w-full overflow-hidden rounded-lg">
                      <img
                        src={product.imageSrc[0]}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="relative mt-4">
                      <h3 className="text-sm font-medium text-gray-900">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.weight} gms
                      </p>
                    </div>
                    <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                      <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                      />
                      <p className="relative text-lg font-semibold text-white">
                        Rs. {product.price}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <a
                      href={product.whatsappLink}
                      className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200"
                    >
                      Order Now
                      <span className="sr-only">, {product.name}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer></Footer>
    </div>
  )
}
