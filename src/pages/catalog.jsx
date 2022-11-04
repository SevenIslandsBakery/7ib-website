/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import { Footer } from '@/components/Footer'
import { Logo } from '@/components/Logo'
import PagesHeader from '@/components/PagesHeader'
import products from '@/products/products.json'
import {
  Dialog,
  Disclosure,
  Menu,
  Popover,
  Tab,
  Transition,
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment, useEffect, useState } from 'react'

export default function Catalog() {

  const sortOptions = [
    { name: 'Most Popular', href: '#', current: true, sortBy: 'id', inc: true },
    {
      name: 'Best Rating',
      href: '#',
      current: false,
      sortBy: 'rating',
      inc: false,
    },
    { name: 'Newest', href: '#', current: false, sortBy: 'date', inc: false },
    {
      name: 'Price: Low to High',
      href: '#',
      current: false,
      sortBy: 'price',
      inc: true,
    },
    {
      name: 'Price: High to Low',
      href: '#',
      current: false,
      sortBy: '',
      inc: false,
    },
  ]

  const filters = [
    {
      id: 'category',
      name: 'Category',
      options: [
        {
          value: 'dry-cake',
          label: 'Dry Cakes',
          isEligible: (product) => {
            return product.category === 'dry-cake'
          },
        },
        {
          value: 'cookie',
          label: 'Cookies',
          isEligible: (product) => {
            return product.category === 'cookie'
          },
        },
        {
          value: 'energy-bar',
          label: 'Energy Bars',
          isEligible: (product) => {
            return product.category === 'energy-bar'
          },
        },
        {
          value: 'biscuit',
          label: 'Biscuits',
          isEligible: (product) => {
            return product.category === 'biscuit'
          },
        },
      ],
    },
    {
      id: 'price',
      name: 'Price',
      options: [
        {
          value: '0',
          min: 0,
          max: 300,
          label: 'Under Rs. 300',
          isEligible: (product) => {
            return product.price <= 300
          },
        },
        {
          value: '300',
          min: 300,
          max: 400,
          label: 'Rs. 300 - Rs. 400',
          isEligible: (product) => {
            return 300 < product.price && product.price <= 400
          },
        },
        {
          value: '400',
          min: 400,
          max: 500,
          label: 'Rs. 400 - Rs. 500',
          isEligible: (product) => {
            return 400 < product.price && product.price <= 500
          },
        },
        {
          value: '500',
          min: 500,
          max: 600,
          label: 'Rs. 500 - Rs. 600',
          isEligible: (product) => {
            return 500 < product.price && product.price <= 600
          },
        },
        {
          value: '600',
          min: 600,
          max: 700,
          label: 'Rs. 600 - Rs. 700',
          isEligible: (product) => {
            return 600 < product.price && product.price <= 700
          },
        },
        {
          value: '700',
          min: 700,
          max: 100000,
          label: 'Over Rs. 700',
          isEligible: (product) => {
            return 700 < product.price && product.price <= 100000
          },
        },
      ],
    },
  ]

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [activeFilters, setActiveFilterState] = useState([])
  const [sortedOption, setSortedOption] = useState(sortOptions[0])
  const [filteredProducts, setFilterProducts] = useState(products)

  useEffect(() => {
    updateFilterProducts()
  }, [activeFilters, sortedOption])

  function toggleFilter(e) {
    const checked = e.target.checked
    const id = e.target.value
    if (checked) {
      setActiveFilterState([...activeFilters, id])
    } else {
      setActiveFilterState(activeFilters.filter((_id) => _id !== id))
    }
  }

  function updateFilterProducts() {
    let filteredProds = products
    filteredProds = filterByCategory(filteredProds)
    filteredProds = filterByPrice(filteredProds)
    // filteredProds = sortProducts(filteredProds)
    console.log(filteredProds)
    setFilterProducts(filteredProds)
  }

  function sortProducts(prods) {
    prods = prods.sort((a, b) => {
      if (sortedOption.sortBy === 'price') {
        return a.price - b.price
      } else if (sortedOption.sortBy === 'id') {
        return a.id - b.id
      } else if (sortedOption.sortBy === 'date') {
        return new Date(a.date) - new Date(b.date)
      } else if (sortedOption.sortBy === 'rating') {
        return a.rating - b.rating
      }
    })
    if (!sortedOption.inc) {
      prods.reverse()
    }
    return prods
  }

  function filterByCategory(products) {
    const activeCategoryFilters = filters[0].options.filter((option) =>
      activeFilters.includes(option.value)
    )
    if (activeCategoryFilters.length === 0) {
      return products
    }
    products = products.filter((product) => {
      return activeFilters.includes(product.category)
    })
    return products
  }

  function filterByPrice(products) {
    const activePriceFilters = filters[1].options.filter((option) =>
      activeFilters.includes(option.value)
    )
    if (activePriceFilters.length === 0) {
      return products
    }
    products = products.filter((product) => {
      let result = false
      activePriceFilters.forEach((filter) => {
        if (filter.isEligible(product)) {
          result = true
        }
      })
      return result
    })
    return products
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className="bg-gray-50">
      <div>
        <Transition.Root show={mobileMenuOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileMenuOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                  <div className="flex px-4 pt-5 pb-2">
                    <button
                      type="button"
                      className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Links */}
                  <Tab.Group as="div" className="mt-2">
                    <div className="border-b border-gray-200"></div>
                  </Tab.Group>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <PagesHeader></PagesHeader>
      </div>

      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 sm:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4">
                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.name}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-gray-400">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  <ChevronDownIcon
                                    className={classNames(
                                      open ? '-rotate-180' : 'rotate-0',
                                      'h-5 w-5 transform'
                                    )}
                                    aria-hidden="true"
                                  />
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      type="checkbox"
                                      checked={activeFilters.includes(
                                        option.value
                                      )}
                                      value={option.value}
                                      onChange={toggleFilter}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 text-sm text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main>
          <div className="bg-white pb-4">
            <div
              className="mx-auto py-16 px-4 sm:px-6 lg:px-20"
              style={{
                'background-image':
                  'linear-gradient(to bottom, rgba(255,255,255,0.5),rgba(255,255,255,1)),url("/images/catalog-bg.webp")',
                  'background-size': 'cover'
              }}
            >
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                Catalog
              </h1>
              <p className="mt-4 max-w-xl text-sm text-gray-700">
                Our thoughtfully designed menu of bakeries is crafted with love
                and warmth. Relish your taste buds and choose for your special
                ones before we run out. Currently we are only taking orders on
                Whatsapp. This catalog will help you out.
              </p>
            </div>
          </div>

          {/* Filters */}
          <section aria-labelledby="filter-heading">
            <h2 id="filter-heading" className="sr-only">
              Filters
            </h2>

            <div className="border-b border-gray-200 bg-white pb-4">
              <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <button
                  type="button"
                  className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  Filters
                </button>

                <div className="hidden sm:block">
                  <div className="flow-root">
                    <Popover.Group className="-mx-4 flex items-center divide-x divide-gray-200">
                      {filters.map((section, sectionIdx) => (
                        <Popover
                          key={section.name}
                          className="relative inline-block px-4 text-left"
                        >
                          <Popover.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                            <span>{section.name}</span>
                            {sectionIdx === 0 ? (
                              <span className="ml-1.5 rounded bg-gray-200 py-0.5 px-1.5 text-xs font-semibold tabular-nums text-gray-700">
                                {
                                  filters[0].options.filter((option) =>
                                    activeFilters.includes(option.value)
                                  ).length
                                }
                              </span>
                            ) : null}
                            <ChevronDownIcon
                              className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                          </Popover.Button>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Popover.Panel className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <form className="space-y-4">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      type="checkbox"
                                      checked={activeFilters.includes(
                                        option.value
                                      )}
                                      value={option.value}
                                      onChange={toggleFilter}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-${section.id}-${optionIdx}`}
                                      className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </form>
                            </Popover.Panel>
                          </Transition>
                        </Popover>
                      ))}
                    </Popover.Group>
                  </div>
                </div>
              </div>
            </div>

            {/* Active filters */}
            <div className="bg-gray-100">
              <div className="mx-auto max-w-7xl py-3 px-4 sm:flex sm:items-center sm:px-6 lg:px-8">
                <h3 className="text-sm font-medium text-gray-500">
                  Filters
                  <span className="sr-only">, active</span>
                </h3>

                <div
                  aria-hidden="true"
                  className="hidden h-5 w-px bg-gray-300 sm:ml-4 sm:block"
                />

                <div className="mt-2 sm:mt-0 sm:ml-4">
                  <div className="-m-1 flex flex-wrap items-center">
                    {activeFilters.map((activeFilterId) => {
                      let activeFilter = []
                        .concat(...filters.map((f) => f.options))
                        .filter((option) => option.value === activeFilterId)
                        .pop()
                      return (
                        <span
                          key={activeFilter.value}
                          className="m-1 inline-flex items-center rounded-full border border-gray-200 bg-white py-1.5 pl-3 pr-2 text-sm font-medium text-gray-900"
                        >
                          <span>{activeFilter.label}</span>
                          <button
                            type="button"
                            className="ml-1 inline-flex h-4 w-4 flex-shrink-0 rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-500"
                            onClick={() => {
                              setActiveFilterState(
                                activeFilters.filter(
                                  (id) => id !== activeFilterId
                                )
                              )
                            }}
                          >
                            <span className="sr-only">
                              Remove filter for {activeFilter.label}
                            </span>
                            <svg
                              className="h-2 w-2"
                              stroke="currentColor"
                              fill="none"
                              viewBox="0 0 8 8"
                            >
                              <path
                                strokeLinecap="round"
                                strokeWidth="1.5"
                                d="M1 1l6 6m0-6L1 7"
                              />
                            </svg>
                          </button>
                        </span>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Product grid */}
          <section
            aria-labelledby="products-heading"
            className="mx-auto max-w-2xl px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-24 lg:max-w-7xl lg:px-8"
          >
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {filteredProducts.map((product) => {
                console.log('products filtering triggered', product)
                return (
                  <a key={product.id} href={`/product/${product.id}`} className="group">
                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                      <img
                        src={product.imageSrc[0]}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">
                      {product.name}
                    </h3>
                    <p className="font-small mt-1 text-sm text-gray-500">
                      {product.weight}gm
                    </p>
                    <p className="mt-1 text-lg font-medium text-gray-900">
                      Rs. {product.price}
                    </p>
                  </a>
                )
              })}
            </div>
          </section>
        </main>

        <Footer></Footer>
      </div>
    </div>
  )
}
