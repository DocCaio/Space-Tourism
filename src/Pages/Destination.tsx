import { useState } from "react";
import { destinations } from "../starter-code/data.json";



export default function Destination() {
  const [planets] = useState(destinations)
  const [value , setValue] =useState(0)
  return (
    <div>
      <h1>Crew page</h1>
    </div>
  );
}