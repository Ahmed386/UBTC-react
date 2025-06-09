import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper's default styles
import "swiper/css/navigation"; // Optional: if you need navigation buttons
import "swiper/css/pagination"; // Optional: if you need pagination dots

const MyCarousel = ({ selectedProject }) => {
  return (
    <Swiper
      spaceBetween={70} // Space between slides
      slidesPerView={3} // Only one slide visible at a time (you can change this)
      loop={true} // Loop slides
      autoplay={{
        delay: 1000, // Delay between slides (replaces interval)
        disableOnInteraction: false, // Keep autoplaying even after interaction
      }}
    >
      {selectedProject.images.map((img, index) => (
        <SwiperSlide key={index}>
          <img src={img} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MyCarousel;
