import React from "react"

const HomeContainer = () => {
  return (
    <div className="page">
      <section className="home">
        <div className="container">
          <h1 className="title">
            <span>
              <span>Fisiom</span>
            </span>

            <span>
              <span>fulness.</span>
            </span>
          </h1>
          <p className="subtitle">Cuidamos tu cuerpo y sanamos tu mente</p>
        </div>
      </section>

      <section className="bg-[#111]/80 border-t-[1px] border-b-[1px] border-[#333] backdrop-blur-[20px]">
        <div className="container">
          <div className="flex items-center py-[24px] max-md:flex-col">
            <div className="last:border-r-[0] max-md:border-r-[0] max-md:my-[20px] border-r-[1px] border-[#333] px-[33px] text-center grow">
              <p className="text-6xl tracking-tighter text-white font-bold">1M+</p>
              <span className="text-[#888] text-sm font-semibold uppercase tracking-widest">visitas</span>
            </div>

            <div className="last:border-r-[0] max-md:border-r-[0] max-md:my-[20px] border-r-[1px] border-[#333] px-[33px] text-center grow">
              <p className="text-6xl tracking-tighter text-white font-bold">50</p>
              <span className="text-[#888] text-sm font-semibold uppercase tracking-widest">clientes</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeContainer