const router = require("express").Router();
const Materias = require("../models/Materias");

router.get("/register", async (req, res) => {
  const materia = new Materias({
    name: req.body.name,
    profesor: req.body.profesor,
    carrera: req.body.carrera,
    correo: req.body.correo,
  });

  try {
    const savedMateria = await materia.save();
    res.status(200).json({
      error: null,
      data: savedMateria,
      message: "Registro almacenado con éxito en la base de datos.",
    });
  } catch (error) {
    res.status(400).json({
      error,
      message: "Hubo un error al guardar el registro.",
    });
  }
});

router.get('/clients', async (req, res)=>{
  const clients = await Materias.find();

  if(clients){
    res.json({
      message: "Esta es la lista de clientes registrados.",
      data: clients
    })
  }else{
    res.status(400).json({
      message: "Error al cargar los datos de la BD."
    })
  }

})

module.exports = router;
