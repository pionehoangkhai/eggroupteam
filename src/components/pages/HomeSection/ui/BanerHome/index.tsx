import React from "react";


const BanerHome = () => {
  return (
   <section className="w-full h-screen relative overflow-hidden">
  {/* Video nền */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  >
    <source src="/video/video.mp4" type="video/mp4" />
  </video>

  {/* Overlay để làm nền chữ dễ đọc hơn */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-0" />

  {/* Nội dung nổi lên trên video */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 flex flex-col items-center justify-center h-full md:flex-row md:items-center md:justify-start">
    <div className="w-full md:max-w-[900px] text-center md:text-left space-y-4">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#00FFC6] via-[#00BFA5] to-[#0277BD] drop-shadow-[3px_3px_12px_rgba(0,0,0,0.9)]">
        EG Group — Blockchain Layer 1
      </h1>
      <p className="text-lg md:text-2xl font-medium text-white italic drop-shadow-[2px_2px_6px_rgba(0,0,0,0.8)] tracking-wide">
        Vươn Mình, Vững Bước
      </p>
    </div>

    {/* Cột trống bên phải để căn giữa desktop */}
    <div className="hidden md:block md:w-1/2" />
  </div>
</section>

  )
}

export default BanerHome