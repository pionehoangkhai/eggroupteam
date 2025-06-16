import React from 'react'
import Image from 'next/image';
import { Services } from '@/yummy_data'; // hoặc đường dẫn tuỳ theo folder bạn đặt

import Terminal from "../Terminal";
const AboutUs = () => {
  return (
    <section
      id="about"
      className="w-full bg-cover bg-center bg-no-repeat  px-6 py-12"
      style={{ backgroundImage: "url('/background/background_startup.png')" }} // 👉 Đổi đúng đường dẫn ảnh background
    >
      {/* Overlay tối nhẹ cho nội dung dễ đọc */}
      <div className="w-full h-full  backdrop-brightness-100 py-13 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 mb-16">
          {/* Image */}
          <div className="md:w-1/2 flex justify-center" data-aos="zoom-in-down">
            <Image
              height={500}
              width={500}
              src="/img/banner1.jpg"
              alt="About us illustration"
              className="max-w-2xl w-full rounded-xl shadow-lg object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Text content */}
          <div className="md:w-1/2" data-aos="zoom-in-down"
          >

            <h2 className="text-[40px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00BFA5] via-[#00ACC1] to-[#04759C] mb-6 drop-shadow font-['Space_Grotesk'] tracking-tight">
              Giới thiệu về chúng tôi
            </h2>

            <p className="text-gray-700 text-base mb-4 text-justify" >
              EG GROUP là một tập thể tiên phong trong lĩnh vực phát triển phần mềm, quy tụ những con người đam mê sáng tạo, đổi mới và không ngừng học hỏi. Với tầm nhìn vượt ra ngoài biên giới Việt Nam, chúng tôi mang trong mình khát vọng xây dựng những giải pháp phần mềm tiên tiến, đáp ứng nhu cầu của các doanh nghiệp trong và ngoài nước. Bằng tinh thần đoàn kết và quyết tâm mạnh mẽ, EG GROUP không ngừng nỗ lực để đưa sản phẩm phần mềm vươn tầm quốc tế.
            </p>
            <p className="text-gray-700 text-base mb-4 text-justify" >
              Chúng tôi tin rằng công nghệ 4.0, trí tuệ nhân tạo (AI) và Blockchain chính là chìa khóa mở ra cơ hội đổi mới, phát triển và nâng cao năng suất lao động. Tại EG GROUP, chúng tôi lấy con người làm trung tâm, coi trọng hợp tác và sáng tạo để cùng nhau kiến tạo tương lai, định hình xu hướng phát triển ngành công nghiệp toàn cầu.
            </p>

          </div>
        </div>

        {/* Services & Technologies */}
        {/* <ServicesTechnologies /> */}
        <Terminal />

      </div>
    </section>
  )
}

export default AboutUs