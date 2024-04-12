
import Link from "next/link";

function WhisList (){
    return (
        <main className="main-content inner-content">
  <div className="container-fluid">
    <div className="row">
      <article>        
          <div className="wishlist-title-container">
            <div className="wishlist-title wishlist-title-with-form">
              <h2>My wishlist</h2>
            </div>           
          </div>
          <table
            className="shop_table cart wishlist_table wishlist_view traditional responsive   "
            data-pagination="no"
            data-per-page={5}
            data-page={1}
            data-id={196}
            data-token="F91RTMUWH7QC"
          >
            <thead>
              <tr>
                <th className="product-remove">
                  <span className="nobr"></span>
                </th>
                <th className="product-thumbnail" />
                <th className="product-name">
                  <span className="nobr">Product name </span>
                </th>
                <th className="product-price">
                  <span className="nobr">Unit price </span>
                </th>
                <th className="product-stock-status">
                  <span className="nobr">Stock status </span>
                </th>
                <th className="product-add-to-cart">
                  <span className="nobr"></span>
                </th>
              </tr>
            </thead>
            <tbody className="wishlist-items-wrapper">
              <tr id="yith-wcwl-row-2609" data-row-id={2609}>
                <td className="product-remove">
                  <div>
                    <Link
                      href="https://dhartii.in/wishlist/view/F91RTMUWH7QC/?remove_from_wishlist=2609&_wpnonce=1449c3e6cb"
                      className="remove remove_from_wishlist"
                      title="Remove this product"
                    >
                      ×
                    </Link>
                  </div>
                </td>
                <td className="product-thumbnail">
                  <Link href="https://dhartii.in/product/pants-with-corded-pockets/">
                    <img
                      decoding="async"
                      width={300}
                      height={225}
                      src="https://dhartii.in/wp-content/uploads/2024/02/5-6-300x225.png"
                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                      alt=""
                    />{" "}
                  </Link>
                </td>
                <td className="product-name">
                  <Link href="https://dhartii.in/product/pants-with-corded-pockets/">
                    Pants With Corded Pockets{" "}
                  </Link>
                </td>
                <td className="product-price">
                  <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">₹</span>
                    5,290
                  </span>
                </td>
                <td className="product-stock-status">
                  <span className="wishlist-in-stock">In Stock</span>
                </td>
                <td className="product-add-to-cart">
                  <Link
                    href="https://dhartii.in/product/pants-with-corded-pockets/?remove_from_wishlist_after_add_to_cart=2609&wishlist_id=196&wishlist_token=F91RTMUWH7QC"
                    data-quantity={1}
                    className="product_type_variable add_to_cart_button add_to_cart alt"
                    data-product_id={2609}
                    data-product_sku="DHMVECTBL"
                    aria-label="Select options for “Pants With Corded Pockets”"
                    aria-describedby="This product has multiple variants. The options may be chosen on the product page"
                    rel="nofollow"
                  >
                    Select options
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
      </article>
    </div>
  </div>
</main>

    )
}

export default WhisList