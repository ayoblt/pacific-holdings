"use client";
import Image from "next/image";
// components/SwiperCarousel.js
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { OlorunsogoImageData } from "@/data/olorunsogo";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const ImageSlider = () => {
  return (
    <div className="flex flex-col gap-5 items-center py-10 md:py-20 bg-green-200 mt-10">
      <h2 className="text-xl sm:text-2xl md:text-3xl capitalize font-medium">
        Olorunsogo Power Plant
      </h2>
      <Swiper
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-3/4 md:w-1/2 flex"
      >
        {OlorunsogoImageData.map((item) => (
          <SwiperSlide key={item.title}>
            <Image
              src={item.url}
              width={640}
              height={400}
              alt={item.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
          <Image
            src="/images/olorunsogo/olorunsogo-2.jpg"
            width={640}
            height={400}
            alt="Image 2"
            className="w-fit h-full object-cover"
          />
        </SwiperSlide> */}
        {/* Add more slides as needed */}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
