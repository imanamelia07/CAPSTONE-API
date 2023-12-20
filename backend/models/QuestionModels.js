import { Sequelize } from "sequelize";
import db from "../config/Database-question.js";

const { DataTypes } = Sequelize;

const Question = db.define('question',{
  Question:{
    type: DataTypes.STRING
  }
},{
  freezeTableName:true
})

export default Question;