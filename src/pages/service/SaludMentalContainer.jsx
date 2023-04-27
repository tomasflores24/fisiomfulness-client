import React, { useState, useEffect } from "react"
import PopupForm from "../../components/PopupForm"

const SaludMentalContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBodyOverflow = (isHidden) => {
    document.body.style.overflow = isHidden ? "hidden" : "";
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
        handleBodyOverflow(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    handleBodyOverflow(true);
  }

  return (
    <>
      <div className="service">
        <div className="container">
          <div className="text-center mb-[2em] md:mb-[4em]">
            <h1 className="text-[#333] text-4xl font-bold tracking-[-.04em] mb-[24px] md:text-5xl">Salud Mental</h1>
            <p className="text-lg text-[#444] tracking-[-.02em] max-w-[897px] mx-auto md:text-xl md:leading-[1.6]">
              <a href="/" className="inline-block hover:underline active:text-[#818181]">Inicio</a> / <a href="/servicios" className="inline-block text-[#0070f3] hover:underline active:text-[#71a5e1]">Servicios</a>
            </p>
          </div>

          <br />

          <div className="grid gap-6" style={{gridTemplateColumns: "repeat(auto-fill, minmax(275px, 1fr))"}}>
            <div className="rounded-xl bg-white border border-[rgba(0,0,0,.1)] overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,.12)] flex flex-col" style={{transition: "all .3s ease"}}>
              <div className="relative flex-none" style={{height: "250px"}}>
                <img src="/images/psicologia.jpg" alt="" style={{position: "relative", height: "100%", width: "100%", inset: "0", objectFit: "cover"}} />
              </div>

              <div className="p-[16px] flex flex-col h-full">
                <h3 className="text-[18px] leading-6 tracking-[-.01em] font-bold text-black">Psicologia</h3>
                <div className="mt-2.5 mb-6 text-sm text-[#666]">Si tienes un problema y lo sientes que aprender, aqui encontramos psicologos que te ayudaran alcanzar las soluciones que necesitas. <br /> De al primer peso, contactamos con un psicologo y accede a un servicio profesional, de calidad y orientado o resultados.</div>

                <div className="mt-auto text-center">
                  <button 
                    type="button" 
                    className="text-sm bg-[#333] text-white py-[10px] px-[20px] font-medium w-fit rounded-md m-auto hover:bg-black active:scale-[.96]"
                    onClick={handleOpenModal}
                  >
                    Reservar
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-white border border-[rgba(0,0,0,.1)] overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,.12)] flex flex-col" style={{transition: "all .3s ease"}}>
              <div className="relative flex-none" style={{height: "250px"}}>
                <img src="/images/yoga.jpg" alt="" style={{position: "relative", height: "100%", width: "100%", inset: "0", objectFit: "cover"}} />
              </div>

              <div className="p-[16px] flex flex-col h-full">
                <h3 className="text-[18px] leading-6 tracking-[-.01em] font-bold text-black">Yoga</h3>
                <div className="mt-2.5 mb-6 text-sm text-[#666]">Práctica para su Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero fuga ipsam, quos hic aspernatur maxime mollitia quia aliquid laboriosam corrupti dolorum provident ratione quas eveniet repellat quibusdam vitae assumenda pariatur?.</div>

                <div className="mt-auto text-center">
                  <button 
                    type="button" 
                    className="text-sm bg-[#333] text-white py-[10px] px-[20px] font-medium w-fit rounded-md m-auto hover:bg-black active:scale-[.96]"
                    onClick={handleOpenModal}
                  >
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && <PopupForm handleCloseModal={() => {
        setIsModalOpen(false);
        handleBodyOverflow(false);
      }} />}
    </>
  )
}

export default SaludMentalContainer