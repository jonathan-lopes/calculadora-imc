import "./app.css";
import { useState } from "react";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [message, setMessage] = useState("");

  function calculateIMC() {
    const alt = height / 100;
    const imc = weight / (alt * alt);

    if (imc < 18.5) {
      setMessage("Você está abaixo do peso! Seu IMC: " + imc.toFixed(2));
    } else if (imc >= 18.5 && imc < 24.9) {
      setMessage("Peso ideal! Seu IMC: " + imc.toFixed(2));
    } else if (imc >= 25 && imc < 29.9) {
      setMessage(
        "Você está levemente acima do peso! Seu IMC: " + imc.toFixed(2)
      );
    } else if (imc >= 30 && imc < 34.9) {
      setMessage("Obesidade (Grau 1)! Seu IMC: " + imc.toFixed(2));
    } else if (imc >= 35 && imc < 39.9) {
      setMessage("Obesidade Severa (Grau 2)! Seu IMC: " + imc.toFixed(2));
    } else if (imc >= 40) {
      setMessage("Obesidade Mórbida (Grau 3)! Seu IMC: " + imc.toFixed(2));
    }
  }

  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu imc</span>

      <div className="area-input">
        <input
          type="text"
          name=""
          placeholder="Peso em (kg) Ex: 90"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="text"
          name=""
          placeholder="Altura em (cm) Ex: 180"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <button onClick={calculateIMC}>Calcular</button>
      </div>

      <h2>{message}</h2>
    </div>
  );
}

export default App;
