import React, { useState } from "react";

const ModalActualizar = ({
  actualizarElemento,
  id,
  nombreInicial,
  descripcionInicial,
}) => {
  const [nombre, setNombre] = useState(nombreInicial);
  const [descripcion, setDescripcion] = useState(descripcionInicial);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };

  const handleActualizar = () => {
    actualizarElemento(id, { nombre, descripcion });
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#exampleModal${id}`}
      >
        <ion-icon name="create-outline"></ion-icon>
      </button>

      <div
        className="modal fade"
        id={`exampleModal${id}`}
        tabIndex="-1"
        aria-labelledby={`exampleModalLabel${id}`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id={`exampleModalLabel${id}`}>
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container mt-3">
                <form>
                  <div className="mb-3 mt-3 d-flex flex-column gap-2">
                    <label htmlFor="">Nombre:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ingresa el nombre del electrodomestico"
                      name="nombre"
                      value={nombre}
                      onChange={handleNombreChange}
                    />
                  </div>
                  <div className="mb-3 mt-3 d-flex flex-column gap-2">
                    <label htmlFor="">Descripción:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ingresa la descripción de tu electrodomestico"
                      value={descripcion}
                      onChange={handleDescripcionChange}
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cerrar
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleActualizar}
                      data-bs-dismiss="modal"
                    >
                      Guardar Cambios
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalActualizar;
