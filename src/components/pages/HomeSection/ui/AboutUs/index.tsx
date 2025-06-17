import React from 'react'
import Image from 'next/image';
import { Services } from '@/yummy_data'; // hoặc đường dẫn tuỳ theo folder bạn đặt

import Terminal from "../Terminal";
const AboutUs = () => {
  return (
    <section
      id="about"
      className="w-full bg-cover bg-center bg-no-repeat px-6 py-12 relative overflow-hidden "

    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video/about.mp4" type="video/mp4" />

      </video>

      {/* Overlay màu xanh đậm pha tối giúp nổi nội dung */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#09111d]/95 via-[#0a3d62]/90 to-[#00eaff]/75 z-0"></div>




      {/* Nội dung chính */}
      <div className="relative z-10 w-full h-full py-13 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 mb-16">
          {/* Image */}
          <div className="md:w-1/2 flex justify-center" data-aos="zoom-in-down">
            <div className="relative group rounded-2xl">
              <Image
                height={500}
                width={500}
                src="/img/banner1.jpg" // 👉 Bạn nên thay bằng ảnh công nghệ ở đây
                alt="About us illustration"
                className="w-full h-auto rounded-2xl object-cover shadow-lg border-2 border-cyan-500 group-hover:scale-105 group-hover:rotate-[1.5deg] transition-transform duration-500"
              />

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-cyan-400 blur-sm opacity-40 group-hover:opacity-80 transition duration-500"></div>
            </div>
          </div>


          {/* Text content */}
          <div className="md:w-1/2 text-slate-100" data-aos="zoom-in-down">
            <h2 className="text-[42px] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#00FFC6] via-[#00BFA5] to-[#0277BD] mb-6 drop-shadow-lg font-['Space_Grotesk'] tracking-tight">
              Giới thiệu về chúng tôi
            </h2>


            <p className="text-slate-300 text-base mb-4 leading-relaxed text-justify">
              <span className="text-cyan-400 font-medium">EG GROUP</span> là một tập thể tiên phong trong lĩnh vực phát triển phần mềm, quy tụ những con người đam mê sáng tạo, đổi mới và không ngừng học hỏi. Với tầm nhìn vượt ra ngoài biên giới Việt Nam, chúng tôi mang trong mình khát vọng xây dựng những giải pháp phần mềm tiên tiến, đáp ứng nhu cầu của các doanh nghiệp trong và ngoài nước.
            </p>

            <p className="text-slate-300 text-base mb-4 leading-relaxed text-justify">
              Chúng tôi tin rằng công nghệ <span className="text-emerald-400 font-semibold">4.0</span>, trí tuệ nhân tạo (<span className="text-emerald-400">AI</span>) và <span className="text-blue-400 font-semibold">Blockchain</span> chính là chìa khóa mở ra cơ hội đổi mới, phát triển và nâng cao năng suất lao động. Tại EG GROUP, chúng tôi lấy con người làm trung tâm, coi trọng hợp tác và sáng tạo để cùng nhau kiến tạo tương lai.
            </p>
          </div>
        </div>

        {/* Bạn có thể kích hoạt thành phần công nghệ ở đây */}
        {/* <ServicesTechnologies /> */}
        <Terminal />
      </div>

      <div className="w-full flex justify-center items-center py-8">
        <div className="w-24 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 animate-pulse shadow-[0_0_15px_#00bcd4]" />
      </div>
    </section>

  )
}

export default AboutUs