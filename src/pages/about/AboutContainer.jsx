import React from "react"

const AboutContainer = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="flex gap-4">
          <div className="w-1/2">
            <div className="flex items-center justify-center h-40">
              <img src="/icon-logo.png" alt="Logo" className="h-20" />
            </div>
            <div className="mt-10">
              <img src="/images/about-1.jpg" alt="" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>

          <div className="w-1/2">
            <div className="flex items-center justify-center h-40">
              <p className="text-center text-2xl uppercase">Quienes somos</p>
            </div>
            <div className="p-4">
              <h2 className="text-center text-[#333] text-4xl font-bold tracking-[-.04em] mb-[24px] md:text-5xl">Más allá de lo farmacológico</h2>
              <p className="text-lg text-[#444] tracking-[-.02em] max-w-[897px] mx-auto md:text-xl md:leading-[1.6]">En Fisiomfulness, estamos comprometidos a revolucionar el sector de la salud al proporcionar soluciones innovadoras y accesibles para mejorar la vida de las personas.<br></br>
                Nos enorgullece ser una startup que busca marcar la diferencia y hacer del bienestar una prioridad para todos.<br></br><br></br>
                El verdadero bienestar no se trata solo de estar físicamente en forma, sino también de encontrar el equilibrio en mente, cuerpo y espíritu.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutContainer