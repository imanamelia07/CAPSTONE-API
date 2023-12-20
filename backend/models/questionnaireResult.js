import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const questionnaireResult = db.define('quesionnaireResult',{
    resultDate:{
        type: DataTypes.STRING
    },
    resultQuestionnaire:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});

export default questionnaireResult;