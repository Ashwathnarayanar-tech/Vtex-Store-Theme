// Notice that this is TypeScript, and this code should be in a .tsx file
import React, {useEffect, FC,useState } from 'react'
import { useProduct } from 'vtex.product-context';
import { apiOptions } from '../../utils';


const ProductCustomName = () => {
  const productContextValue = useProduct();
  const  HttpapiOptions = apiOptions('GET');
  const GetData  = () =>{
    return fetch('https://demoashwath--echidna.myvtex.com/_v/status/4', HttpapiOptions)
        .then(response => response.json())
        .then(data => {
          console.log("data -----",data);
          return data; 
        });
  }
  GetData();
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