import { useState } from "react";
import { technology } from "../starter-code/data.json";
import { BsCircle } from "react-icons/bs";



export default function Destination() {
  const [cards] = useState(technology)
  const [value, setValue] = useState(0)

  const { name, images, description } =
    cards[value]
  return (
    <>
      <section className="home technology px-5">
        <h1 className="pt-20  lg:pt-40 lg:max-w-7xl lg:mx-auto text-white text-4xl uppercase mb-10">03 Space Launch 101</h1>

        <div className="flex items-center justify-center flex-col-reverse  md:grid grid-cols-2 gap-5 
      md:itens-center  lg:max-w-7xl lg:mx-auto">

      


          <article className="text-center lg:text-left lg:flex items-center">
          <div>
          {cards.map((item, index) => (
              <button key={index} onClick={() =>
                setValue(index)} className={`uppercase
            text-white text-2xl h-12 w-12 p-2 rounded-full border-white pb-2 m-2
            ${index === value && "bg-white text-gray-800"}`}>
                {index + 1}

              </button>
            ))}
          </div>

            <div className="ml-10">
              <h4 className="uppercase text-gray-400 mb-5 text-2xl">The  termonology...</h4>

              <h2 className="text-5xl font-bold mt-10 my-5 uppercase tracking-widest">{name}</h2>
              <p className="text-gray-400 mb-10">{description}</p>

            </div>

          </article>

          <article>
            <picture>
              <source media="(min-width: 768px)" srcSet={images.portrait}></source>
              <img src={images.landscape}
                alt={name}
                title={name}
                className="block mx-auto mb-10"
              />
            </picture>
          </article>

        </div>

      </section>
    </>
  );
}