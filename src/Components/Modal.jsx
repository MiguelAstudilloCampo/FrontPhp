import React, { useState, useEffect } from "react";
const Modal = ({ titulo, id, agregarElemento, datos }) => {
  const [nombre, setNombre] = useState(datos ? datos.nombre : "");
  const [descripcion, setDescripcion] = useState(
    datos ? datos.descripcion : ""
  );
  useEffect(() => {
    setNombre(datos ? datos.nombre : "");
    setDescripcion(datos ? datos.descripcion : "");
  }, [datos]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const datosFormulario = { nombre, descripcion };
    agregarElemento(datosFormulario);
  };
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#${id}`}
      >
        <ion-icon name="add-circle-outline"></ion-icon>
      </button>

      <div
        className="modal fade"
        id={id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header ">
              <h1 className="modal-title fs-5 " id="exampleModalLabel">
                {titulo}
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
                <form onSubmit={handleSubmit}>
                  <div className="mb-3 mt-3 d-flex flex-column gap-2">
                    <label>Nombre:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ingresa el nombre del electrodomestico"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3 mt-3 d-flex flex-column gap-2">
                    <label>Descripción:</label>
                    <input
                      type="text"
                      className="form-control desc"
                      placeholder="Ingresa la descripción de tu electrodomestico"
                      value={descripcion}
                      onChange={(e) => setDescripcion(e.target.value)}
                      required
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
                    <button type="submit" data-bs-dismiss="modal" className="btn btn-primary">
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
export default Modal;