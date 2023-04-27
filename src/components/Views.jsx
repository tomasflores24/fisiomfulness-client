import React, { useRef, useState } from "react"
import { FaPlay, FaPause } from 'react-icons/fa';

const Views = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }

  return (
    <section className="views">
      <div className="container">
        <div className="relative py-[32px]">
          <div className="flex items-center">
            <div className="border-l-[1px] border-red-500 px-[16px] text-left">
              <p className="text-3xl tracking-tighter text-black font-bold text-white">1M+</p>
              <span className="text-[#666] text-xs font-semibold uppercase tracking-widest">visitas</span>
            </div>
          </div>

          <button 
            type="button" 
            onClick={handlePlay}
            className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] text-white w-[52px] h-[52px] rounded-full border border-white grid place-items-center hover:bg-[rgba(255,255,255,.08)]"
          >
            <span className="text-[15px]">{isPlaying ? <FaPause /> : <FaPlay />}</span>
          </button>
        </div>
      </div>
      <audio ref={audioRef} src="/audio/ambiental.mp3" />
    </section>
  )
}

export default Views