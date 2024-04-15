
function ShippingAdd() {
  return (
    <div className="woocommerce-MyAccount-content">
  <div className="woocommerce-notices-wrapper" />
  <form
                    method="post"
                    className="form-signin register"
                    data-gtm-form-interact-id={0}
                  >
                    <h5 className="fw-normal mb-2 pb-3 lh1">
                    Shipping address
                    </h5>
                    <div className="row">
                        <div className="col-6">
                    <label className="form-label fw500 mb-1" htmlFor="firstName">
                    First name *
                    </label>
                    <div className="form-outline mb-3">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="firstName"
                        id="firstName"
                        defaultValue=""
                        placeholder="Enter First Name"
                      />
                    </div></div>
                    <div className="col-6">
                    <label className="form-label fw500 mb-1" htmlFor="lastName">
                    Last name *
                    </label>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="lastName"
                        id="lastName"
                        autoComplete="lastName"
                        defaultValue=""
                        placeholder="Enter Last Name"
                      />
                    </div></div>
                    </div>
                    <label className="form-label fw500 mb-1" htmlFor="companyName">
                    Company name (optional)
                    </label>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="companyName"
                        id="companyName"
                        autoComplete="companyName"
                        defaultValue=""
                        placeholder="Enter Company Name"
                      />
                    </div>

                    <div className="form-group mb-3">
                            <label
                              className="control-label"
                              htmlFor="country"
                            >
                              Country <span className="required"> *</span>
                            </label>
                            <select
                              name="country"
                              className="form-control form-control-lg"
                              id="country"
                            >
                              <option value="">- Select a country / region…-</option>
                              <optgroup label="------------------------------">
                                <option value="AF">Afghanistan</option>
                                <option value="AX">Åland Islands</option>
                                <option value="AL">Albania</option>
                                <option value="DZ">Algeria</option>
                              </optgroup>{" "}
                            </select>
                          </div>                
                    
                    
                          <label className="form-label fw500 mb-1" htmlFor="streetAddress">
                          Street address *
                    </label>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="streetAddress"
                        id="streetAddress"
                        autoComplete="streetAddress"
                        defaultValue=""
                        placeholder="House number and street name"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="streetAddress1"
                        id="streetAddress1"
                        autoComplete="streetAddress1"
                        defaultValue=""
                        placeholder="Apartment, suite, unit, etc. (optional)"
                      />
                    </div>
                      
                    <label className="form-label fw500 mb-1" htmlFor="townCity ">
                    Town / City *
                    </label>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="townCity"
                        id="townCity"
                        autoComplete="townCity"
                        defaultValue=""
                        placeholder="Enter User Town / City"
                      />
                    </div>

                    <div className="form-group mb-3">
                            <label
                              className="control-label"
                              htmlFor="StateCounty"
                            >
                              State / County *
                            </label>
                            <select
                              name="StateCounty"
                              className="form-control form-control-lg"
                              id="StateCounty"
                            >
                              <option value="">- Select a location -</option>
                              <optgroup label="------------------------------">
                                <option value="AF">Afghanistan</option>
                                <option value="AX">Åland Islands</option>
                                <option value="AL">Albania</option>
                                <option value="DZ">Algeria</option>
                              </optgroup>{" "}
                            </select>
                          </div>                
                    
                          <label className="form-label fw500 mb-1" htmlFor="postcodeZIP">
                          Postcode / ZIP *
                    </label>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="postcodeZIP"
                        id="postcodeZIP"
                        autoComplete="postcodeZIP"
                        defaultValue=""
                        placeholder="Enter User Postcode/ZIP"
                      />
                    </div> 
                    <div className="">
                    
                      <button
                        type="submit"
                        className="btn btn-dark btn-lg  btn-block"
                        name="register"
                        value="Register"
                      >
                        Save Address
                      </button>
                    </div>
                    
                  </form>
</div>

  )
}

export default ShippingAdd