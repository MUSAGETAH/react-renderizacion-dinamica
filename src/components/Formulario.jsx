import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";

function Formulario({colaboradores, setColaboradores, colabo}) {
  const [nombre, setNombre] = useState("");
  const [correo, setEmail] = useState("");
  const [error, setError] = useState(false);

  // presiono el boton de ver y cambia el objeto
  // relleno nuevamente el fomrulario con los datos del objeto presionado
  useEffect(()=>{
    if(Object.keys(colabo).length > 0){
     setNombre(colabo.nombre)
     setEmail(colabo.correo)
    }}, [colabo])

  function getNombre(e) {
    console.log(e.target.value);
    setNombre(e.target.value);
  }

  function getEmail(e) {
    console.log(e.target.value);
    setEmail(e.target.value);
  }

  function generarId(){
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  function guardarDatosColaboradorForm(e) {
    e.preventDefault();

    
    if([nombre, correo].includes('')){
      setError(true)

      return
    }

    setError(false)
    
    const objetOcolaborador = {
      id: generarId(),
      nombre: nombre,
      correo: correo,
    };


    setColaboradores([...colaboradores, objetOcolaborador])

    limpiarFormulario()
  }
  function limpiarFormulario() {
    setNombre("");
    setEmail("");
  }

  return (
    <>
          {error && (
            <div className="error1">
              <p>Todos los campos son obligatorios</p>
            </div>
          )}
      <Form onSubmit={guardarDatosColaboradorForm}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre del colaborador</Form.Label>
          <Form.Control
            type="text"
            value={nombre}
            placeholder="Ingresa el nombre del colaborador"
            onChange={getNombre}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email del colaborador</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresa el email del colaborador"
            value={correo}
            onChange={getEmail}
          />
        </Form.Group>
        <Button variant="dark" type="submit">
          Guardar
        </Button>
      </Form>
    </>
  );
}

export default Formulario;
