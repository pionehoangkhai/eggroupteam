
"use client";
import React from 'react'
import Typewriter from 'typewriter-effect';
const AboutSection = () => {
  return (
    <>
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('https://via.placeholder.com/1200x800')" }}
      >
        {/* Overlay: Dotted background */}
        <div className="absolute inset-0  pointer-events-none bg-[size:20px_20px]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3e%3ccircle fill='%23d4d4d4' id='pattern-circle' cx='10' cy='10' r='2.5'%3e%3c/circle%3e%3c/svg%3e")`
          }}
        ></div>
        {/* Nội dung chữ trên banner */}
        <div className="relative z-10 flex flex-col justify-center h-full pl-[15%] pr-8 text-[#2f2b3de0]" data-aos="fade-up">
          <h2 className="font-normal  mb-12 text-lg">
            Giải pháp tiên phong, vươn tới công nghệ
          </h2>
          <h1 className=" text-3xl md:text-5xl font-bold mb-4 " >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('CÔNG NGHỆ VÀ GIẢI PHÁP')
                  .pauseFor(1000)
                  .callFunction(() => {
                    typewriter.stop(); // ngăn xóa
                  })
                  .start();
              }}
              options={{
                autoStart: true,
                loop: false,
                delay: 100,
                cursor: '_',
              }}
            />

          </h1>
          <p className=" font-normal md:text-lg max-w-2xl leading-relaxed">
            Tích hợp IoT và AI vào cuộc sống thực: Tiên phong trong ứng dụng Internet vạn vật (IoT) và trí tuệ nhân tạo
          </p>
          <p className="font-normal md:text-lg max-w-2xl leading-relaxed">
            Phát triển các ứng dụng đa nền tảng: Dẫn đầu trong việc tạo ra công nghệ tích hợp liền mạch trên các nền tảng di động, web và máy tính để bàn, đáp ứng nhu cầu đa dạng của người dùng.
          </p>
          <p className="font-normal md:text-lg max-w-2xl leading-relaxed mb-6">
            Giải pháp chuỗi khối tiên tiến: Đổi mới với công nghệ chuỗi khối tiên tiến, mở rộng các ứng dụng trong bất động sản, nông nghiệp và hơn thế nữa, đảm bảo tính minh bạch và bảo mật ở vị trí hàng đầu.
          </p>
          <button className="
          inline-flex
    h-10
    items-center
    justify-center
    rounded-full
      bg-[linear-gradient(110deg,#F57F20,45%,#ffff,55%,#F57F20)] 
    bg-[length:200%_100%]
     animate-shimmer-right
    px-6
    text-white
    font-bold
    transition-colors
    focus:outline-none
    focus:ring-2
    focus:ring-slate-400
    focus:ring-offset-2
    focus:ring-offset-slate-50
    w-fit
        " >
            LIÊN HỆ VỚI CHÚNG TÔI
          </button>
        </div>
      </section>

      <section className="relative w-full min-h-screen bg-black text-white overflow-hidden flex items-center justify-center">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/img/our_people.png')" }}
        ></div>
        <div className=" inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-screen-xl w-full px-4 flex flex-col items-center justify-center -translate-y-10">
          {/* Headline */}
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold mb-2">Con người của chúng tôi</h2>
            <p className="text-lg max-w-2xl mx-auto mb-4">
              Pione Group - nơi những cá nhân xuất sắc chung tay tạo nên hệ sinh thái blockchain cho mọi lĩnh vực của cuộc sống.
            </p>
            <button className="
          inline-flex
    h-10
    items-center
    justify-center
    rounded-full
      bg-[linear-gradient(110deg,#F57F20,45%,#ffff,55%,#F57F20)] 
    bg-[length:200%_100%]
     animate-shimmer-right
    px-6
    text-white
    font-bold
    transition-colors
    focus:outline-none
    focus:ring-2
    focus:ring-slate-400
    focus:ring-offset-2
    focus:ring-offset-slate-50
    w-fit
         mb-6" >
              NHÓM CỦA CHÚNG TÔI
            </button>
          </div>

          {/* Main content */}
          <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8">
            {/* Left Stats */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col items-center mb-12">
                <span className="text-4xl font-medium text-orange-500">15 +</span>
                <span className="text-lg text-center">Hệ sinh thái blockchain</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-medium text-cyan-400">2,000 +</span>
                <span className="text-lg text-center">
                  Ý tưởng sáng tạo <br /> hàng năm
                </span>
              </div>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 w-300 h-300 md:w-100 md:h-100 mx-24">
              <img
                src="/img/logo_3.png"
                alt="Logo"
                className="object-contain mx-auto"
              />
            </div>

            {/* Right Stats */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col items-center mb-12">
                <span className="text-4xl font-medium text-blue-400">99.9 %</span>
                <span className="text-lg text-center">Sự hài lòng của khách hàng</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-medium text-green-400">20 +</span>
                <span className="text-lg text-center">Tổng số nhân viên</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>

  )
}

export default AboutSection