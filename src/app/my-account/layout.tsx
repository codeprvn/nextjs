import Link from "next/link"

export default function AccountLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <main className="main-content inner-content">
  <div className="container-fluid">
    <div className="row">
      <article>
        <h3 className="mb-3" />
        <p />
        <div className="woocommerce">
          <img
            decoding="async"
            className="img-fluid"
            src="https://dhartii.in/wp-content/themes/dhaarti/images/myAccountBnr.png"
          />
          <div className="woocommerce-MyAccount-navigation nav">
            <ul>
              <li className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--orders">
                <Link href="/my-account/orders/">Orders</Link>
              </li>
              <li className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--edit-address">
                <Link href="/my-account/edit-address/">
                  Addresses
                </Link>
              </li>
              <li className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--edit-account">
                <Link href="/my-account/edit-account/">
                  Profile
                </Link>
              </li>
              <li className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--customer-logout">
                <Link href="/my-account/customer-logout/?_wpnonce=6021b9873e">
                  Log out
                </Link>
              </li>
            </ul>
          </div>
        {children}         
        </div>
      </article>
    </div>
  </div>
</main>
   
      </section>
    )
  }