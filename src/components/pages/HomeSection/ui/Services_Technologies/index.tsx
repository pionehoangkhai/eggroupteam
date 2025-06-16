import React from 'react'
import Image from 'next/image';
import { teamMoments } from '@/yummy_data';
const ServicesTechnologies = () => {
  return (
    <section className="w-full bg-white py-16 px-6 scroll-mt-18" id="teamwork" >
      <div className="max-w-6xl mx-auto text-center" >
        
         <h2 className="text-[50px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00BFA5] via-[#00ACC1] to-[#04759C] mb-6 drop-shadow font-['Space_Grotesk'] tracking-tight">
          Team Work
         
        </h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-12 text-lg leading-relaxed">
          Cùng nhau làm việc – cùng nhau phát triển. Đây là những khoảnh khắc ghi lại <span className="text-[#04759C] font-semibold">tinh thần đồng đội</span>, <span className="text-[#00BFA5] font-semibold">sự sáng tạo</span> và <span className="text-orange-500 font-semibold">gắn kết</span> của EG GROUP.
        </p>

        <div className="space-y-12" >
          {teamMoments.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-6 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
              data-aos={item.dataaos}
            >
              <div className="w-full md:w-1/2 overflow-hidden rounded-xl shadow-lg group">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-90"
                />
              </div>
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-2xl font-bold text-[#00BFA5] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-[17px]">
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