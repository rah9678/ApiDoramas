import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Drama = sequelize.define(
  "Drama",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
    },
    year: {
      type: DataTypes.INTEGER,
    },
    rating: {
      type: DataTypes.FLOAT, // Corrigido: antes estava "ratting"
    },
  },
  {
    timestamps: false,
  }
);

export default Drama;
