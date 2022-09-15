import { useState } from "react";
import "./App.css";

// function Contador(props) {
//   console.log(props);
//   return (
//     <div className="App" style={{ color: props.color }}>
//       {props.message}
//     </div>
//   );
// }

const Contador = (params) => {
  const [stateAumento, updateStateAumento] = useState(params.num);

  return (
    <>
      <span>{stateAumento}</span>
      <button
        onClick={() => {
          return updateStateAumento(stateAumento + 1);
        }}
      >
        Aumentar
      </button>
      <button
        onClick={() => {
          return updateStateAumento(stateAumento - 1);
        }}
      >
        Desaumentar
      </button>
    </>
  );
};

export default Contador;
