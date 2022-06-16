import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import { sliderItems } from "services/sliderItems";
import "assets/styles/slider.scss";
const Slider = () => {
  return (
    <div className="slider">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2100,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
        style={{ borderRadius: "5px" }}
      >
        {sliderItems.map((item, index) => (
          <SwiperSlide style={{ borderRadius: "5px" }} key={index}>
            <img
              style={{ width: "100%", borderRadius: "5px" }}
              src={item.img}
              alt=""
            />
            <div className="slider-title">
              <h2>Lorem ipsum dolor sit amet</h2>
              <p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
