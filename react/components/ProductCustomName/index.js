// Notice that this is TypeScript, and this code should be in a .tsx file
import React, { FC } from 'react'
import { useProduct } from 'vtex.product-context'

const ProductCustomName = () => {
  const productContextValue = useProduct()
   
  return (
    <div>
      {productContextValue?.product?.productName}
      {productContextValue?.product?.price}
    </div>
  )
}

export default ProductCustomName