import React from 'react'
import Image from 'next/image';
import { WhyChoose } from '@/yummy_data'; // hoặc đường dẫn tuỳ theo folder bạn đặt
const Whychoose = () => {
  return (
   <section className="w-full bg-gradient-to-br from-[#F0F4FF] to-[#E0F7FA] py-20 px-4 md:px-6 overflow-hidden" id="videos">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-[50px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00BFA5] via-[#00ACC1] to-[#04759C] mb-6 drop-shadow font-['Space_Grotesk'] tracking-tight">
      Hành trình EG Group
    </h2>
    <p className="text-gray-800 max-w-2xl mx-auto mb-12 text-base md:text-lg leading-relaxed px-2">
      Video tổng quan về <span className="text-[#04759C] font-semibold">EG Group</span> – đội ngũ trẻ đầy nhiệt huyết, tiên phong trong việc phát triển <span className="text-[#00BFA5] font-semibold">giải pháp Blockchain Layer 1</span>.
      Cùng khám phá tinh thần sáng tạo, năng lượng tích cực và tầm nhìn công nghệ của chúng tôi qua từng thước phim ấn tượng.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Video 1 */}
      <div className="rounded-2xl overflow-hidden shadow-2xl group transform transition duration-300 hover:scale-105 aspect-video" data-aos="fade-up-right">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/kI2EybUjMhA"
          title="EG Group Video 1"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Video 2 */}
      <div className="rounded-2xl overflow-hidden shadow-2xl group transform transition duration-300 hover:scale-105 aspect-video" data-aos="fade-up-left">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/EA7Ew4TmZXs"
          title="EG Group Video 2"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
</section>


  )
}

export default Whychoose