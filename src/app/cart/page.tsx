import Link from "next/link"

function Cart (){
return(<main className="main-content inner-pages">
  <section className="cart-section py-4">
    <div className="container-xl">
      <div className="cart-wrapper">
        <div className="row gx-3">
          <div className="col-sm-7 col-md-8 mb-4">
            <div className="card rounded-0">
              <div className="card-body">
                <h6 className="card-title text-uppercase fw600">Your Cart</h6>
                <table
                  className="shop_table shop_table_responsive cart woocommerce-cart-form__contents cartTable"
                  cellSpacing={0}
                >
                  <thead>
                    <tr>
                      <th className="product-thumbnail">
                        <span className="screen-reader-text">
                          Thumbnail image
                        </span>
                      </th>
                      <th className="product-name">Product</th>
                      <th className="product-price">Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-subtotal">Subtotal</th>
                      <th className="product-remove">
                        <span className="screen-reader-text"></span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="woocommerce-cart-form__cart-item cart_item">
                      <td className="product-thumbnail">
                        <Link href="https://dhartii.in/product/unisex-peach-check-flannel-shacket/?attribute_pa_color=peach&attribute_pa_size=s">
                          <img
                            decoding="async"
                            width={300}
                            height={225}
                            src="https://dhartii.in/wp-content/uploads/2024/04/UP05-1-300x225.png"
                            className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                            alt=""
                          />
                        </Link>{" "}
                      </td>
                      <td className="product-name" data-title="Product">
                        <Link href="https://dhartii.in/product/unisex-peach-check-flannel-shacket/?attribute_pa_color=peach&attribute_pa_size=s">
                          Unisex peach check flannel shacket - Peach, S
                        </Link>
                        <dl className="variation">
                          <dt className="variation-Vendor">Vendor:</dt>
                          <dd className="variation-Vendor">
                            <p>Upkriti</p>
                          </dd>
                        </dl>
                      </td>
                      <td className="product-price" data-title="Price">
                        <span className="woocommerce-Price-amount amount">
                          <bdi className="cproductinfoamount">
                            <span className="woocommerce-Price-currencySymbol">
                              ₹
                            </span>
                            3,399
                          </bdi>
                        </span>{" "}
                      </td>
                      <td
                        className="product-quantity cart-pro-qty"
                        data-title="Quantity"
                      >
                        <div className="input-group">
                          <div className="row align-items-center gx-2 mb-3">
                            <div className="col-sm-auto pb-3">
                              <div className="product-quantity-option pe-2">
                                <div className="input-group">
                                  <button
                                    type="button"
                                    className="btn btn-outline-dark value-button"
                                    id="decrease"
                                  >
                                    -
                                  </button>
                                  <input
                                    type="text"
                                    className="form-control text-center quantity"
                                    id="quantity_6618c492704d9"
                                    step={1}
                                    min={0}
                                    max={5}
                                    name="cart[8da639cfa0cb7e59e4c6e4310c07bbf7][qty]"
                                    defaultValue={1}
                                    title="Qty"
                                    size={1}
                                    placeholder=""
                                    inputMode="numeric"
                                    autoComplete="off"
                                  />
                                  <button
                                    type="button"
                                    className="btn btn-outline-dark value-button"
                                    id="increase"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      {/* add  */}
                      <td className="product-remove phone-rmeove-pc ">
                        <Link
                          data-gtm4wp_product_data='{"internal_id":12318,"item_id":12318,"item_name":"Unisex peach check flannel shacket","sku":"UP05_S","price":3399,"stocklevel":5,"stockstatus":"instock","google_business_vertical":"retail","item_category":"Shirts","id":12318,"item_variant":"peach,s","productlink":"https:\/\/dhartii.in\/cart\/","item_brand":""}'
                          href="https://dhartii.in/cart/?remove_item=8da639cfa0cb7e59e4c6e4310c07bbf7&_wpnonce=5e8943e8b7"
                          className="remove"
                          aria-label="Remove this item"
                          data-product_id={12308}
                          data-product_sku="UP05_S"
                        >
                          Remove product
                        </Link>{" "}
                      </td>
                      <td className="product-subtotal" data-title="Subtotal">
                        <span className="woocommerce-Price-amount amount">
                          <bdi className="cproductinfoamount">
                            <span className="woocommerce-Price-currencySymbol">
                              ₹
                            </span>
                            3,399
                          </bdi>
                        </span>{" "}
                      </td>
                      <td className="product-remove desktop-remove-pc">
                        <Link
                          href="https://dhartii.in/cart/?remove_item=8da639cfa0cb7e59e4c6e4310c07bbf7&_wpnonce=5e8943e8b7"
                          className="remove"
                          aria-label="Remove this item"
                          data-product_id={12308}
                          data-product_sku="UP05_S"
                        >
                          ×
                        </Link>{" "}
                      </td>
                    </tr>
                    <tr className="woocommerce-cart-form__cart-item cart_item">
                      <td className="product-thumbnail">
                        <Link href="https://dhartii.in/product/sky-is-the-limit-linen-shirt/?attribute_pa_color=sky-blue&attribute_pa_size=xs">
                          <img
                            decoding="async"
                            width={300}
                            height={225}
                            src="https://dhartii.in/wp-content/uploads/2024/03/1-142-300x225.png"
                            className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                            alt=""
                          />
                        </Link>{" "}
                      </td>
                      <td className="product-name" data-title="Product">
                        <Link href="https://dhartii.in/product/sky-is-the-limit-linen-shirt/?attribute_pa_color=sky-blue&attribute_pa_size=xs">
                          Sky Is The Limit Linen Shirt - XS
                        </Link>
                        <dl className="variation">
                          <dt className="variation-Color">Color:</dt>
                          <dd className="variation-Color">
                            <p>Sky Blue</p>
                          </dd>
                          <dt className="variation-Vendor">Vendor:</dt>
                          <dd className="variation-Vendor">
                            <p>Cultura Studio</p>
                          </dd>
                        </dl>
                      </td>
                      <td className="product-price" data-title="Price">
                        <span className="woocommerce-Price-amount amount">
                          <bdi className="cproductinfoamount">
                            <span className="woocommerce-Price-currencySymbol">
                              ₹
                            </span>
                            3,573
                          </bdi>
                        </span>{" "}
                      </td>
                      <td
                        className="product-quantity cart-pro-qty"
                        data-title="Quantity"
                      >
                        <div className="input-group">
                          {/*label class="screen-reader-text" for="quantity_6618c49271f0f">Sky Is The Limit Linen Shirt - XS quantity</label*/}
                          {/* <p class="fw600 text-dark mb-1 text-uppercase fs13">Select Quantity</p> */}
                          <div className="row align-items-center gx-2 mb-3">
                            <div className="col-sm-auto pb-3">
                              <div className="product-quantity-option pe-2">
                                <div className="input-group">
                                  <button
                                    type="button"
                                    className="btn btn-outline-dark value-button"
                                    id="decrease"
                                  >
                                    -
                                  </button>
                                  <input
                                    type="text"
                                    className="form-control text-center quantity"
                                    id="quantity_6618c49271f0f"
                                    step={1}
                                    min={0}
                                    max={5}
                                    name="cart[15aebb2e6aff9f3ebf8264b968d4af79][qty]"
                                    defaultValue={1}
                                    title="Qty"
                                    size={1}
                                    placeholder=""
                                    inputMode="numeric"
                                    autoComplete="off"
                                  />
                                  <button
                                    type="button"
                                    className="btn btn-outline-dark value-button"
                                    id="increase"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      {/* add  */}
                      <td className="product-remove phone-rmeove-pc ">
                        <Link
                          data-gtm4wp_product_data='{"internal_id":9575,"item_id":9575,"item_name":"Sky Is The Limit Linen Shirt","sku":"CS1deergiantoak-XS","price":3573,"stocklevel":5,"stockstatus":"instock","google_business_vertical":"retail","item_category":"Shirts","id":9575,"item_variant":",xs","productlink":"https:\/\/dhartii.in\/cart\/","item_brand":""}'
                          href="https://dhartii.in/cart/?remove_item=15aebb2e6aff9f3ebf8264b968d4af79&_wpnonce=5e8943e8b7"
                          className="remove"
                          aria-label="Remove this item"
                          data-product_id={9567}
                          data-product_sku="CS1deergiantoak-XS"
                        >
                          Remove product
                        </Link>{" "}
                      </td>
                      <td className="product-subtotal" data-title="Subtotal">
                        <span className="woocommerce-Price-amount amount">
                          <bdi className="cproductinfoamount">
                            <span className="woocommerce-Price-currencySymbol">
                              ₹
                            </span>
                            3,573
                          </bdi>
                        </span>{" "}
                      </td>
                      <td className="product-remove desktop-remove-pc">
                        <Link
                          href="https://dhartii.in/cart/?remove_item=15aebb2e6aff9f3ebf8264b968d4af79&_wpnonce=5e8943e8b7"
                          className="remove"
                          aria-label="Remove this item"
                          data-product_id={9567}
                          data-product_sku="CS1deergiantoak-XS"
                        >
                          ×
                        </Link>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={6} className="actions">
                        <div className="coupon">
                          <input
                            type="text"
                            name="coupon_code"
                            className="input-text"
                            id="coupon_code"
                            defaultValue=""
                            placeholder="Coupon code"
                          />{" "}
                          <button
                            type="submit"
                            className="button"
                            name="apply_coupon"
                            value="Apply coupon"
                          >
                            Apply{" "}
                          </button>
                          <div className="wpccl-btn-wrapper">
                            <Link
                              href="#"
                              className="wpccl-btn"
                              data-featherlight="#wpccl-popup"
                              data-featherlight-before-open="wpccl_load_coupons()"
                              data-featherlight-variant="wpccl-featherlight"
                            >
                              View Available Coupons
                            </Link>
                          </div>
                          <div className="addmoreproduct">
                            <Link
                              className="button wc-backward ms-1 Add-More-Product"
                              href="https://dhartii.in/shop/"
                            >
                              {" "}
                              Add More Product
                            </Link>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="button"
                          name="update_cart"
                          id="update_cart"
                          value="Update cart"
                          aria-disabled="true"
                        >
                          Update cart
                        </button>
                        {/* <button type="submit" class="btn btn-dark w-100" name="update_cart" id="update_cart" value="Update cart" disabled="" aria-disabled="true"><small>UPDATE CART</small></button> */}
                        <input
                          type="hidden"
                          id="woocommerce-cart-nonce"
                          name="woocommerce-cart-nonce"
                          defaultValue="5e8943e8b7"
                        />
                        <input
                          type="hidden"
                          name="_wp_http_referer"
                          defaultValue="/cart/"
                        />{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-sm-5 col-md-4 mb-4">
            <div className="cart-collaterals">
              <div className="cart_totals ">
                <table
                  cellSpacing={0}
                  className="shop_table shop_table_responsive"
                >
                  <tbody>
                    <tr className="cart-subtotal">
                      <th>Subtotal</th>
                      <td data-title="Subtotal">
                        <span className="woocommerce-Price-amount amount">
                          <bdi className="cproductinfoamount">
                            <span className="woocommerce-Price-currencySymbol">
                              ₹
                            </span>
                            6,972
                          </bdi>
                        </span>
                      </td>
                    </tr>
                    <tr className="order-total">
                      <th>Total</th>
                      <td data-title="Total">
                        <strong>
                          <span className="woocommerce-Price-amount amount">
                            <bdi className="cproductinfoamount">
                              <span className="woocommerce-Price-currencySymbol">
                                ₹
                              </span>
                              6,972
                            </bdi>
                          </span>
                        </strong>{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="wc-proceed-to-checkout">
                  <Link
                    href="https://dhartii.in/checkout/?payment=phonepe"
                    className="checkout-button button alt wc-forward"
                  >
                    Proceed to checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
)

}

export default Cart