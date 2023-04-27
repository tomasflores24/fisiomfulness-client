import React from "react"
import { BsChevronDown } from "react-icons/bs"
// import { sendEmail } from "../../sendEmail"

const PopupForm = ({ handleCloseModal }) => {
    // const [to, setTo] = useState('');
    // const [subject, setSubject] = useState('');
    // const [text, setText] = useState('');

    console.log("first")

    function handleSubmit(event) {
        // event.preventDefault();
        // sendEmail(to, subject, text);
        // setTo('');
        // setSubject('');
        // setText('');
    }

    return (
        <div className="fixed inset-0 z-[9999]">
            <div className="absolute z-[999] inset-0 bg-[rgba(0,0,0,.51)]" onClick={handleCloseModal}></div>

            <div className="p-[1.8rem_0_0] max-h-screen inset-0 absolute flex justify-center items-center md:p-10">
                <div className="contents">
                    <form 
                        action=""
                        onSubmit={handleSubmit} 
                        className="relative flex flex-col bg-white shadow-[0_8px_28px_rgba(0,0,0,.28)] max-w-full w-full h-[730px] max-h-full rounded-[10px_10px_0_0] overflow-hidden z-[999] md:max-w-[568px] md:rounded-[10px]"
                    >
                        <header className="min-h-[48px] flex items-center justify-between px-6 border-b border-[rgb(241,241,241)] md:min-h-[64px]">
                            <button type="button" className="text-[#222] relative before:content-[''] before:absolute before:w-8 before:h-8 before:translate-y-[-50%] before:translate-x-[-50%] before:top-1/2 before:left-1/2 before:rounded-full hover:before:bg-[#f7f7f7] hover:text-black active:scale-[.92]" onClick={handleCloseModal}>
                                <span className="relative">
                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{display: "block", fill: "none", height: 16, width: 16, stroke: "currentcolor", strokeWidth: 3, overflow: "visible"}}><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
                                </span>
                            </button>
                            <h1 className="text-[#222] text-base font-bold">Formulario</h1>
                            <div></div>
                        </header>

                        <section className="overflow-auto p-6 pb-[40px]">
                            <div className="flex flex-col gap-6">
                                <label className="block">
                                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xs font-semibold text-[#666] mb-2">Nombre y Apellido</span>
                                    <input type="text" className="text-[16px] leading-5 px-3 py-3 bg-white shadow-[0_0_0_1px_inset_#B0B0B0] placeholder-slate-400 focus:shadow-[0_0_0_2px_inset_#000] block w-full rounded-lg" />
                                </label>

                                <label className="block">
                                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xs font-semibold text-[#666] mb-2">Email</span>
                                    <input type="email" className="text-[16px] leading-5 px-3 py-3 bg-white shadow-[0_0_0_1px_inset_#B0B0B0] placeholder-slate-400 focus:shadow-[0_0_0_2px_inset_#000] block w-full rounded-lg" />
                                </label>

                                <label className="block">
                                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xs font-semibold text-[#666] mb-2">Teléfono</span>
                                    <input type="number" className="text-[16px] leading-5 px-3 py-3 bg-white shadow-[0_0_0_1px_inset_#B0B0B0] placeholder-slate-400 focus:shadow-[0_0_0_2px_inset_#000] block w-full rounded-lg" />
                                </label>

                                <label className="block">
                                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xs font-semibold text-[#666] mb-2">Fecha</span>
                                    <input type="date" className="text-[16px] leading-5 px-3 py-3 bg-white shadow-[0_0_0_1px_inset_#B0B0B0] placeholder-slate-400 focus:shadow-[0_0_0_2px_inset_#000] block w-full rounded-lg" />
                                </label>

                                <label className="block">
                                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xs font-semibold text-[#666] mb-2">Mañana [8:00am - 12:00pm]</span>
                                    <div className="flex relative items-center rounded-[10px] cursor-pointer">
                                        <select name="" id="" className="cursor-pointer text-[16px] leading-5 p-[0.75rem_32px_0.75rem_0.75rem] bg-white shadow-[0_0_0_1px_inset_#B0B0B0] placeholder-slate-400 focus:shadow-[0_0_0_2px_inset_#000] block w-full rounded-lg">
                                            <option value="">valor 1</option>
                                            <option value="">valor 2</option>
                                        </select>

                                        <BsChevronDown className="pointer-events-none absolute right-[12px] text-[14px]" />
                                    </div>
                                </label>

                                <label className="block">
                                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xs font-semibold text-[#666] mb-2">Fisioterapia</span>
                                    <div className="flex relative items-center rounded-[10px] cursor-pointer">
                                        <select name="" id="" className="cursor-pointer text-[16px] leading-5 p-[0.75rem_32px_0.75rem_0.75rem] bg-white shadow-[0_0_0_1px_inset_#B0B0B0] placeholder-slate-400 focus:shadow-[0_0_0_2px_inset_#000] block w-full rounded-lg">
                                            <option value="">valor 1</option>
                                            <option value="">valor 2</option>
                                        </select>

                                        <BsChevronDown className="pointer-events-none absolute right-[12px] text-[14px]" />
                                    </div>
                                </label>

                                <label className="block">
                                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xs font-semibold text-[#666] mb-2">Detalle</span>
                                    <textarea name="" id="" rows="3" className="text-[16px] leading-5 px-3 py-3 bg-white shadow-[0_0_0_1px_inset_#B0B0B0] placeholder-slate-400 focus:shadow-[0_0_0_2px_inset_#000] block w-full rounded-lg"></textarea>
                                </label>
                            </div>
                        </section>

                        <div className="py-4 px-6 border-t border-[rgb(241,241,241)]">
                            <button type="submit" className="text-[16px] bg-rose-500 text-white py-[14px] px-[24px] w-full font-medium w-fit rounded-lg hover:bg-rose-700 active:scale-[.96]">Agendar cita</button>
                        </div>
                    </form>

                    {/* <form onSubmit={handleSubmit}>
                        <label htmlFor="to">To:</label>
                        <input type="email" id="to" value={to} onChange={e => setTo(e.target.value)} />

                        <label htmlFor="subject">Subject:</label>
                        <input type="text" id="subject" value={subject} onChange={e => setSubject(e.target.value)} />

                        <label htmlFor="text">Message:</label>
                        <textarea id="text" value={text} onChange={e => setText(e.target.value)} />

                        <button type="submit">Send</button>
                    </form> */}
                </div>
            </div>
        </div>
    )
}

export default PopupForm