import React, { useState, useEffect } from "react";
import "./App.css";
import Tabla from "./Components/Tabla";
import Modal from "./Components/Modal";
import Swal from "sweetalert2";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost/Miproyecto/proyecto1/Api/api.php")
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  const eliminarElemento = (id) => {
    Swal.fire({
      title: "Eliminar",
      text: "Estas seguro?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "No",
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost/Miproyecto/proyecto1/Api/api.php`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: id }),
        })
          .then((response) => response.json())
          .then((data) => {
            fetchData();
            Swal.fire(
              "¡Eliminado!",
              "El elemento ha sido eliminado.",
              "success"
            );
          });
      }
    });
  };

  const agregarElemento = (datos) => {
    fetch("http://localhost/Miproyecto/proyecto1/Api/api.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    })
      .then((response) => response.json())
      .then(() => {
        fetchData();
        Swal.fire("¡Agregado!", "El elemento ha sido agregado.", "success");
      });
  };

  const actualizarElemento = (id, datos) => {
    fetch(`http://localhost/Miproyecto/proyecto1/Api/api.php`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, ...datos }),
    })
      .then((response) => response.json())
      .then(() => {
        fetchData();
        Swal.fire(
          "¡Actualizado!",
          "El elemento ha sido actualizado.",
          "success"
        );
      });
  };

  return (
    <div className="p-5 d-flex flex-column gap-4 align-items-center">
      <Tabla
        data={data}
        eliminarElemento={eliminarElemento}
        actualizarElemento={actualizarElemento}
      />

      <Modal
        titulo="Formulario Agregar"
        id="modalAgregar"
        agregarElemento={agregarElemento}
      />
    </div>
  );
}

export default App;
