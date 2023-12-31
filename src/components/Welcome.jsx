import React from 'react'
import ButtonWelcome from "./ButtonWelcome"

export default function Welcome() {
  return (
    <div className="flex h-screen justify-center items-center flex-col">
        <h1 className="text-white text-3xl mb-3 text-center font-bold md:m-10 md:text-5xl lg:m-0">
          Your favorite comic book store ✨
        </h1>
        <p className="text-white text-sm p-2 text-center md:text-xl lg:hidden">
          From classics to novelties, we have everything you need to immerse
          yourself in your favorite universes.
        </p>
        <p className="text-white text-sm p-2 mb-3 text-center md:text-xl lg:text-1xl lg:m-4">
          Explore our catalog and live the adventure of your life.
        </p>
        <ButtonWelcome />
        
      </div>
  )
}
