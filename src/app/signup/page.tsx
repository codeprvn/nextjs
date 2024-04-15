import React from 'react'

function SignUp() {
  return (
    <main className="main-content inner-pages">
  <section className="login-section py-5">
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-md-12 col-xl-10">
          <div className="card border-light-subtle bg-light-subtle">
            <div className="row g-0">
              <div className="col-md-6 col-lg-5 d-none d-md-block">
                <img
                  src="https://dhartii.in/wp-content/themes/dhaarti/images/8F8A1136-min.jpg"
                  alt="login form"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6 col-lg-7 d-flex align-items-center">
                <div className="card-body p-4 p-lg-5 ">
                  <form
                    method="post"
                    className="form-signin register"
                    data-gtm-form-interact-id={0}
                  >
                    <h5 className="fw-normal mb-2 pb-3 lh1">
                      Create a New Account
                    </h5>
                    <label className="form-label fw500 mb-1" htmlFor="email">
                      Username*
                    </label>
                    <div className="form-outline mb-3">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="username"
                        id="first_name"
                        defaultValue=""
                        placeholder="Enter Username*"
                      />
                    </div>
                    <label className="form-label fw500 mb-1" htmlFor="email">
                      Email Address*
                    </label>
                    <div className="form-group mb-3">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        name="email"
                        id="reg_email"
                        autoComplete="email"
                        defaultValue=""
                        placeholder="Enter User Email*"
                      />
                    </div>
                    <label
                      className="form-label fw500 mb-1"
                      htmlFor="user_mobile"
                    >
                      Contact No*
                    </label>
                    <div className="form-outline mb-3">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="user_mobile"
                        id="user_mobile"
                        autoComplete="user_mobile"
                        defaultValue=""
                        placeholder="Enter Contact No.*"
                      />
                    </div>
                    <label className="form-label fw500 mb-1" htmlFor="email">
                      Password*
                    </label>
                    <div className="form-group mb-3">
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        name="password"
                        id="reg_password"
                        autoComplete="new-password"
                        placeholder="Enter Password*"
                      />
                    </div>
                   
                    <p className="form-row form-group user-role vendor-customer-registration">
                      <input
                        type="hidden"
                        name="role"
                        defaultValue="customer"
                        className="dokan-role-customer"
                      />
                     
                      <label className="radio">
                        <input
                          type="radio"
                          name="role"
                          defaultValue="seller"
                          className="dokan-role-seller"
                          data-gtm-form-interact-field-id={0}
                        />
                        I am a vendor
                      </label>
                    </p>
                    <div className="show_if_seller" style={{}}>
                      <div className="split-row form-row-wide">
                        <p className="form-row form-group">
                          <label htmlFor="first-name">
                            First Name <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            className="input-text form-control"
                            name="fname"
                            id="first-name"
                            placeholder="First Name *"
                            defaultValue=""
                          />
                        </p>
                        <p className="form-row form-group">
                          <label htmlFor="last-name">
                            Last Name <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            className="input-text form-control"
                            name="lname"
                            id="last-name"
                            placeholder="Last Name *"
                            defaultValue=""
                          />
                        </p>
                      </div>
                      <p className="form-row form-group form-row-wide">
                        <label htmlFor="company-name">
                          Shop Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          className="input-text form-control"
                          name="shopname"
                          id="company-name"
                          placeholder="Shop Name *"
                          defaultValue=""
                        />
                      </p>
                      <p className="form-row form-group form-row-wide">
                        <label htmlFor="seller-url" className="pull-left">
                          Shop URL <span className="required">*</span>
                        </label>
                        <strong id="url-alart-mgs" className="pull-right" />
                        <input
                          type="text"
                          className="input-text form-control"
                          name="shopurl"
                          id="seller-url"
                          placeholder="Shop URL *"
                          defaultValue=""
                        />
                        <small>
                          https://dhartii.in/vendors/
                          <strong id="url-alart" />
                        </small>
                      </p>
                      <p className="form-row form-group form-row-wide">
                        <label htmlFor="custom_dropdown" className="pull-left">
                          Select Vendor Category
                        </label>
                        <select
                          name="seller_category"
                          id="custom_dropdown"
                          className="input-text form-control"
                        >
                          <option
                            value="Manufacturer"
                            className="input-text form-control"
                          >
                            Manufacturer
                          </option>
                          <option
                            value="Designer/Label"
                            className="input-text form-control"
                          >
                            Designer/Label
                          </option>
                          <option
                            value="Brand/Retailer"
                            className="input-text form-control"
                          >
                            Brand/Retailer
                          </option>
                        </select>
                      </p>
                      <p className="form-row form-group form-row-wide">
                        <label htmlFor="seller-gst" className="pull-left">
                          GST Number, <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          className="input-text form-control"
                          name="gst_number"
                          id="seller-gst"
                          placeholder="Seller GST Number *"
                          defaultValue=""
                        />
                        <small>
                          If you don't have a GST number, please reach out to us
                          at info@dhartii.in
                          <strong id="url-alart" />
                        </small>
                      </p>
                      <input
                        type="hidden"
                        id="dokan_selected_country"
                        defaultValue=""
                      />
                      <input
                        type="hidden"
                        id="dokan_selected_state"
                        defaultValue=""
                      />
                      <div className="dokan-form-group">
                        <label
                          className="dokan-hide dokan-control-label"
                          htmlFor="setting_address"
                        >
                          Address
                        </label>
                        <div className=" dokan-text-left dokan-address-fields">
                          <div className="dokan-form-group">
                            <label
                              className="control-label"
                              htmlFor="dokan_address[street_1]"
                            >
                              Street <span className="required"> *</span>
                            </label>
                            <input
                              id="dokan_address[street_1]"
                              defaultValue=""
                              name="dokan_address[street_1]"
                              placeholder="Street address"
                              className="input-text form-control"
                              type="text"
                            />
                          </div>
                          <div className="dokan-form-group">
                            <label
                              className="control-label"
                              htmlFor="dokan_address[street_2]"
                            >
                              Street 2{" "}
                            </label>
                            <input
                              id="dokan_address[street_2]"
                              defaultValue=""
                              name="dokan_address[street_2]"
                              placeholder="Apartment, suite, unit etc. (optional)"
                              className="input-text form-control"
                              type="text"
                            />
                          </div>
                          <div className="dokan-from-group">
                            <div className="dokan-form-group dokan-w6 dokan-left dokan-right-margin-30">
                              <label
                                className="control-label"
                                htmlFor="dokan_address[city]"
                              >
                                City <span className="required"> *</span>
                              </label>
                              <input
                                id="dokan_address[city]"
                                defaultValue=""
                                name="dokan_address[city]"
                                placeholder="Town / City"
                                className="input-text form-control"
                                type="text"
                              />
                            </div>
                            <div className="dokan-form-group dokan-w5 dokan-left">
                              <label
                                className="control-label"
                                htmlFor="dokan_address[zip]"
                              >
                                Post/ZIP Code{" "}
                                <span className="required"> *</span>
                              </label>
                              <input
                                id="dokan_address[zip]"
                                defaultValue=""
                                name="dokan_address[zip]"
                                placeholder="Postcode / Zip"
                                className="input-text form-control"
                                type="text"
                              />
                            </div>
                            <div className="dokan-clearfix" />
                          </div>
                          <div className="dokan-form-group">
                            <label
                              className="control-label"
                              htmlFor="dokan_address[country]"
                            >
                              Country <span className="required"> *</span>
                            </label>
                            <select
                              name="dokan_address[country]"
                              className="form-control form-control-lg"
                              id="dokan_address_country"
                            >
                              <option value="">- Select a location -</option>
                              <optgroup label="------------------------------">
                                <option value="AF">Afghanistan</option>
                                <option value="AX">Åland Islands</option>
                                <option value="AL">Albania</option>
                                <option value="DZ">Algeria</option>
                                <option value="AS">American Samoa</option>
                                <option value="AD">Andorra</option>
                                <option value="AO">Angola</option>
                                <option value="AI">Anguilla</option>
                                <option value="AQ">Antarctica</option>
                                <option value="AG">Antigua and Barbuda</option>
                                <option value="AR">Argentina</option>
                                <option value="AM">Armenia</option>
                                <option value="AW">Aruba</option>
                                <option value="AU">Australia</option>
                                <option value="AT">Austria</option>
                                <option value="AZ">Azerbaijan</option>
                                <option value="BS">Bahamas</option>
                                <option value="BH">Bahrain</option>
                                <option value="BD">Bangladesh</option>
                                <option value="BB">Barbados</option>
                                <option value="BY">Belarus</option>
                                <option value="PW">Belau</option>
                                <option value="BE">Belgium</option>
                                <option value="BZ">Belize</option>
                                <option value="BJ">Benin</option>
                                <option value="BM">Bermuda</option>
                                <option value="BT">Bhutan</option>
                                <option value="BO">Bolivia</option>
                                <option value="BQ">
                                  Bonaire, Saint Eustatius and Saba
                                </option>
                                <option value="BA">
                                  Bosnia and Herzegovina
                                </option>
                                <option value="BW">Botswana</option>
                                <option value="BV">Bouvet Island</option>
                                <option value="BR">Brazil</option>
                                <option value="IO">
                                  British Indian Ocean Territory
                                </option>
                                <option value="BN">Brunei</option>
                                <option value="BG">Bulgaria</option>
                                <option value="BF">Burkina Faso</option>
                                <option value="BI">Burundi</option>
                                <option value="KH">Cambodia</option>
                                <option value="CM">Cameroon</option>
                                <option value="CA">Canada</option>
                                <option value="CV">Cape Verde</option>
                                <option value="KY">Cayman Islands</option>
                                <option value="CF">
                                  Central African Republic
                                </option>
                                <option value="TD">Chad</option>
                                <option value="CL">Chile</option>
                                <option value="CN">China</option>
                                <option value="CX">Christmas Island</option>
                                <option value="CC">
                                  Cocos (Keeling) Islands
                                </option>
                                <option value="CO">Colombia</option>
                                <option value="KM">Comoros</option>
                                <option value="CG">Congo (Brazzaville)</option>
                                <option value="CD">Congo (Kinshasa)</option>
                                <option value="CK">Cook Islands</option>
                                <option value="CR">Costa Rica</option>
                                <option value="HR">Croatia</option>
                                <option value="CU">Cuba</option>
                                <option value="CW">Curaçao</option>
                                <option value="CY">Cyprus</option>
                                <option value="CZ">Czech Republic</option>
                                <option value="DK">Denmark</option>
                                <option value="DJ">Djibouti</option>
                                <option value="DM">Dominica</option>
                                <option value="DO">Dominican Republic</option>
                                <option value="EC">Ecuador</option>
                                <option value="EG">Egypt</option>
                                <option value="SV">El Salvador</option>
                                <option value="GQ">Equatorial Guinea</option>
                                <option value="ER">Eritrea</option>
                                <option value="EE">Estonia</option>
                                <option value="SZ">Eswatini</option>
                                <option value="ET">Ethiopia</option>
                                <option value="FK">Falkland Islands</option>
                                <option value="FO">Faroe Islands</option>
                                <option value="FJ">Fiji</option>
                                <option value="FI">Finland</option>
                                <option value="FR">France</option>
                                <option value="GF">French Guiana</option>
                                <option value="PF">French Polynesia</option>
                                <option value="TF">
                                  French Southern Territories
                                </option>
                                <option value="GA">Gabon</option>
                                <option value="GM">Gambia</option>
                                <option value="GE">Georgia</option>
                                <option value="DE">Germany</option>
                                <option value="GH">Ghana</option>
                                <option value="GI">Gibraltar</option>
                                <option value="GR">Greece</option>
                                <option value="GL">Greenland</option>
                                <option value="GD">Grenada</option>
                                <option value="GP">Guadeloupe</option>
                                <option value="GU">Guam</option>
                                <option value="GT">Guatemala</option>
                                <option value="GG">Guernsey</option>
                                <option value="GN">Guinea</option>
                                <option value="GW">Guinea-Bissau</option>
                                <option value="GY">Guyana</option>
                                <option value="HT">Haiti</option>
                                <option value="HM">
                                  Heard Island and McDonald Islands
                                </option>
                                <option value="HN">Honduras</option>
                                <option value="HK">Hong Kong</option>
                                <option value="HU">Hungary</option>
                                <option value="IS">Iceland</option>
                                <option value="IN">India</option>
                                <option value="ID">Indonesia</option>
                                <option value="IR">Iran</option>
                                <option value="IQ">Iraq</option>
                                <option value="IE">Ireland</option>
                                <option value="IM">Isle of Man</option>
                                <option value="IL">Israel</option>
                                <option value="IT">Italy</option>
                                <option value="CI">Ivory Coast</option>
                                <option value="JM">Jamaica</option>
                                <option value="JP">Japan</option>
                                <option value="JE">Jersey</option>
                                <option value="JO">Jordan</option>
                                <option value="KZ">Kazakhstan</option>
                                <option value="KE">Kenya</option>
                                <option value="KI">Kiribati</option>
                                <option value="KW">Kuwait</option>
                                <option value="KG">Kyrgyzstan</option>
                                <option value="LA">Laos</option>
                                <option value="LV">Latvia</option>
                                <option value="LB">Lebanon</option>
                                <option value="LS">Lesotho</option>
                                <option value="LR">Liberia</option>
                                <option value="LY">Libya</option>
                                <option value="LI">Liechtenstein</option>
                                <option value="LT">Lithuania</option>
                                <option value="LU">Luxembourg</option>
                                <option value="MO">Macao</option>
                                <option value="MG">Madagascar</option>
                                <option value="MW">Malawi</option>
                                <option value="MY">Malaysia</option>
                                <option value="MV">Maldives</option>
                                <option value="ML">Mali</option>
                                <option value="MT">Malta</option>
                                <option value="MH">Marshall Islands</option>
                                <option value="MQ">Martinique</option>
                                <option value="MR">Mauritania</option>
                                <option value="MU">Mauritius</option>
                                <option value="YT">Mayotte</option>
                                <option value="MX">Mexico</option>
                                <option value="FM">Micronesia</option>
                                <option value="MD">Moldova</option>
                                <option value="MC">Monaco</option>
                                <option value="MN">Mongolia</option>
                                <option value="ME">Montenegro</option>
                                <option value="MS">Montserrat</option>
                                <option value="MA">Morocco</option>
                                <option value="MZ">Mozambique</option>
                                <option value="MM">Myanmar</option>
                                <option value="NA">Namibia</option>
                                <option value="NR">Nauru</option>
                                <option value="NP">Nepal</option>
                                <option value="NL">Netherlands</option>
                                <option value="NC">New Caledonia</option>
                                <option value="NZ">New Zealand</option>
                                <option value="NI">Nicaragua</option>
                                <option value="NE">Niger</option>
                                <option value="NG">Nigeria</option>
                                <option value="NU">Niue</option>
                                <option value="NF">Norfolk Island</option>
                                <option value="KP">North Korea</option>
                                <option value="MK">North Macedonia</option>
                                <option value="MP">
                                  Northern Mariana Islands
                                </option>
                                <option value="NO">Norway</option>
                                <option value="OM">Oman</option>
                                <option value="PK">Pakistan</option>
                                <option value="PS">
                                  Palestinian Territory
                                </option>
                                <option value="PA">Panama</option>
                                <option value="PG">Papua New Guinea</option>
                                <option value="PY">Paraguay</option>
                                <option value="PE">Peru</option>
                                <option value="PH">Philippines</option>
                                <option value="PN">Pitcairn</option>
                                <option value="PL">Poland</option>
                                <option value="PT">Portugal</option>
                                <option value="PR">Puerto Rico</option>
                                <option value="QA">Qatar</option>
                                <option value="RE">Reunion</option>
                                <option value="RO">Romania</option>
                                <option value="RU">Russia</option>
                                <option value="RW">Rwanda</option>
                                <option value="ST">
                                  São Tomé and Príncipe
                                </option>
                                <option value="BL">Saint Barthélemy</option>
                                <option value="SH">Saint Helena</option>
                                <option value="KN">
                                  Saint Kitts and Nevis
                                </option>
                                <option value="LC">Saint Lucia</option>
                                <option value="SX">
                                  Saint Martin (Dutch part)
                                </option>
                                <option value="MF">
                                  Saint Martin (French part)
                                </option>
                                <option value="PM">
                                  Saint Pierre and Miquelon
                                </option>
                                <option value="VC">
                                  Saint Vincent and the Grenadines
                                </option>
                                <option value="WS">Samoa</option>
                                <option value="SM">San Marino</option>
                                <option value="SA">Saudi Arabia</option>
                                <option value="SN">Senegal</option>
                                <option value="RS">Serbia</option>
                                <option value="SC">Seychelles</option>
                                <option value="SL">Sierra Leone</option>
                                <option value="SG">Singapore</option>
                                <option value="SK">Slovakia</option>
                                <option value="SI">Slovenia</option>
                                <option value="SB">Solomon Islands</option>
                                <option value="SO">Somalia</option>
                                <option value="ZA">South Africa</option>
                                <option value="GS">
                                  South Georgia/Sandwich Islands
                                </option>
                                <option value="KR">South Korea</option>
                                <option value="SS">South Sudan</option>
                                <option value="ES">Spain</option>
                                <option value="LK">Sri Lanka</option>
                                <option value="SD">Sudan</option>
                                <option value="SR">Suriname</option>
                                <option value="SJ">
                                  Svalbard and Jan Mayen
                                </option>
                                <option value="SE">Sweden</option>
                                <option value="CH">Switzerland</option>
                                <option value="SY">Syria</option>
                                <option value="TW">Taiwan</option>
                                <option value="TJ">Tajikistan</option>
                                <option value="TZ">Tanzania</option>
                                <option value="TH">Thailand</option>
                                <option value="TL">Timor-Leste</option>
                                <option value="TG">Togo</option>
                                <option value="TK">Tokelau</option>
                                <option value="TO">Tonga</option>
                                <option value="TT">Trinidad and Tobago</option>
                                <option value="TN">Tunisia</option>
                                <option value="TR">Turkey</option>
                                <option value="TM">Turkmenistan</option>
                                <option value="TC">
                                  Turks and Caicos Islands
                                </option>
                                <option value="TV">Tuvalu</option>
                                <option value="UG">Uganda</option>
                                <option value="UA">Ukraine</option>
                                <option value="AE">United Arab Emirates</option>
                                <option value="GB">United Kingdom (UK)</option>
                                <option value="US">United States (US)</option>
                                <option value="UM">
                                  United States (US) Minor Outlying Islands
                                </option>
                                <option value="UY">Uruguay</option>
                                <option value="UZ">Uzbekistan</option>
                                <option value="VU">Vanuatu</option>
                                <option value="VA">Vatican</option>
                                <option value="VE">Venezuela</option>
                                <option value="VN">Vietnam</option>
                                <option value="VG">
                                  Virgin Islands (British)
                                </option>
                                <option value="VI">Virgin Islands (US)</option>
                                <option value="WF">Wallis and Futuna</option>
                                <option value="EH">Western Sahara</option>
                                <option value="YE">Yemen</option>
                                <option value="ZM">Zambia</option>
                                <option value="ZW">Zimbabwe</option>
                              </optgroup>{" "}
                            </select>
                          </div>
                          <div
                            id="dokan-states-box"
                            className="dokan-form-group"
                          >
                            <label
                              className="control-label"
                              htmlFor="dokan_address[state]"
                            >
                              State{" "}
                            </label>
                            <input
                              name="dokan_address[state]"
                              className="form-control form-control-lg "
                              id="dokan_address_state"
                              defaultValue=""
                              placeholder="State"
                            />
                          </div>
                        </div>
                      </div>
                      <p className="form-row form-group form-row-wide">
                        <label htmlFor="shop-phone">
                          Phone Number<span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          className="input-text form-control"
                          name="phone"
                          id="shop-phone"
                          defaultValue=""
                        />
                      </p>
                    </div>
                    <div className="woocommerce-privacy-policy-text" />
                    <div className="woocommerce-form-row form-row">
                      <input
                        type="hidden"
                        id="woocommerce-register-nonce"
                        name="woocommerce-register-nonce"
                        defaultValue="6ae27c10ec"
                      />
                      <input
                        type="hidden"
                        name="_wp_http_referer"
                        defaultValue="/signup/"
                      />
                      <button
                        type="submit"
                        className="btn btn-dark btn-lg w-100 btn-block"
                        name="register"
                        value="Register"
                      >
                        Register
                      </button>
                    </div>
                    <br />
                    <p className="mb-3 pb-lg-2">
                      Already Registered?
                      <a
                        className="text-black fw500"
                        href="https://dhartii.in/my-account"
                      >
                        Login here
                      </a>
                    </p>
                    <a
                      href="https://dhartii.in/terms-and-conditions/"
                      className="small text-muted me-2"
                    >
                      Terms of use
                    </a>
                    <a
                      href="https://dhartii.in/privacy-policy/"
                      className="small text-muted me-2"
                    >
                      Privacy policy
                    </a>
                  </form>
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

export default SignUp