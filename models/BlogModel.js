//importando la conexion a la base de datos
import db from "../database/db.js";
import { DataTypes } from "sequelize";

const BlogModel = db.define("caracteristicasEquipos", {
  nombre: { type: DataTypes.STRING },
  version: { type: DataTypes.STRING },
  display: { type: DataTypes.STRING },
  cam_princ: { type: DataTypes.STRING },
  cam_cant: { type: DataTypes.STRING },
  cam_front: { type: DataTypes.STRING },
  mem_int: { type: DataTypes.STRING },
  mem_exp: { type: DataTypes.STRING },
  nucleos: { type: DataTypes.STRING },
  ghz: { type: DataTypes.STRING },
  ram: { type: DataTypes.STRING },
  peso: { type: DataTypes.STRING },
  altura: { type: DataTypes.STRING },
  anchura: { type: DataTypes.STRING },
  grosor: { type: DataTypes.STRING },
  bateria: { type: DataTypes.STRING },
  red: { type: DataTypes.STRING },

})

export default BlogModel;