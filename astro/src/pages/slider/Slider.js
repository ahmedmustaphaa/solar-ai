import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.css";

const teamMembers = [
  {
    name: "ahmed MUstapha",
    role: "FullStack Developer",
    img: require('../../assests/ahmed.jpg'),
  },
  {
    name: "Amen Amr",
    role: "Backend developer",
    img:  require('../../assests/ahmed2.jpg'),
  },
  {
    name: "abod Reda",
    role: "Graphic Designer",
    img:  require('../../assests/ahmed3.jpg'),
  },
  {
    name: "Ahmed Omara",
    role: "UI/UX Designer",
    img: require('../../assests/ahmed4.jpg'),
  },
];

function Slider() {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
        }}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <img src={member.img} alt={member.name} className="profile-img" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <button className="message-btn">Message</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
