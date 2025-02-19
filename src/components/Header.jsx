import React from 'react'
import Button from './ui/button-start'

function Header() {
  return (

    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-5xl text-center">
          <h1
            className="text-blue-200 font-bold sm:text-7xl"
          >
            All Your File Conversions,

            <span className="sm:block"> Just a Click Away! </span>
          </h1>

          <p className="
      bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent
      mx-auto mt-6 max-w-2xl sm:text-2xl/relaxed">
            One Platform, Endless Possibilities - Start Converting Now!
          </p>
          <div className="mt-8">
            <Button />
          </div>

        </div>
      </div>
    </section>



  )
}

export default Header