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
            <SwiperSlide key={i}>
  <div className="h-[320px] flex items-end">
    <div
      className="relative pt-16 pb-5 px-4 rounded-2xl flex flex-col items-center text-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white shadow-xl transition-all duration-500 hover:shadow-[0_0_25px_rgba(14,165,233,0.7)] hover:-translate-y-2"
      style={{
        border: '1px solid rgba(14,165,233,0.4)',
        minHeight: '250px',
        zIndex: 0,
      }}
    >
      {/* Avatar */}
      <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-10 w-[112px] h-[112px] rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 p-1">
        <Image
          height={200}
          width={200}
          src={user.image}
          alt={user.name}
          className="w-full h-full rounded-full object-cover border-4 border-gray-900 shadow-lg"
        />
      </div>

      {/* Quote */}
      <p className="text-sm italic leading-relaxed text-slate-300 relative mt-3 before:content-['“'] before:text-cyan-400 before:text-xl before:mr-1">
        {user.quote}
      </p>

      {/* Name */}
      <h4 className="text-cyan-400 font-semibold mt-auto">{user.name}</h4>
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