const getProducts = async () => {
  return fetch(
    'https://sheets.googleapis.com/v4/spreadsheets/1KFcS9rXhjw5PWgvRK3a7SznpinGq2j6r8m-sR9R2TfQ/values/products!A1:N1000?key=AIzaSyCUVDFBguNFR58im7QHczERgToPHh0N2PI'
  )
    .then((res) => res.json())
    .then((res) => {
        console.log(res)
      const values = res.values
      const keys = values[0]
      let products = []
      for (let value of values.slice(1)) {
        let product = {}
        for (let i = 0; i < keys.length; i++) {
          let vals = value[i]?.split(';')
          if(vals){
            product[keys[i]] =
            vals?.length > 1 || ['imageSrc','ingredients','nutritionValue'].includes(keys[i])
              ? vals
              : vals[0]
          }
        }
        products.push(product)
      }
      console.log(products)
      return products
    })
}

export default getProducts
