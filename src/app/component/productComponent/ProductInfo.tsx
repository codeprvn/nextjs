import Link from "next/link"

function ProductInfo() {
  return (
    <>
    <div className="shipping-info-wrap mb-4">
      <p className="mb-0 text-black-80 fs15">
        <Link href="../../vendors/mushio/index.html">{'Brand: Mushio'}</Link>
      </p>
      <small className="sku_wrapper">
        SKU: <span className="sku">{'JSN006'}</span>
      </small>
    </div>
    <div className="fw500 d-flex justify-content-between">
      <div className="flex-grow-1 h4 mb-0">{'Aasmani kurta'}</div>
    </div>
    </>
  )
}

export default ProductInfo