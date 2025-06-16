import React from 'react'
import Footer from "../ui/Footer";
import Header from "../ui/Header";
type Props = {
  children: React.ReactNode;
}

const MainLayout = ({children}: Props) => {
  return (
    <>
    <Header />
    <div className=" bg-white text-black"> {children}</div>
    <Footer />
  </>
  )
}

export default MainLayout