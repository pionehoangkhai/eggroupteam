import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { socialIcons } from '@/yummy_data'; // hoặc đường dẫn tuỳ theo folder bạn đặt
type Props = {}

const Footer = (props: Props) => {
  return (
  <footer className="bg-gradient-to-br from-[#0f172a] via-[#12273d] to-[#0d3c5e] text-white px-6 py-16 overflow-hidden relative border-t border-cyan-600 shadow-inner">
  {/* Hiệu ứng ánh sáng nổi nhẹ */}
  <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.15)_0%,_transparent_70%)] z-0" />

  <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-center gap-6">
    {/* Logo */}
    <div className="w-[200px] h-[70px] relative drop-shadow-md">
      <Image
        src="/img/logoeg.png"
        alt="EG GROUP Logo"
        fill
        className="object-contain"
        sizes="200px"
        priority
      />
    </div>

    {/* Slogan */}
    <h2 className="text-2xl md:text-3xl font-bold text-center text-cyan-300 drop-shadow-sm tracking-wide font-['Space_Grotesk']">
      Vươn Mình, Vững Bước
    </h2>

    {/* Đường kẻ nhấn */}
    <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400 rounded-full"></div>

    {/* Mô tả */}
    <p className="text-center text-sm md:text-base text-slate-300 max-w-xl leading-relaxed px-4">
      EG GROUP – Nơi hội tụ của những tài năng trẻ đam mê công nghệ và sáng tạo. 
      Chúng tôi không ngừng đổi mới để tạo nên những giá trị bền vững trong kỷ nguyên số.
    </p>

    {/* Copyright */}
    <div className="mt-6 text-xs text-slate-500">
      © {new Date().getFullYear()} <span className="text-cyan-400">EG GROUP</span>. Dự án này được thực hiện bởi các nhân sự chính thức thuộc Công ty Pione Group, nhằm tham gia cuộc thi với tinh thần sáng tạo và chuyên nghiệp.
    </div>
    
  </div>
</footer>



  )
}

export default Footer