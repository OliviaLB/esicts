// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./Testimonial.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

const Testimonial = () => {
  return (
    <>
      <h2>What our clients have to say:</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          368: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: -50,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        autoplay={{ delay: 5000 }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="testi-item">
            <div className="testimonials-text">
              <div className="listing-rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <p>
                I had an appointment with Em as I had been recovering
                from a nasty fall. She was absolutely brilliant - she
                carried out a detailed assessment and provided great
                feedback and a program to help continue recovery. She
                also performed dry needling this was my first
                treatment of this kind and I can honestly say I felt
                almost instant improvements. I can definitely
                recommend!
              </p>

              <h3>Andrea P</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testi-item">
            <div className="testimonials-text">
              <div className="listing-rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <p>
                Personally, I think Em is fantastic. She carefully
                tailors a program unique to you and your
                capabilities/requirements. Prior to my consultation I
                was honestly considering leaving work because I
                couldn’t cope with the pain any longer and now thanks
                to her thorough treatment I’m no longer in constant
                pain for the first time in over a year.
              </p>

              <h3>Jenni P</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testi-item">
            <div className="testimonials-text">
              <div className="listing-rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>

              <h3>JD</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testi-item">
            <div className="testimonials-text">
              <div className="listing-rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>

              <h3>JD</h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Testimonial;
