import Link from 'next/link'
import React from 'react'

function EditAddress() {
  return (
    <div className="woocommerce-MyAccount-content">
  <div className="woocommerce-notices-wrapper" />
  <p>The following addresses will be used on the checkout page by default.</p>
  <div className="u-columns woocommerce-Addresses col2-set addresses">
    <div className="u-column1 col-md-6 woocommerce-Address">
      <header className="woocommerce-Address-title title">
        <h3>Billing address</h3>
        <Link
          href="https://dhartii.in/my-account/edit-address/billing/"
          className="edit"
        >
          Add
        </Link>
      </header>
      <address>You have not set up this type of address yet. </address>
    </div>
    <div className="u-column2 col-md-6 woocommerce-Address">
      <header className="woocommerce-Address-title title">
        <h3>Shipping address</h3>
        <Link
          href="https://dhartii.in/my-account/edit-address/shipping/"
          className="edit"
        >
          Add
        </Link>
      </header>
      <address>You have not set up this type of address yet. </address>
    </div>
  </div>
</div>

  )
}

export default EditAddress