import React, { useState, useEffect } from "react"
import PopupForm from "../../components/PopupForm"

const SaludNutricionalContainer = () => {
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
                    <h1 className="text-[#333] text-4xl font-bold tracking-[-.04em] mb-[24px] md:text-5xl">Salud Nutricional</h1>
                    <p className="text-lg text-[#444] tracking-[-.02em] max-w-[897px] mx-auto md:text-xl md:leading-[1.6]">
                        <a href="/" className="inline-block hover:underline active:text-[#818181]">Inicio</a> / <a href="/servicios" className="inline-block text-[#0070f3] hover:underline active:text-[#71a5e1]">Servicios</a>
                    </p>
                </div>

                <br />

                <div className="grid gap-6" style={{gridTemplateColumns: "repeat(auto-fill, minmax(275px, 1fr))"}}>
                    <div className="rounded-xl bg-white border border-[rgba(0,0,0,.1)] overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,.12)] flex flex-col" style={{transition: "all .3s ease"}}>
                        <div className="relative flex-none" style={{height: "250px"}}>
                            <img src="/images/nutricion.jpg" alt="" style={{position: "relative", height: "100%", width: "100%", inset: "0", objectFit: "cover"}} />
                        </div>

                        <div className="p-[16px] flex flex-col h-full">
                            <h3 className="text-[18px] leading-6 tracking-[-.01em] font-bold text-black">Nutricion</h3>
                            <div className="mt-2.5 mb-6 text-sm text-[#666]">Entrena con un fisioterapauta y logra tus objetivos, te ayudamos a aumentar masa muscular, bajar de peso y mantenerte en forma.</div>

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
                            <img src="/images/calorico.jpg" alt="" style={{position: "relative", height: "100%", width: "100%", inset: "0", objectFit: "cover"}} />
                        </div>

                        <div className="p-[16px] flex flex-col h-full">
                            <h3 className="text-[18px] leading-6 tracking-[-.01em] font-bold text-black">Deficit Calórico</h3>
                            <div className="mt-2.5 mb-6 text-sm text-[#666]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nulla eligendi optio blanditiis facilis, quisquam delectus incidunt deserunt minus ratione nemo repellendus ipsa ea pariatur animi aliquid quam accusamus illum.</div>

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

export default SaludNutricionalContainer