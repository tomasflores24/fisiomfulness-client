import React from "react"

const AboutContainer = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="text-center mb-[2em] md:mb-[4em]">
          <h1 className="text-[#333] text-4xl font-bold tracking-[-.04em] mb-[24px] md:text-5xl">Conoce más acerca de nosotros</h1>
          <p className="text-lg text-[#444] tracking-[-.02em] max-w-[897px] mx-auto md:text-xl md:leading-[1.6]">Somos una startup de la industria del bienestar, buscamos que las personas puedan tener una salud plena mas alla de lo farmacologico y buscando la prevencion que es lo primordial en la salud.</p>
        </div>

        <br />

        <div className="grid gap-5" style={{gridTemplateColumns: "repeat(auto-fill, minmax(275px, 1fr))"}}>
          <div className="overflow-hidden rounded-2xl">
            <img src="https://i.pinimg.com/474x/f0/72/ac/f072acd25176518223a4a4bcd3d5e088--natural-waterfalls-beautiful-pictures.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          
          <div className="overflow-hidden rounded-2xl">
            <img src="/images/about-2.jpg" alt="" className="w-full h-full object-cover" />
          </div>

          <div className="overflow-hidden rounded-2xl">
            <img src="/images/about-3.jpg" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutContainer