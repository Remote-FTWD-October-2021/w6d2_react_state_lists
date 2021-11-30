import { useState } from "react";

import "./App.css";

//Components
import Animal from "./Animal";

function App() {
  //Como argumento del useState() vamos a pasarle el valor que queremos que mi estado tenga por defecto cuando lo creamos

  // const myFirstState = useState(0);
  // const actualState = myFirstState[0];
  // const setActualState = myFirstState[1];

  const [counter, setCounter] = useState(0);
  const [valueFromInput, setValueFromInput] = useState("");
  const [animals, setAnimals] = useState([
    "cat",
    "jaguar",
    "bat",
    "eagle",
    "horse",
  ]);

  const deleteAnimal = (animalFromChild) => {
    const filteredAnimals = animals.filter((item) => {
      return item !== animalFromChild;
    });
    setAnimals(filteredAnimals);
  };

  return (
    <div className="App">
      <h1>Nueva app</h1>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter - 1)}>RESTAR</button>
      <button onClick={() => setCounter(counter + 1)}>SUMAR</button>
      <div>
        <input
          type="text"
          onChange={(event) => setValueFromInput(event.target.value)}
        />
        <h2>What I am typing: {valueFromInput}</h2>
      </div>
      <div className="flex-space">
        {animals.map((animal, index) => {
          return (
            <Animal
              animal={animal}
              key={index + Date.now()}
              deleteAnimal={deleteAnimal}
            />
          );
        })}
      </div>

      {/* [<Animal /> <Animal /> <Animal /> <Animal /> <Animal />] */}
    </div>
  );
}

export default App;

//A TENER EN CUENTA

// - Siempre que cambia el estado en React, el componente se re-renderiza
// - El estado en React es inmutable. SIEMPRE que queramos "cambiar"(sustituir) el estado, hay que utilizar la función que nos da useState()[1]. Esta función nos la da React para cambiar ese estado en específico.

// findInput.addEventListener('change', (event)=>{
//   console.log(event.target.value)
// })
