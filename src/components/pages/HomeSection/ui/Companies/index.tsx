'use client';
import Image from 'next/image';
import { Companies5 } from '@/yummy_data'; // hoặc đường dẫn tuỳ theo folder bạn đặt
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
const Companies = () => {
  return (
    <div>
      {/* Ecosystem section */}
      <h3 className="text-2xl md:text-3xl font-semibold text-[#0066b3] mb-2">
        Nền tảng công nghệ
      </h3>
      <p className="text-gray-500 mb-10">
       Bộ công nghệ mà team đang sử dụng để phát triển dự án Layer 1 
      </p>
      <Swiper
        loop={true}

        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Autoplay]}
        autoplay={{ delay: 3500 }}
        breakpoints={{
          0: { slidesPerView: 2 },       // Mobile: 1 card
          640: { slidesPerView: 5 },     // Desktop: 4 cards
        }}
        className="mySwiper "
        data-aos="zoom-out-up"
      // style={{ overflow: 'visible' }} // 👈 THÊM DÒNG NÀY
      >
        {/* Hàng đầu tiên 5 cột */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center justify-center max-w-7xl mx-auto">
          {Companies5.map((item, idx) => (
            <SwiperSlide
              key={idx}
            >
              <div

                className="bg-white rounded-xl px-4 py-3 shadow flex items-center justify-center"
              >
                <Image
                  height={200} width={200}
                  src={item.img}
                  alt={item.name}
                  className="h-10 sm:h-12 object-contain mb-2"
                />

              </div>
            </SwiperSlide>
          ))}
        </div>

        {/* Hàng thứ hai: 4 cột và canh giữa */}
        {/* <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 items-center justify-center max-w-5xl mx-auto mt-3.5">
          {Companies4.map((item, idx) => (
            <SwiperSlide
              key={idx}
            >
              <div

                className="bg-white rounded-xl px-4 py-3 shadow flex items-center justify-center"
              >
                <Image
                  height={100} width={100}
                  src={item.img}
                  alt={item.name}
                  className="h-10 sm:h-12 object-contain mb-2"
                />

              </div>
            </SwiperSlide>
          ))}
        </div> */}
      </Swiper>
    </div>

  )
}

export default Companies