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
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] z-10 opacity-90" />

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
              <div className="flex items-center justify-center">
                <div
                  onClick={() => setActiveVideoUrl(video.url)}
                  className="relative aspect-video w-full rounded-2xl overflow-hidden cursor-pointer group transition-transform duration-500 hover:scale-[1.07] hover:z-30"
                >
                  {/* Video */}
                  <iframe
                    className="w-full h-full pointer-events-none rounded-2xl"
                    src={`${video.url}?rel=0&hd=1`}
                    title={`EG GROUP ${video.title}`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>

                  {/* Viền nhẹ khi không hover */}
                  <div className="absolute inset-0 rounded-2xl border border-cyan-400/10 pointer-events-none transition-all duration-500 group-hover:border-cyan-300" />

                  {/* Glow công nghệ khi hover */}
                  <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_30px_#00fff055,0_0_60px_#00e0ff77]" />
                </div>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>

        {/* 🔹 Modal video khi click */}
        {activeVideoUrl && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center px-4 animate-fade-in">
            <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,255,255,0.3)] border-2 border-transparent bg-[#0f172a] group transition-all duration-500 scale-100 animate-scale-in">

              {/* Viền chuyển sắc công nghệ khi hover */}
              <div className="absolute inset-0 rounded-2xl z-10 pointer-events-none border-[3px] border-transparent group-hover:border-cyan-400 animate-border-glow" />

              <iframe
                className="w-full h-full rounded-2xl z-20 relative"
                src={`${activeVideoUrl}?autoplay=1&rel=0&hd=1`}
                title="EG GROUP Modal Video"
                frameBorder="0"
                allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              {/* Nút đóng */}
              <button
                className="absolute top-3 right-3 z-30 text-white bg-black/50 backdrop-blur-md hover:bg-black/80 hover:text-cyan-300 transition-colors p-2 rounded-full text-xl"
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