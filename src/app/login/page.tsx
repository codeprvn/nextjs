import React from 'react'

function Login() {
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
                    decoding="async"
                    src="https://dhartii.in/wp-content/themes/dhaarti/images/8F8A0852-min.jpg"
                    alt="login form"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form className="form-signin" method="post">
                      <h5 className="fw-normal mb-2 pb-3 lh1">
                        Sign into your Account
                      </h5>
                      <div className="form-outline mb-3">
                        <label className="form-label fw500 mb-1" htmlFor="email">
                          Email Address/Username
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          name="username"
                          id="username"
                          autoComplete="username"
                          defaultValue=""
                          placeholder="Enter Email/Username*"
                        />
                      </div>
                      <div className="form-outline mb-3">
                        <label
                          className="form-label fw500 mb-1"
                          htmlFor="password"
                        >
                          Password
                        </label>
                        <input
                          className="form-control form-control-lg"
                          type="password"
                          name="password"
                          id="password"
                          autoComplete="current-password"
                          placeholder="Enter Password*"
                        />
                      </div>
                      <div className="checkbox mb-2">
                        <label>
                          <input
                            className="woocommerce-form__input woocommerce-form__input-checkbox form-check-input"
                            name="rememberme"
                            type="checkbox"
                            id="rememberme"
                            defaultValue="forever"
                          />{" "}
                          Remember me{" "}
                        </label>
                      </div>
                      <div className="formbtn-group h5">
                        <input
                          type="hidden"
                          id="woocommerce-login-nonce"
                          name="woocommerce-login-nonce"
                          defaultValue="7cef828927"
                        />
                        <input
                          type="hidden"
                          name="_wp_http_referer"
                          defaultValue="/my-account/"
                        />{" "}
                        <button
                          type="submit"
                          className="btn btn-dark btn-lg w-100 btn-block"
                          name="login"
                          value="LOGIN"
                        >
                          LOGIN
                        </button>
                      </div>
                      <div className="formbtn-group h5">
                        <button
                          type="button"
                          className="btn btn-dark btn-lg w-100 btn-block"
                          id="login-with-otp"
                        >
                          Login With OTP
                        </button>
                      </div>
                      <a
                        className="fs14 text-muted"
                        href="https://dhartii.in/my-account/lost-password/"
                      >
                        Forgot password?
                      </a>
                      <p className="mb-3 pb-lg-2">
                        Don't have an account?
                        <a
                          className="text-black fw500"
                          href="https://dhartii.in/signup"
                        >
                          Create Account
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

export default Login