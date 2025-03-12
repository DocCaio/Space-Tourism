import { useState } from "react";
import { destinations } from "../starter-code/data.json";



export default function Destination() {
  const [planets] = useState(destinations)
  const [value , setValue] =useState(0)

  const {name , images , destinations , distance , travel } =
  planets[value]
  return (
    <>
    <section className="home destination px-5">
      <h1>01 Pick your destination</h1>

      <div className="pt-20">
        <article>
          <img src={images.png} 
          alt={name} 
          title={name}
          className="block mx-auto w-3/4 mb-10"
          />
        </article>

        <article className="text-center">
        {planets.map((item ,index) => (
          <button key={index} onClick={() => 
            setValue(index)} className={`uppercase
            text-white text-2xl pb-2 border-b mx-2`}>
            {item.name}

          </button>
        ))}
        

          <h2 className="text-5xl font-bold mt-10 mb-5 uppercase tracking-widest">{name}</h2>
          <p className="text-gray-400">{destinations}</p>
          <ul>
            <li>Avg. Distance{distance}</li>
            <li>Est. Travel Time{travel}</li>
          </ul>
        </article>   
      

      </div>

    </section>
    </>
  );
}