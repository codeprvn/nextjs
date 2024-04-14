import React from 'react'
import ProductSuggestion from '@/app/component/productComponent/ProductSuggestion';
import ProductDescription from '@/app/component/products/ProductDescription';
import SingleProduct from '@/app/component/products/SingleProduct';
import "./product.css"

function product() {
  return (
    <main className="main-content inner-pages">
  <section className="product-details-section pt-3 pb-5 asd">
    <div className="container-xl">
      <div className="row gx-5">
        <div className="woocommerce-notices-wrapper" />
        <div className="col-lg-6 mb-4">
          <SingleProduct />
        </div>
        <div className="col-lg-6 mb-4">
          <ProductDescription />
        </div>
      </div>
    </div>
  </section>
  <section className="more-products-section py-5 bg-light border-bottom border-light-subtle">
    <div className="container-xl">
      <div className="section-heading text-center">
        <h3>You May Also Like</h3>
      </div>
      <ProductSuggestion />
    </div>
  </section>
</main>

  )
}

export default product
