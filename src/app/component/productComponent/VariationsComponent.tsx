import Link from "next/link"

function VariationsComponent() {
  return (    
    <>
    <table className="variations" cellSpacing={0} role="presentation">
      <tbody>
        <tr>
          <th className="label">
            <label htmlFor="pa_color">Color</label>
          </th>
          <td className="value">
            <div className="thwvsf_fields">
              <select
                id="pa_color"
                className="thwvs-select "
                name="attribute_pa_color"
                data-attribute_name="attribute_pa_color"
                data-design_type="swatch_design_1"
                style={{ display: "none" }}
                data-show_option_none="yes"
              >
                <option value="">Choose an option</option>
                <option
                  value="teal-blue"
                  className="attached enabled"
                >
                  Teal Blue
                </option>
              </select>
              <ul className="thwvsf-wrapper-ul">
                <li
                  className="thwvsf-wrapper-item-li thwvsf-color-li thwvsf-div thwvsf-checkbox attribute_pa_color teal-blue thwvsf-selected attr_swatch_design_1 thwvsf-tooltip"
                  data-attribute_name="attribute_pa_color"
                  data-value="teal-blue"
                  title="Teal Blue"
                >
                  <span
                    className="thwvsf-item-span thwvsf-item-span-color"
                    style={{ backgroundColor: "#367588" }}
                  >
                    
                  </span>
                </li>
              </ul>
            </div>
          </td>
        </tr>
        <tr>
          <th className="label">
            <label htmlFor="pa_size">Size</label>
          </th>
          <td className="value">
            <div className="thwvsf_fields">
              
              <select
                id="pa_size"
                className="thwvs-select "
                name="attribute_pa_size"
                data-attribute_name="attribute_pa_size"
                data-design_type="swatch_design_1"
                style={{ display: "none" }}
                data-show_option_none="yes"
              >
                <option value="">Choose an option</option>
                <option
                  value="xxs"
                  className="attached enabled"
                >
                  XXS
                </option>
                <option value="xs" className="attached enabled">
                  XS
                </option>
                <option value="s" className="attached enabled">
                  S
                </option>
                <option value="m" className="attached enabled">
                  M
                </option>
                <option value="l" className="attached enabled">
                  L
                </option>
                <option value="xl" className="attached enabled">
                  XL
                </option>
                <option value="xxl" className="attached enabled">
                  XXL
                </option>
              </select>
              <ul className="thwvsf-wrapper-ul">
                <li
                  className="thwvsf-wrapper-item-li thwvsf-label-li thwvsf-div thwvsf-checkbox attribute_pa_size xxs attr_swatch_design_1 thwvsf-selected thwvsf-tooltip"
                  data-attribute_name="attribute_pa_size"
                  data-value="xxs"
                  title="XXS"
                >
                  <span className=" thwvsf-item-span item-span-text ">XXS</span>
                </li>
                <li
                  className="thwvsf-wrapper-item-li thwvsf-label-li thwvsf-div thwvsf-checkbox attribute_pa_size xs attr_swatch_design_1 thwvsf-tooltip"
                  data-attribute_name="attribute_pa_size"
                  data-value="xs"
                  title="XS"
                >
                  <span className=" thwvsf-item-span item-span-text ">XS</span>
                </li>
                <li
                  className="thwvsf-wrapper-item-li thwvsf-label-li thwvsf-div thwvsf-checkbox attribute_pa_size s attr_swatch_design_1 thwvsf-tooltip"
                  data-attribute_name="attribute_pa_size"
                  data-value="s"
                  title="S"
                >
                  <span className=" thwvsf-item-span item-span-text ">S</span>
                </li>
                <li
                  className="thwvsf-wrapper-item-li thwvsf-label-li thwvsf-div thwvsf-checkbox attribute_pa_size m attr_swatch_design_1 thwvsf-tooltip"
                  data-attribute_name="attribute_pa_size"
                  data-value="m"
                  title="M"
                >
                  <span className=" thwvsf-item-span item-span-text ">M</span>
                </li>
                <li
                  className="thwvsf-wrapper-item-li thwvsf-label-li thwvsf-div thwvsf-checkbox attribute_pa_size l attr_swatch_design_1 thwvsf-tooltip"
                  data-attribute_name="attribute_pa_size"
                  data-value="l"
                  title="L"
                >
                  <span className=" thwvsf-item-span item-span-text ">L</span>
                </li>
                <li
                  className="thwvsf-wrapper-item-li thwvsf-label-li thwvsf-div thwvsf-checkbox attribute_pa_size xl attr_swatch_design_1 thwvsf-tooltip"
                  data-attribute_name="attribute_pa_size"
                  data-value="xl"
                  title="XL"
                >
                  <span className=" thwvsf-item-span item-span-text ">XL</span>
                </li>
                <li
                  className="thwvsf-wrapper-item-li thwvsf-label-li thwvsf-div thwvsf-checkbox attribute_pa_size xxl attr_swatch_design_1 thwvsf-tooltip"
                  data-attribute_name="attribute_pa_size"
                  data-value="xxl"
                  title="XXL"
                >
                  <span className=" thwvsf-item-span item-span-text ">XXL</span>
                </li>
              </ul>
            </div>
            <Link className="reset_variations" href="#">
              Clear
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      {/* <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content rounded-0">
          <div className="modal-header border-0">
          </div>
          <div className="modal-body">
            <div className="table-responsive">
              <table className="table table-striped table-hover table-bordered">
                <thead className="table100-head table-dark">
                  <tr className="head">
                    <th className="woo_sc_cell">SIZE</th>
                    <th className="woo_sc_cell">BUST</th>
                    <th className="woo_sc_cell">WAIST</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>XS</td>
                    <td>26 – 28</td>
                    <td>32</td>
                  </tr>
                  <tr>
                    <td>S</td>
                    <td>28 – 30</td>
                    <td>33</td>
                  </tr>
                  <tr>
                    <td>M</td>
                    <td>30 – 32</td>
                    <td>34</td>
                  </tr>
                  <tr>
                    <td>L</td>
                    <td>32 – 34</td>
                    <td>36</td>
                  </tr>
                  <tr>
                    <td>XL</td>
                    <td>34 – 36</td>
                    <td>38</td>
                  </tr>
                  <tr>
                    <td>XXL</td>
                    <td>36 – 38</td>
                    <td>37</td>
                  </tr>
                  <tr>
                    <td>3XL</td>
                    <td>38 – 40</td>
                    <td>40</td>
                  </tr>
                  <tr>
                    <td>4XL</td>
                    <td>40 – 42</td>
                    <td>42</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> */}
    </div>
    <div className="single_variation_wrap">
      <div className="woocommerce-variation single_variation">
        <div className="woocommerce-variation-description" />
        <div className="woocommerce-variation-price">
          <div className="product-option-row mb-2">
            <div className="d-flex flex-row">
              <div className="product-option-title flex-shrink-0"></div>
              <div className="product-price mb-4">
                <span className="price">
                  <span className="woocommerce-Price-amount amount">
                    <bdi className="cproductinfoamount">
                      <span className="woocommerce-Price-currencySymbol">₹</span>
                      2,389
                    </bdi>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="woocommerce-variation-availability">
          <p className="stock in-stock">5 in stock</p>
        </div>
      </div>
      <div className="woocommerce-variation-add-to-cart variations_button woocommerce-variation-add-to-cart-enabled">
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
                    id="quantity_661a67c0d99dc"
                    step={1}
                    min={1}
                    max={35}
                    name="quantity"
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
        <div className="d-flex gap-2 flex-row">
        <button
          type="submit"
          className="single_add_to_cart_button button ad2 alt"
        >
          ADD TO CART
        </button>
        <input
          type="hidden"
          name="gtm4wp_product_data"
          defaultValue='{"internal_id":19001,"item_id":19001,"item_name":"Pomana Hand Block Cotton Gathered Kurta","sku":"Papayawhims44","price":2389,"stocklevel":35,"stockstatus":"instock","google_business_vertical":"retail","item_category":"Kurtas & Kurtas Set","id":19001}'
        />
        <button
          type="submit"
          name="buy-now"
          value={19001}
          className="wpcbn-btn wpcbn-btn-single single_add_to_cart_button button alt"
          data-product_id={19001}
        >
          BUY NOW
        </button>
        <input type="hidden" name="add-to-cart" defaultValue={19001} />
        <input type="hidden" name="product_id" defaultValue={19001} />
        <input
          type="hidden"
          name="variation_id"
          className="variation_id"
          defaultValue={19013}
        />
      </div>
      </div>
    </div>
    </>
  )
}

export default VariationsComponent