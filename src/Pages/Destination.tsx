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

      <div>
        <article>
          <img src={images.png} alt={name} title={name}/>
        </article>

        <article>
          <h2>{name}</h2>
          <p>{destinations}</p>
          <ul>
            <li>Avg. Distance{distance}</li>
            <li>Est. Travel Time{travel}</li>
          </ul>
        </article>
        {planets.map((item ,index) => (
          <button key={index} onClick={() => 
            setValue(index)} className="uppercase
            text-white text-2xl pb-2 border-b">
            {item.name}


          </button>
        ))}

      </div>

    </section>
    </>
  );
}