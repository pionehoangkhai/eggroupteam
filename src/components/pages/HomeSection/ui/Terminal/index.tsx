'use client';
//import React from 'react'
import Image from 'next/image';
import { AboutUs } from '@/yummy_data'; // hoặc đường dẫn tuỳ theo folder bạn đặt
import News from "../News";
import Companies from "../Companies";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import {  Autoplay } from 'swiper/modules';
const Terminal = () => {
  return (
    <section className="bg-gradient-to-br   px-4" id='about'>

      <div className="max-w-7xl mx-auto text-center  pb-10 ">
        <h2 className="text-[50px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00BFA5] via-[#00ACC1] to-[#04759C] mb-6 drop-shadow font-['Space_Grotesk'] tracking-tight">
          Member 
        </h2>
        {/* <p className="text-gray-600 max-w-3xl mx-auto text-base mb-10">
         Là thành viên trong nhóm tham gia và đóng góp tích cực vào quá trình phát triển dự án, đồng thời phối hợp cùng các thành viên khác để trình bày và hoàn thiện sản phẩm dự thi.


        </p> */}
        <Swiper
          loop={true}

          spaceBetween={20}
          pagination={{ clickable: true }}
          modules={[  Autoplay]}
          autoplay={{ delay: 3500 }}
          breakpoints={{
            0: { slidesPerView: 1 },       // Mobile: 1 card
            640: { slidesPerView: 4 },     // Desktop: 4 cards
          }}
          className="mySwiper "
          data-aos="fade-up"
        // style={{ overflow: 'visible' }} // 👈 THÊM DÒNG NÀY
        >

          {AboutUs.map((user, i) => (
            <SwiperSlide
              key={i}
            >

              <div className='h-[300px] flex items-end '>
                <div

                  className="relative bg-white pt-14 pb-4 px-3 rounded-2xl flex flex-col items-center text-center overflow-visible "
                  style={{
                    border: '1px solid oklch(0.5 0.15 250.62)',
                    minHeight: '230px',
                    zIndex: 0,
                  }}
                >
                  <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-10 w-[112px] h-[112px]">
                    <Image
                      height={200} width={200}
                      src={user.image}
                      alt={user.name}
                      className="w-29 h-29 rounded-full object-cover   shadow-md"
                    />
                  </div>

                  {/* {user.stars && (
                    <div className="flex gap-1 mt-2">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <svg
                          key={idx}
                          className="w-4 h-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.96a1 1 0 00.95.69h4.17c.969 0 1.371 1.24.588 1.81l-3.374 2.453a1 1 0 00-.364 1.118l1.287 3.96c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.374 2.453c-.784.57-1.838-.197-1.539-1.118l1.287-3.96a1 1 0 00-.364-1.118L2.636 9.387c-.783-.57-.38-1.81.588-1.81h4.17a1 1 0 00.95-.69l1.286-3.96z" />
                        </svg>
                      ))}
                    </div>
                  )} */}

                  <p className="text-sm text-gray-700 italic leading-relaxed relative before:content-['“'] before:text-orange-400 before:text-xl before:mr-1 mt-2 mb-1">
                    {user.quote}
                  </p>

                  <h4 className="text-orange-500 font-semibold mt-auto">{user.name}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>

      <div className="max-w-7xl mx-auto text-center">
        {/* news */}
        {/* <News /> */}
        {/* companies */}
        {/* <Companies /> */}
      </div>
    </section>
  )
}

export default Terminal