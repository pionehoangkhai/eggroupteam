import React from 'react'
import Image from 'next/image';
const Slogan =  () => {
  return (
    <section
            className="py-10 px-6 text-white bg-cover bg-center"
            style={{ backgroundImage: "url('/img/bg-quote.png')" }} // ← ảnh nền
          >
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center" >
              {/* Ảnh 3D hình tròn xanh */}
              <Image
                height={500} width={500}
                src="/img/icon-quote.png"
                alt="3D Element"
                className="w-full max-w-[500px] h-auto object-contain animate-float"data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              />
    
              <blockquote className="text-[36px] leading-[100%] font-normal italic text-center font-[Montserrat]" data-aos="fade-left"
   
     > 
                <span className="text-orange-400 text-5xl align-top leading-none mr-1">“</span>
                VƯƠN MÌNH, VỮNG BƯỚC<br />
                Vươn mình chinh phục những giới hạn mới, <br />
                vững bước cùng niềm tin công nghệ <br />
                
              </blockquote>
    
            </div>
          </section>
  )
}

export default Slogan