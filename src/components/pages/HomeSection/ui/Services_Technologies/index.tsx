import React from 'react'
import Image from 'next/image';
import { teamMoments } from '@/yummy_data';
const ServicesTechnologies = () => {
  return (
   <section
  className="relative w-full py-20 px-6 scroll-mt-18 overflow-hidden"
  id="teamwork"
>
  {/* 🔹 Video nền chạy phía sau */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0 brightness-[.4] "
  >
    <source src="/video/teanwork.mp4" type="video/mp4" />
  </video>

  {/* 🔹 Lớp phủ tối */}
<div className="absolute inset-0 bg-gradient-to-br  from-[#00040a] via-[#004d60]/40 to-[#172a45]/75 blur-[3px] z-0"></div>

  {/* 🔹 Nội dung chính */}
  <div className="relative z-20 max-w-6xl mx-auto text-center">
    <h2 className="text-[50px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFC6] via-[#00BFA5] to-[#0277BD] mb-6 drop-shadow-xl font-['Space_Grotesk'] tracking-tight">
      Team Work
    </h2>
    <p className="text-slate-300 max-w-xl mx-auto mb-12 text-lg leading-relaxed">
      Cùng nhau làm việc – cùng nhau phát triển. Đây là những khoảnh khắc ghi lại
      <span className="text-cyan-400 font-semibold"> tinh thần đồng đội</span>,
      <span className="text-teal-400 font-semibold"> sự sáng tạo</span> và
      <span className="text-orange-400 font-semibold"> gắn kết</span> của EG GROUP.
    </p>

    <div className="space-y-16">
      {teamMoments.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-8 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
          data-aos={item.dataaos}
        >
          {/* 🔹 Image Card */}
          <div className="w-full md:w-1/2 relative group">
            <div className="relative rounded-2xl overflow-hidden border border-cyan-400/30 shadow-[0_10px_50px_rgba(0,255,255,0.2)] group-hover:shadow-[0_15px_60px_rgba(0,255,255,0.5)] transition-all duration-700">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-80 object-cover rounded-2xl transition-transform duration-700 group-hover:scale-[1.05] brightness-95 contrast-125"
              />

              {/* 🔹 Neon pulse border glow */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-cyan-400/40 group-hover:animate-pulse-glow" />

              {/* 🔹 Scan light effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 animate-gradient-move" />

              {/* 🔹 Sparkle stars (fake light particles) */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-2xl z-10">
                <div className="absolute w-1 h-1 bg-white/40 rounded-full animate-twinkle delay-[400ms]" style={{ top: '20%', left: '40%' }} />
                <div className="absolute w-[2px] h-[2px] bg-cyan-300/50 rounded-full animate-twinkle delay-[1.2s]" style={{ top: '65%', left: '75%' }} />
                <div className="absolute w-[3px] h-[3px] bg-white/30 rounded-full animate-twinkle delay-[2s]" style={{ top: '45%', left: '15%' }} />
              </div>
            </div>
          </div>

          {/* 🔹 Content */}
          <div className="w-full md:w-1/2 text-left px-2">
            <h3 className="text-2xl font-bold text-cyan-400 mb-2 tracking-wide drop-shadow">
              {item.title}
            </h3>
            <p className="text-slate-300 leading-relaxed text-[17px]">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>


</section>






  )
}

export default ServicesTechnologies