import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const chatbot = db.define('chatbot',{
    tags:{
        type: DataTypes.STRING
    },
    Question:{
        type: DataTypes.STRING
    },
    Answer:{
        type: DataTypes.STRING
    },
},{
    freezeTableName: true
});

export default chatbot;