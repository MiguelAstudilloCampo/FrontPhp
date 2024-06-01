import React from "react";
import ModalActualizar from "./ModalActualizar";

const Tabla = ({ data, eliminarElemento, actualizarElemento }) => {
  return (
    <div className="container col-6 d-flex flex-column justify-content-center align-items-center">
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.nombre}</td>
              <td>{user.descripcion}</td>
              <td>
                <div className="d-flex gap-3 align-items-center justify-content-center">
                  <ModalActualizar
                    id={user.id}
                    nombreInicial={user.nombre}
                    descripcionInicial={user.descripcion}
                    actualizarElemento={actualizarElemento}
                  />
                  <button
                    onClick={() => eliminarElemento(user.id)}
                    className="btn btn-danger"
                  >
                    <ion-icon name="trash-outline"></ion-icon>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;
