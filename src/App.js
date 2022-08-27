import "./App.css";
import Formulario from "./components/Formulario";
import Buscador from "./components/Buscador";
import Tabla from "./components/Tabla";
import { BaseColaboradores } from "./data/BaseColaboradores.js";
import { useEffect, useState } from "react";
import Theader from "./components/Theader";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [colabo, setColaborador] = useState({});

  function buscar(e) {
    e.preventDefault();
    console.log(e.target.value);

    if (e.target.value) {
      const search = colaboradores.filter((colaborador) => {
        if (
          colaborador.nombre.trim().toLocaleLowerCase().includes(e.target.value)
        ) {
          return colaborador;
        }
      });
      setColaboradores(search);
    }
  }

  function eliminarColaborador(id) {
    const colaboradoresUpdate = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );

    setColaboradores(colaboradoresUpdate);
  }

  return (
    <>
      <div className="contenedor">
        <Buscador buscar={buscar} />
        <div className="container mt-5">
          <Formulario
            setColaboradores={setColaboradores}
            colaboradores={colaboradores}
            colabo={colabo}
          />

          <div className="mt-5">
            <Theader />

            {colaboradores.map((colaborador) => (
              <Tabla
                className="tabla"
                key={colaborador.id}
                colaborador={colaborador}
                setColaborador={setColaborador}
                eliminarColaborador={eliminarColaborador}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
