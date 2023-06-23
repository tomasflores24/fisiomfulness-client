import React, { useEffect, useRef, useState } from "react";
import Views from "../../components/Views";
import Appointment from "../appointment/Appointment";

const HomeContainer = () => {
  useEffect(() => {
    document.body.classList.add("page-dark");

    return () => {
      document.body.classList.remove("page-dark");
    };
  }, []);

  return (
    <div className="page">
      <Appointment />
      <section className="home">
        <div className="container">
          <div className="logo-container">
            <img src="/icon-logo.png" alt="LOGO DE FISIONFULNESS" />
          </div>
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
  );
};

export default HomeContainer;
