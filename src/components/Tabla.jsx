//import { useEffect } from "react";
import { Alert } from "react-bootstrap";
import Table from "react-bootstrap/Table";

function Tabla({ colaborador, setColaborador, eliminarColaborador }) {

 
  const { id, nombre, correo } = colaborador;

  const handleEliminar = () => {
    const respuesta = window.confirm(
      "¿ Seguro deseas eliminar a un colaborador ?"
    );

    if (respuesta) {
      eliminarColaborador(id);
    }
  };

  return (
    <>
      <Table striped bordered hover variant="dark">
        <tbody>
          <tr>
            <td className="id">{id}</td>
            <td className="nombre">{nombre}</td>
            <td className="correo">{correo}</td>
            <td className="acciones accionesheader">
              <i className="bi bi-x-lg eliminar" onClick={handleEliminar}></i>
              <i className="bi bi-eye-fill" onClick={() => setColaborador(colaborador)}></i>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Tabla;
