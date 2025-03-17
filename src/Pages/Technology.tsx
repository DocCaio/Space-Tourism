import { useState } from "react";
import { technology } from "../starter-code/data.json";
import { BsCircle } from "react-icons/bs";



export default function Destination() {
  const [cards] = useState(technology)
  const [value , setValue] =useState(0)

  const {name , images ,description } =
  cards[value]
  return (
    <>
    <section className="home technology px-5">
      <h1 className="pt-20  lg:pt-40 lg:max-w-7xl lg:mx-auto text-white text-4xl uppercase mb-10">03 Space Launch 101</h1>

      <div className="flex items-center justify-center flex-col-reverse  md:grid grid-cols-2 gap-5 
      md: itens-center lg:max-w-7xl lg:mx-auto">
      

        <article className="text-center lg: text-left">
    

          <h2 className="text-5xl font-bold mt-10 mb-5 uppercase tracking-widest">{name}</h2>
          <p className="text-gray-400 mb-10">{description}</p>  
          {cards.map((item ,index) => (
          <button key={index} onClick={() => 
            setValue(index)} className={`uppercase
            text-white text-2xl rounded-full  h-5 pb-2 mx-2 
            ${index === value && "bg-white"}`}>
              Numbers

          </button>
        ))}
              
        </article>  

          <article>
          <img src={images.png} 
          alt={name} 
          title={name}
          className="block mx-auto mb-10"
          />
        </article> 
      

      </div>

    </section>
    </>
  );
}