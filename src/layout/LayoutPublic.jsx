import React from "react"
import { Outlet } from "react-router-dom"
import { ImWhatsapp } from "react-icons/im"

import Header from "../components/Header"

const LayoutPublic = () => {
  return (
    <>
      <Header />
      <Outlet />
      <div className="fixed right-6 bottom-6 z-10 border-2 border-transparent rounded-[16px] p-[3px] hover:border-[#01b923]">
        <a href="https://api.whatsapp.com/send/?phone=51934985123" target="_blank" className="w-14 h-14 rounded-xl grid place-content-center text-white text-[36px] cursor-pointer bg-gradient-to-t from-[#01b923] to-[#30d847] active:scale-[.96]">
          <ImWhatsapp />
        </a>
      </div>
    </>
  )
}

export default LayoutPublic