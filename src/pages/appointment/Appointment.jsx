import React from "react";
import { FaCalendar, FaUserMd } from "react-icons/fa";

const Appointment = () => {
  return (
    <div className="appointment">
      <p className="appointment-title">
        <div className="icon-wrapper">
          <FaCalendar className="appointment-icon" />
        </div>
        RESERVA UNA CITA
      </p>
      <button className="appointment-button">
        <div className="icon-wrapper">
          <FaUserMd className="appointment-icon" />
        </div>
        SERVICIOS Y ESPECIALIDADES
      </button>
    </div>
  );
};

export default Appointment;
