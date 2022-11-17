/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useEffect, useState } from 'react'
import getProducts from '@/products/products'

export function BestSellers() {
  let [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then((productList) => {
      let newProducts = productList.filter((prod) => prod.isBestSeller)
      console.log(newProducts)
      if (newProducts.length > 3) {
        newProducts.splice(3)
      }
      setProducts(newProducts)
    })
  }, [])

  return (
    <div id="bestsellers" className="bg-gray-900">
      <div className="px-4 pt-12 sm:px-6 lg:px-8 lg:pt-20">
        <div className="text-center">
          <h2 className="text-xl font-semibold leading-6 text-gray-300">
            Bestsellers
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            <s>Guilty</s> Healthy pleasure is all we serve.
          </p>
          <p className="mx-auto mt-3 max-w-4xl text-xl text-gray-300 sm:mt-5 sm:text-2xl">
            7 islands amalgamated to form one in a million city named Mumbai.
            But it took 700+ customers in this city and more than 4 years of
            experience to select these products curated by us and loved by all.
          </p>
        </div>
      </div>

      <div className="mt-16 bg-white pb-12 lg:mt-20 lg:pb-20">
        <div className="relative z-0">
          <div className="absolute inset-0 h-5/6 bg-gray-900 lg:h-2/3" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative lg:grid lg:grid-cols-7 lg:grid-rows-1">
              <div className="mx-auto bg-white lg:col-start-1 lg:col-end-8 lg:row-start-1 lg:row-end-1  lg:mx-0 lg:max-w-none">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                  <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
                    {products.map((product) => (
                      <div
                        key={product.id}
                        className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
                      >
                        <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                          <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                          />
                        </div>
                        <div className="flex flex-1 flex-col space-y-2 p-4">
                          <h3 className="text-sm font-medium text-gray-900">
                            <a href={'/product/' + product.id}>
                              <span
                                aria-hidden="true"
                                className="absolute inset-0"
                              />
                              {product.name}
                            </a>
                          </h3>

                          <div className="flex flex-1 flex-col justify-end">
                            <p className="text-sm italic text-gray-500">
                              {product.weight} gms
                            </p>
                            <p className="text-base font-medium text-gray-900">
                              Rs. {product.price}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
