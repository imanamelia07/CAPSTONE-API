import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

const Question = db.define("questions", {
    questionId: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    question: {
      type: DataTypes.STRING,
      required: true,
    },

    // Tambahan untuk relasi belongsTo ke model/Users.
    user: {
        type : Sequelize.STRING,
        references: {
            model: Users,
            key: "id",
        },
    },
  });
  
export default Question;