import CarouselComponent from "./component/CarouselComponent";
import FacilityComponet from "./component/home_page/FacilityComponet";
import MarqueeMiddle from "./component/home_page/MarqueeMiddle";
import SustainableFashionComponent from "./component/home_page/SustainableFashionComponent";
import SwipWrapperComponent from "./component/home_page/SwipWrapperComponent";
import Swipable from "./component/home_page/Swipable";
import ProductSuggestion from "./component/productComponent/ProductSuggestion";
import FilterComponent from "./component/products/FilterComponent";
import ProductDescription from "./component/products/ProductDescription";
import ProductPage from "./component/products/ProductPage";
import SingleProduct from "./component/products/SingleProduct";
import TitleAndShort from "./component/products/TitleAndShort";

export default function Home() {
  return (
    // <Navbar/>
    <>
    <CarouselComponent />
    <MarqueeMiddle />
    <Swipable />
    <section className="mt-4">
  <div className="container custom_img_size">
    <div className="section-heading-home section-heading text-center">
      <h3 className="mb-4">Conscious Fashion Finds</h3>
    <SwipWrapperComponent />
    <SwipWrapperComponent />
    <SwipWrapperComponent />
    <SwipWrapperComponent />
    </div>
  </div>
</section>
<section
  className="category-section py-0 wedding-season"
  style={{ backgroundColor: "#F6F6F6" }}
>
  <div className="container py-4 cust_full_mid_text">
    <div className="row px-1">
      <div className="home_about_us_lines">
        <p className="text-center mb-0">
          We are committed to redefining fashion by curating a collection of
          eco-friendly and ethically produced clothing. We believe in style that
          doesn't compromise our planet, offering a platform where conscious
          consumers connect with sustainable brands for a more mindful wardrobe.
        </p>
      </div>
    </div>
  </div>
</section>

{/* banner component */}
<section className="mt-3 ">
  <div className="container custom_img_size" style={{}}>
    <div className="row">
      <a href="https://dhartii.in/product-category/women/?pwb-brand-filter=sooti-syahi">
        <img
          className="w-100 transition mx-auto img-fluid d-block"
          src="https://dhartii.in/wp-content/uploads/2024/04/1_Sooti-Syahi_11.png"
        />
      </a>
    </div>
  </div>
</section>


    <SustainableFashionComponent />  
    <FacilityComponet />
    {/* <div className="row mt-5 mx-2">
      <div className="col-8"><TitleAndShort /><ProductPage />
    </div>
    </div>
    <div className="row">
    <SingleProduct />
    <ProductDescription />
    </div>
    <ProductSuggestion /> */}
    
   </>
    
  );
}
