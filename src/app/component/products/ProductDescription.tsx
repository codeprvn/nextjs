import Link from 'next/link'
import React from 'react'
import ProductInfo from '../productComponent/ProductInfo'
import SocialMediaWrap from '../productComponent/SocialMediaWrap'
import MetaDescription from '../productComponent/MetaDescription'
import VariationsComponent from '../productComponent/VariationsComponent'

function ProductDescription() {
  return (
  <div className="product-desc-content">
    <ProductInfo />
    <SocialMediaWrap />
    <VariationsComponent />
 <MetaDescription />
  </div>


  )
}

export default ProductDescription