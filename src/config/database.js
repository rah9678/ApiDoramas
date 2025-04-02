import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./src/database/dramas.sqlite",
});

export default sequelize;
