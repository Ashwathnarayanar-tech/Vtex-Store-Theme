// react/Countdown.tsx
import React from 'react'

import { useQuery } from 'react-apollo'

import useProduct from 'vtex.product-context/useProduct'

import productReleaseDate from '../../queries/productReleaseDate.graphql'

const CountdownCustom = () => {
   const { product } = useProduct();
   console.log("Product context ---",product);
 const { data, loading, error } = useQuery(productReleaseDate, {
   variables: {
     slug: product?.linkText
   },
   ssr: false
 });

 console.log("data",{data})

if (loading) {
  return (
    <div>
      <span>Loading...</span>
    </div>
  )
}
if (error) {
  return (
    <div>
      <span>Error!</span>
    </div>
  )
}

if (!product) {
  return (
    <div>
      <span>There is no product context.</span>
    </div>
  )
}
else {
  return (
    <div>
      <span> Product release date : {data?.product?.releaseDate}</span>
      <span> Product Name : {data?.product?.productName}</span>
    </div>
  )
}

}

export default CountdownCustom