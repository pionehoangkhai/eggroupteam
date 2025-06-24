import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOSInit from '@/components/ClientSideAOS' // <-- thêm dòng này
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EG GROUP",
  description: "EG GROUP là một tập thể tiên phong trong lĩnh vực phát triển phần mềm, quy tụ những con người đam mê sáng tạo, đổi mới và không ngừng học hỏi. Với tầm nhìn vượt ra ngoài biên giới Việt Nam, chúng tôi mang trong mình khát vọng xây dựng những giải pháp phần mềm tiên tiến, đáp ứng nhu cầu của các doanh nghiệp trong và ngoài nước. Bằng tinh thần đoàn kết và quyết tâm mạnh mẽ, EG GROUP không ngừng nỗ lực để đưa sản phẩm phần mềm vươn tầm quốc tế.",
openGraph: {
    title: "EG GROUP | Vươn Mình, Vững Bước",
    description: "EG GROUP là một tập thể tiên phong trong lĩnh vực phát triển phần mềm, quy tụ những con người đam mê sáng tạo, đổi mới và không ngừng học hỏi. Với tầm nhìn vượt ra ngoài biên giới Việt Nam, chúng tôi mang trong mình khát vọng xây dựng những giải pháp phần mềm tiên tiến, đáp ứng nhu cầu của các doanh nghiệp trong và ngoài nước. Bằng tinh thần đoàn kết và quyết tâm mạnh mẽ, EG GROUP không ngừng nỗ lực để đưa sản phẩm phần mềm vươn tầm quốc tế.",

    images: [
      {
        url: "https://eggroup-eg9.vercel.app/img/banner1.jpg", // Đặt file này vào thư mục /public
        width: 1200,
        height: 630,
        alt: "EG GROUP",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <AOSInit /> {/* <-- khởi tạo AOS ở đây */}
        {children}
      </body>
    </html>
  );
}
