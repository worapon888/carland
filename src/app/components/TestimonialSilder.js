"use client";
// import swiper reavt components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper style
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// icons
import { FaQuoteLeft } from "react-icons/fa";

// frammer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "/variants";

// Image
import Image from "next/image";

// data
const testimonialData = [
  {
    message:
      "They truly exceeded my expectations and made my car rental experience delight",
    avatar: "/images/testimonial/avatar.png",
    name: "Jane Doe",
    job: "Photographer & Videographer",
  },
  {
    message:
      "They truly exceeded my expectations and made my car rental experience delight",
    avatar: "/images/testimonial/avatar.png",
    name: "Jane Doe",
    job: "Photographer & Videographer",
  },
];

const TestimonialSilder = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.6 }}
    >
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="h-[450px] xl:h-[400px]"
      >
        {testimonialData.map((person, index) => {
          const { message, name, job, avatar } = person;
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-center items-center text-center">
                <FaQuoteLeft className="text-7xl text-accent mb-6" />
                <div className="text-2xl xl:text-4xl max-w-[874px] mb-12 font-medium ">
                  {message}
                </div>
                <Image src={avatar} width={64} height={64} alt="" />
                <div className="text-lg font-medium">{name}</div>
                <div className="text-secondary">{job}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};

export default TestimonialSilder;
