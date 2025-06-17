'use client';
import React from 'react'
import Image from 'next/image';
import { video } from '@/yummy_data'; // hoặc đường dẫn tuỳ theo folder bạn đặt
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useState } from 'react';
const Whychoose = () => {
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  return (
    <section
      className="relative w-full py-20 px-4 md:px-6 overflow-hidden bg-[#0f172a]"
      id="videos"
    >
      {/* 🔹 Video nền công nghệ chạy phía sau */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
      >
        <source src="/video/video2.mp4" type="video/mp4" />
      </video>

      {/* 🔹 Lớp phủ gradient tối giúp dễ nhìn chữ */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e293b] via-[#334155] to-[#1e293b] z-10 opacity-70" />

      {/* 🔹 Nội dung chính */}
      <div className="relative z-20 max-w-6xl mx-auto text-center">
        <h2 className="text-[50px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFC6] via-[#00BFA5] to-[#0277BD] mb-6 drop-shadow font-['Space_Grotesk'] tracking-tight">
          Hành trình EG GROUP
        </h2>
        <p className="text-slate-300 max-w-2xl mx-auto mb-12 text-base md:text-lg leading-relaxed px-2">
          Video tổng quan về <span className="text-cyan-400 font-semibold">EG GROUP</span> – đội ngũ trẻ đầy nhiệt huyết, tiên phong trong việc phát triển <span className="text-[#00BFA5] font-semibold">giải pháp Blockchain Layer 1</span>. Cùng khám phá tinh thần sáng tạo, năng lượng tích cực và tầm nhìn công nghệ của chúng tôi qua từng thước phim ấn tượng.
        </p>

        {/* 🔹 Hiển thị video sắc nét với hiệu ứng glow */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          className="!px-2"
        >
          {video.map((video) => (
            <SwiperSlide key={video.id}>
              <div className="flex items-center justify-center" data-aos="zoom-out-down">
                <div
                  onClick={() => setActiveVideoUrl(video.url)}
                  className="relative aspect-video w-full cursor-pointer group rounded-2xl p-[3px] bg-gradient-to-r from-[#00FFC6] via-[#00BFA5] to-[#0277BD] transition-all duration-500"
                >
                  {/* Lớp nền bên trong khung viền */}
                  <div className="w-full h-full rounded-[14px] bg-[#0f172a] relative overflow-hidden">

                    {/* Video zoom khi hover */}
                    <iframe
                      className="w-full h-full rounded-[14px] pointer-events-none relative z-10 transition-transform duration-500 group-hover:scale-[1.03]"
                      src={`${video.url}?rel=0&hd=1`}
                      title={`EG GROUP ${video.title}`}
                      frameBorder="0"
                      allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>

                    {/* Glow chính giữa khi hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                      <div className="w-[60%] h-[60%] rounded-full bg-cyan-300/10 blur-2xl shadow-[0_0_60px_40px_#00fff055]" />
                    </div>
                  </div>
                </div>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>

        {/* 🔹 Modal video khi click */}
        {activeVideoUrl && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center px-4 animate-fade-in">
            <div className="relative w-full max-w-5xl aspect-video rounded-3xl p-[3px] bg-gradient-to-r from-[#00FFC6] via-[#00BFA5] to-[#0277BD] shadow-[0_0_100px_#00FFF055] transition-all duration-500 group animate-scale-in">

              {/* Lớp nền bên trong */}
              <div className="w-full h-full rounded-[20px] bg-[#0f172a] relative overflow-hidden">

                {/* Video với glow và scale nhẹ khi hover */}
                <iframe
                  className="w-full h-full rounded-[20px] relative z-10 transition-transform duration-500 group-hover:scale-[1.015] shadow-[0_0_60px_#00fff066]"
                  src={`${activeVideoUrl}?autoplay=1&rel=0&hd=1`}
                  title="EG GROUP Modal Video"
                  frameBorder="0"
                  allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

                {/* Glow trung tâm khi hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-[50%] h-[50%] rounded-full bg-cyan-300/10 blur-2xl shadow-[0_0_60px_40px_#00fff055]" />
                </div>
              </div>

              {/* Nút đóng cải tiến */}
              <button
                className="absolute top-4 right-4 z-30 text-white bg-[#0f172a]/80 backdrop-blur-md p-2 rounded-full text-2xl shadow-md border border-white/10 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_20px_#00fff055] transition-all duration-300"
                onClick={() => setActiveVideoUrl(null)}
                aria-label="Đóng"
              >
                ×
              </button>
            </div>
          </div>
        )}

      </div>
    </section>



  )
}

export default Whychoose