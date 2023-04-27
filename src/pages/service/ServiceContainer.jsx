import React from "react"
import { useParams } from 'react-router-dom';
import { services } from "../../data/dummy"

const ServiceContainer = () => {
    const { tag } = useParams();

    return (
        <section className="service">
            <div className="container">
                <div className="text-center mb-[2em] md:mb-[4em]">
                    <h1 className="text-[#333] text-4xl font-bold tracking-[-.04em] mb-[24px] md:text-5xl">¡Nuestros mejores especialistas cuidarán de ti!</h1>
                    <p className="text-lg text-[#444] tracking-[-.02em] max-w-[910px] mx-auto md:text-xl md:leading-[1.6]">Siempre enfocados en su presta recuperacion y mejoria.</p>
                </div>

                <br />

                <div className="grid gap-6" style={{gridTemplateColumns: "repeat(auto-fill, minmax(275px, 1fr))"}}>
                    {services.map((item) => (
                        <div
                            key={item.id}
                            className="rounded-xl bg-white border border-[rgba(0,0,0,.1)] overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,.12)]" style={{transition: "all .3s ease"}}
                        >
                            <div className="relative bg-[rgba(0,0,0,.08)] h-[300px] md:h-[400px]">
                                <img src={`/images/${item.imageName}`} alt="" style={{position: "relative", height: "100%", width: "100%", inset: "0", objectFit: "cover"}} />
                            </div>

                            <div className="p-[16px] text-center">
                                <h3 className="text-lg tracking-[-.01em] font-bold text-black">{item.title}</h3>

                                <div className="mt-5">
                                    <a href={`/servicios/${item.to}`} className="text-sm bg-[#333] text-white py-[10px] px-[20px] font-medium w-fit rounded-md m-auto hover:bg-black active:scale-[.96]">Conoce más</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServiceContainer