// Notice that this is TypeScript, and this code should be in a .tsx file
import React, {useEffect, FC,useState } from 'react'
import { useProduct } from 'vtex.product-context';
import { apiOptions } from '../../utils';


const ProductCustomName = () => {
  const productContextValue = useProduct();
  const  HttpapiOptions = apiOptions('GET');
  const GetData  = () =>{
    return fetch('https://echidna.vtexcommercestable.com.br/api/catalog_system/pvt/products/GetProductAndSkuIds?categoryId=101&_from=1&_to=10s', HttpapiOptions)
        .then(response => response.json())
        .then(data => {
          return data; 
        });
  }
  return (
    <div>
       
      {productContextValue?.product?.productName}
      {productContextValue?.product?.price}
      <br/>
    {productContextValue?.product?.categories}
    </div>
  )
}

export default ProductCustomName