import React from "react";
// import CoverFlow from "coverflow-react";
import Swiper from "react-id-swiper";
import img1 from "../../images/imgGallery1.png";
import img2 from "../../images/imgGallery2.png";

function Info() {
  const images = [img1, img2, img1, img2, img1, img2, img1, img2];
  const params = {
    breakpoints: {
      320: {
        slidesPerView: 3,
        // spaceBetween: 20,
      },
      600: {
        slidesPerView: 5,
        // spaceBetween: 20,
      },
    },
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    slidesPerView: "5",
    preventClicks: false,
    navigation: true,
    // noSwiping: true,
    activeSlideKey: "2",
    coverflowEffect: {
      rotate: 15,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      dynamicBullets: true,
      clickable: true,
    },
  };

  return (
    <section className="info">
      <div className="container">
        <h1 className="desc-head pt-5">
          Thank You For Visiting Planet <span>Panda</span>
        </h1>
        <p className="info-text pt-3">
          Planet Panda is a newly discovered planet filled with Pandas of all
          shapes and sizes. It is a unique generative NFT Collection where no
          Panda is the same! Solidify your role in the Panda metaverse today.
          With over <span> 50 </span>different properties, the possibilities of
          your Panda is endless!
        </p>
        <p className="info-price">
          PRICE = <span>1 SOL EACH </span>
        </p>
      </div>
      <div className="mt-4">
        <Swiper {...params}>
          {images.map((img, i) => (
            <div
              key={i}
              className="slide-image"
              style={{
                backgroundImage: `url(${img})`,
                // height: "300px",
                // width: "300px",
                // borderRadius: "1rem",
              }}
            />
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Info;
