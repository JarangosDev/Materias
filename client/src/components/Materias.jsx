import { useEffect, useState } from "react";
const Materias = () => {
  const [materias, setMaterias] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3005/api/user/clients")
      .then((res) => res.json())
      .then((data) => setMaterias(data.data));
  }, []);
  return (
    <>
      <h2 className="text-center my-5">Lista de estudiantes</h2>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-8">
            <table className="table table-bordered border-success border-3">
              <thead>
                <tr className="text-center">
                  <th scope="col">#</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Profesor</th>
                  <th scope="col">Materia</th>
                  <th scope="col">Correo</th>
                </tr>
              </thead>
              <tbody >
                {materias.map((item) => (
                  <tr key={item._id}>
                    <th scope="row">{item._id}</th>
                    <td>{item.name}</td>
                    <td>{item.profesor}</td>
                    <td>{item.carrera}</td>
                    <td>{item.correo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Materias;
