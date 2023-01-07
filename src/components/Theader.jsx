
import React from 'react'

function Theader() {
  return (
    <table className="table table-dark">
    <thead>
      <tr>
        <th className='id' scope="col">#</th>
        <th className='nombre' scope="col">Nombre</th>
        <th className='correo' scope="col">Correo</th>
        <th className='acciones accionesheader' scope="col">Acciones</th>
      </tr>
    </thead>
    </table>
  )
}

export default Theader