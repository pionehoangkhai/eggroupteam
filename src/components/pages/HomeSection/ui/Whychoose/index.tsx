import React from 'react'
import Image from 'next/image';
import { WhyChoose } from '@/yummy_data'; // hoặc đường dẫn tuỳ theo folder bạn đặt
const Whychoose = () => {
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
    <h2 className="text-[50px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00BFA5] via-[#00ACC1] to-[#04759C] mb-6 drop-shadow font-['Space_Grotesk'] tracking-tight">
      Hành trình EG GROUP
    </h2>
    <p className="text-slate-300 max-w-2xl mx-auto mb-12 text-base md:text-lg leading-relaxed px-2">
      Video tổng quan về <span className="text-cyan-400 font-semibold">EG GROUP</span> – đội ngũ trẻ đầy nhiệt huyết, tiên phong trong việc phát triển <span className="text-[#00BFA5] font-semibold">giải pháp Blockchain Layer 1</span>. Cùng khám phá tinh thần sáng tạo, năng lượng tích cực và tầm nhìn công nghệ của chúng tôi qua từng thước phim ấn tượng.
    </p>

    {/* 🔹 Hiển thị video sắc nét với hiệu ứng glow */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Video 1 */}
      <div
        className="rounded-2xl overflow-hidden group relative shadow-[0_0_25px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] transition-transform duration-500 hover:scale-[1.03] aspect-video border border-cyan-400/20"
        data-aos="fade-up-right"
      >
        <iframe
          className="w-full h-full rounded-2xl"
          src="https://www.youtube.com/embed/kI2EybUjMhA?rel=0&hd=1"
          title="EG GROUP Video 1"
          frameBorder="0"
          allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        {/* Light glow layer */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none border border-cyan-400/30 group-hover:animate-pulse-glow" />
      </div>

      {/* Video 2 */}
      <div
        className="rounded-2xl overflow-hidden group relative shadow-[0_0_25px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] transition-transform duration-500 hover:scale-[1.03] aspect-video border border-cyan-400/20"
        data-aos="fade-up-left"
      >
        <iframe
          className="w-full h-full rounded-2xl"
          src="https://www.youtube.com/embed/EA7Ew4TmZXs?rel=0&hd=1"
          title="EG GROUP Video 2"
          frameBorder="0"
          allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        {/* Light glow layer */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none border border-cyan-400/30 group-hover:animate-pulse-glow" />
      </div>
    </div>
  </div>
</section>



  )
}

export default Whychoose