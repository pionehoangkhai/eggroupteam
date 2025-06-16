'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Technology } from '@/yummy_data'; // hoặc đường dẫn tuỳ theo folder bạn đặt
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
const News = () => {
  return (
    <div className='pb-14'>
      {/* Tiêu đề chính */}
      <h2 className="text-3xl md:text-4xl font-semibold text-[#0066b3] mb-2">
        Cutting-Edge Tech Trends
      </h2>
      <p className="text-gray-500 mb-12">Latest technology trend news</p>
      <Swiper
        loop={true}

        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Autoplay]}
        autoplay={{ delay: 3500 }}
        breakpoints={{
          0: { slidesPerView: 1 },       // Mobile: 1 card
          640: { slidesPerView: 3 },     // Desktop: 4 cards
        }}
        className="mySwiper "
        data-aos="zoom-out-up"
      // style={{ overflow: 'visible' }} // 👈 THÊM DÒNG NÀY
      >
        {/* Các card bài viết */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {Technology.map((item, index) => (
            <SwiperSlide
              key={index}
            >
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col"
              >
                <Image
                  height={500} width={500}
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-semibold text-md text-[#123054] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 flex-grow">{item.desc}</p>
                  <Link
                    href="#"
                    className="mt-4 text-orange-500 font-semibold text-sm inline-flex items-center"
                  >
                    Learn more
                    <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

    </div>
  )
}

export default News