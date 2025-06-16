import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { socialIcons } from '@/yummy_data'; // hoặc đường dẫn tuỳ theo folder bạn đặt
type Props = {}

const Footer = (props: Props) => {
  return (
   <footer className="bg-gradient-to-br from-[#092642] via-[#0c3559] to-[#0e446b] text-white px-6 py-12 border-t-4 border-[#1DA1F2] overflow-hidden">
  <div className="max-w-7xl w-full mx-auto flex flex-col items-center gap-6">
    
    {/* Logo */}
    <div className="w-70 h-35 relative">
      <Image
        src="/img/logoeg.png"
        alt="EG GROUP Logo"
        fill
        className="object-contain"
        sizes="112px" // giới hạn để tránh bùng layout
        priority
      />
    </div>

    {/* Slogan */}
    <h2 className="text-2xl md:text-3xl font-bold text-center text-white drop-shadow-sm">
      Vươn Mình, Vững Bước
    </h2>

    {/* Đường kẻ nhấn */}
    <div className="w-16 h-1 bg-[#1DA1F2] rounded-full"></div>

    {/* Mô tả */}
    <p className="text-center text-sm md:text-base text-gray-300 max-w-xl leading-relaxed px-4">
      EG GROUP – Nơi hội tụ của những tài năng trẻ đam mê công nghệ và sáng tạo. 
      Chúng tôi không ngừng đổi mới để tạo nên những giá trị bền vững trong kỷ nguyên số.
    </p>
    
    {/* Copyright */}
    <div className="mt-6 text-xs text-gray-400">
      © {new Date().getFullYear()} EG GROUP. All rights reserved.
    </div>
  </div>
</footer>



  )
}

export default Footer