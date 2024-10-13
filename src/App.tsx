import { useEffect, useState } from "react";

import { worker } from "./mocks/browser";
import type { Bird } from "./data/birds";

worker.start();

function App() {
  const [birds, setBirds] = useState<Bird[]>([]);
  useEffect(() => {
    async function getBirds() {
      try {
        const response = await fetch("https://birdsift.com/api/birds");
        const json = await response.json();
        setBirds(json);
      } catch (error) {
        console.error(error);
      }
    }
    getBirds();
  }, []);

  return (
    <>
      <h1>BirdSift</h1>
      <div>
        {birds.map((bird) => (
          <div key={bird.name}>
            <h2>
              {bird.emoji} {bird.name}
            </h2>
            <p>{bird.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
