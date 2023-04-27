import React, { useEffect } from "react"
import { useRouteError } from "react-router-dom"

import Header from "../../components/Header"

const NotFoundContainer = () => {
  const error = useRouteError();
  console.log(error)

  return (
    <div className="page-found">
      <Header />
      <section className="not-found">
        <div className="container">
          <div className="text-center my-[2em] md:my-[4em]">
            <h1 className="text-[#333] text-4xl font-bold tracking-[-.04em] md:text-5xl">Not Found 404</h1>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NotFoundContainer