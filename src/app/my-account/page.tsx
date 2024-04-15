import React from 'react'
import Link from 'next/link'

function MyAccount() {
  return (
          <div className="woocommerce-MyAccount-content">
            <div className="woocommerce-notices-wrapper" />
            <p>
              Hello <strong>raturiprvn</strong> (not <strong>raturiprvn</strong>
              ?{" "}
              <Link href="https://dhartii.in/my-account/customer-logout/?_wpnonce=6021b9873e">
                Log out
              </Link>
              )
            </p>
            <p>
              From your account dashboard you can view your{" "}
              <Link href="https://dhartii.in/my-account/orders/">recent orders</Link>,
              manage your{" "}
              <Link href="https://dhartii.in/my-account/edit-address/">
                shipping and billing addresses
              </Link>
              , and{" "}
              <Link href="https://dhartii.in/my-account/edit-account/">
                edit your password and account details
              </Link>
              .
            </p>
            <p>&nbsp;</p>
          </div>
  )
}

export default MyAccount