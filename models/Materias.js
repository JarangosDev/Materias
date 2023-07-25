const mongoose = require("mongoose");

const MateriaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  profesor: {
    type: String,
    required: true,
  },
  carrera: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Materia", MateriaSchema);
