import React from 'react'

function EditAccount() {
  return (
    <div className="woocommerce-MyAccount-content">
  <div className="woocommerce-notices-wrapper" />
  <form
                    method="post"
                    className="form-signin register"
                    data-gtm-form-interact-id={0}
                  >

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
                    <label className="form-label fw500 mb-1" htmlFor="displayName">
                    Display name *
                    </label>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="displayName"
                        id="displayName"
                        autoComplete="displayName"
                        defaultValue=""
                        placeholder="Enter Company Name"
                      />
                    </div>

                    <label className="form-label fw500 mb-1" htmlFor="email">
                    Email address *
                    </label>
                    <div className="form-group mb-3">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        name="email"
                        id="email"
                        autoComplete="phemailone"
                        defaultValue=""
                        placeholder="Enter Email address"
                      />
                    </div>
                    
                    <label className="form-label fw500 mb-1" htmlFor="Phone ">
                    User mobile number(will be use for OTP)  *
                    </label>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="phone"
                        id="phone"
                        autoComplete="phone"
                        defaultValue=""
                        placeholder="Enter phone..."
                      />
                    </div>

                    <h5>Password change</h5>

                     <label className="form-label fw500 mb-1" htmlFor="cPassword">
                          Current password (leave blank to leave unchanged)
                    </label>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="cPassword"
                        id="cPassword"
                        autoComplete="cPassword"
                        defaultValue=""
                      />
                    </div>

                    <label className="form-label fw500 mb-1" htmlFor="password">
                    New password (leave blank to leave unchanged)
                    </label>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="password"
                        id="password"
                        autoComplete="password"
                        defaultValue=""
                      />
                    </div>

                    <label className="form-label fw500 mb-1" htmlFor="cnPassword">
                    Confirm new password
                    </label>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="cnPassword"
                        id="cnPassword"
                        autoComplete="cnPassword"
                        defaultValue=""
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

export default EditAccount