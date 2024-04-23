'use client'
import React from 'react'
import ImageGallery from "react-image-gallery";
// import "react-image-gallery/styles/css/image-gallery.css";
import "./image-gallery.css"

function SingleProduct() {

  const images = [
    {
      original: "https://dhartii.in/wp-content/uploads/2024/03/4-31.jpg",
      thumbnail: "https://dhartii.in/wp-content/uploads/2024/03/4-31.jpg",
      // originalHeight:500
    },
    {
      original: "https://dhartii.in/wp-content/uploads/2024/03/3-31-100x100.jpg",
      thumbnail: "https://dhartii.in/wp-content/uploads/2024/03/3-31-100x100.jpg",
      // originalHeight:500
    },
    {
      original: "https://picsum.photos/id/10/300/150",
      thumbnail: "https://picsum.photos/id/10/300/150",
      // originalHeight:500
    },
    // {
    //   original: "https://picsum.photos/id/100/300/150",
    //   thumbnail: "https://picsum.photos/id/100/300/150",
    //   // originalHeight:500
    // },
    // {
    //   original: "https://picsum.photos/id/101/300/150",
    //   thumbnail: "https://picsum.photos/id/101/300/150",
    //   // originalHeight:500
    // },
    // {
    //   original: "https://picsum.photos/id/1000/300/150",
    //   thumbnail: "https://picsum.photos/id/1000/300/150",
    //   // originalHeight:500
    // },
    // {
    //   original: "https://picsum.photos/id/1001/300/150",
    //   thumbnail: "https://picsum.photos/id/1001/300/150",
    //   // originalHeight:500
    // }
  ];
  return (
      <ImageGallery
        items={images}
        showBullets={false}
        autoPlay={true}
        showIndex={false}
        showThumbnails={true}
        lazyLoad={false}
        showPlayButton={false}
        showNav={true}
        showFullscreenButton={false}
        thumbnailPosition={"left"}
      />
  )
}

export default SingleProduct