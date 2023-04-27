import React, { useEffect, useRef, useState } from "react"
import Views from "../../components/Views"

const HomeContainer = () => {
  useEffect(() => {
    document.body.classList.add("page-dark");
    
    return () => {
      document.body.classList.remove("page-dark");
    };
  }, []);
  
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

      <Views />
    </div>
  )
}

export default HomeContainer