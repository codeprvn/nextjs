import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
<footer className="site-footer">  
  <div className="footer-content py-5">
    <div className="container-xl">
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 col-6 footer-links mb-4 mb-sm-0">
          <h6 className="text-black fs17">Online Shopping</h6>
          <ul className="list-unstyled">
            <li
              id="menu-item-2387"
              className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2387 nav-item"
            >
              <Link
                href="product-category/women/western-wear/dresses"
                className="nav-link"
              >
                Dresses
              </Link>
            </li>
            <li
              id="menu-item-2386"
              className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2386 nav-item"
            >
              <Link
                href="product-category/women/western-wear/tops-t-shirts"
                className="nav-link"
              >
                Tops &amp; T-shirts
              </Link>
            </li>
            <li
              id="menu-item-2388"
              className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2388 nav-item"
            >
              <Link
                href="product-category/women/western-wear/pants-western-wear"
                className="nav-link"
              >
                Pants
              </Link>
            </li>
            <li
              id="menu-item-2389"
              className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2389 nav-item"
            >
              <Link
                href="product-category/women/western-wear/swim-wear-western-wear"
                className="nav-link"
              >
                Swim Wear
              </Link>
            </li>
            <li
              id="menu-item-2390"
              className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2390 nav-item"
            >
              <Link
                href="product-category/men/western/shirts"
                className="nav-link"
              >
                Shirts
              </Link>
            </li>
            <li
              id="menu-item-2391"
              className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2391 nav-item"
            >
              <Link
                href="product-category/women/ethnic-wear/kurtas-kurtas-set-ethnic-wear"
                className="nav-link"
              >
                Kurtas &amp; Kurtas Set
              </Link>
            </li>
          </ul>
          <h6 className="text-black fs17" style={{ marginTop: 15 }}>
            Useful Links
          </h6>
          <ul className="list-unstyled">
            <li>
              <Link href="careers">Careers</Link>
            </li>
            <li>
              <Link href="sitemap_index.xml">Site Map</Link>
            </li>
            <li>
              <Link href="about-us">About Us</Link>
            </li>
            <li>
              <Link href="media-coverages">Media Coverages</Link>
            </li>
          </ul>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 col-12 footer-links mb-4 mb-sm-0">
          <h6 className="text-black fs17">Customer Policies</h6>
          <ul className="list-unstyled">
            <li>
              <Link href="contact-us">Contact Us</Link>
            </li>
            <li>
              <Link href="faqs">FAQs</Link>
            </li>
            <li>
              <Link href="terms-and-conditions">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link href="shipping-policy">Shipping</Link>
            </li>
            <li>
              <Link href="return-refund-and-replacement-policy">
                Returns &amp; Cancellation
              </Link>
            </li>
            <li>
              <Link href="privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-12 footer-links mb-4 mb-sm-0">
          <div className="footer-social">
            <h6 className="text-black fs17">Keep In Touch</h6>
            <ul className="list-unstyled list-inline pt-1">
              <li className="list-inline-item cust_f_i">
                <Link href="mailto:info@dhartii.in" target="_blank">
                <FontAwesomeIcon icon={faEnvelope} />
                </Link>
              </li>
              <li className="list-inline-item cust_f_i">
                <Link
                  href="https://www.linkedin.com/company/dhartii-in/"
                  target="_blank"
                >
                 <FontAwesomeIcon icon={faLinkedinIn} />
                </Link>
              </li>
              <li className="list-inline-item cust_f_i">
                <Link
                  href="https://www.facebook.com/profile.php?id=100094476648211"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </Link>
              </li>
              <li className="list-inline-item cust_f_i">
                <Link
                  href="https://www.instagram.com/dhartii.in?igsh=OWVhczUwN3ZncDc="
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 col-12 position-relative">
          <div className="custom-logo-upper-txt">
            <p>
              Incase Of Any Queries
              <br />
              Contact Us @
              <b>
                <Link href="tel:+919599244464">+91 9599 244 464</Link>
              </b>
            </p>
            {/* <p><b>100% ORIGINAL</b> guarantee for all products at dhartii.in</p> */}
          </div>
          <div className="newsletter-block">
            <Link
              className="footer-logo position-absolute bottom-0 end-0"
              href="index.html"
            >
              <img
                className="img-fluid mx-auto d-block"
                src="https://dhartii.in/wp-content/uploads/2023/05/logo.png"
                alt=""
              />
            </Link>
           
          </div>
        </div>
      </div>
      <div className="footer-usps pt-4">
        <div className="container-xl">
          <div className="row">
            <div className="col-12 p-0 mb-4">
              <h6 className="text-black fs17 footer-botm-h6">
                POPULAR SEARCHES
              </h6>
              <ul className="list-unstyled-inline-slash">
                <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2387 nav-item">
                  <Link
                    href="product-category/women/western-wear/dresses"
                    className="nav-link"
                  >
                    Dresses
                  </Link>
                </li>
                <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2386 nav-item">
                  <Link
                    href="product-category/women/western-wear/tops-t-shirts"
                    className="nav-link"
                  >
                    Tops &amp; T-shirts
                  </Link>
                </li>
                <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2388 nav-item">
                  <Link
                    href="product-category/women/western-wear/pants-western-wear"
                    className="nav-link"
                  >
                    Pants
                  </Link>
                </li>
                <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2389 nav-item">
                  <Link
                    href="product-category/women/western-wear/swim-wear-western-wear"
                    className="nav-link"
                  >
                    Swim Wear
                  </Link>
                </li>
                <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2390 nav-item">
                  <Link
                    href="product-category/men/western/shirts"
                    className="nav-link"
                  >
                    Shirts
                  </Link>
                </li>
                <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2391 nav-item">
                  <Link
                    href="product-category/women/ethnic-wear/kurtas-kurtas-set-ethnic-wear"
                    className="nav-link"
                  >
                    Kurtas &amp; Kurtas Set
                  </Link>
                </li>
              </ul>{" "}
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-12 text-center">
              <p>@ 2024 www.dhartii.in All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
  
</footer>
  )
}

export default Footer