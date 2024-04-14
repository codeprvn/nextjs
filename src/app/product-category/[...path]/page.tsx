import React from 'react'
import FilterComponent from '../../component/products/FilterComponent'
import TitleAndShort from '../../component/products/TitleAndShort'
import ProductPage from '@/app/component/products/ProductPage'
import './productCat.css'

function ProductCategory () {
  return (
    <main className="main-content inner-content">
  <main className="main-content inner-pages">
    <figure className="top-banner-img figure d-block mb-0">
      <img
        src="https://dhartii.in/wp-content/uploads/2024/02/Women_Subcategory-subsubcategory-banners-1-scaled.jpg"
        alt="Saree"
      />
    </figure>
    <section className="content-wrapper pb-3 pb-sm-4">
  <div className="container-xl py-sm-3">
    <div className="row">
     
      <aside className="col-sm-4 col-md-4 col-lg-3 filter-sidebar mb-4">
     <FilterComponent />
      </aside>
      <div className="col-sm-8 col-md-8 col-lg-9 position-relative">
        <div className="products-list-wrap">
            <TitleAndShort />
          <div className="row gx-3" id="ajax_product_filter">
          <ProductPage />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</main>
</main>

  )
}

export default ProductCategory
