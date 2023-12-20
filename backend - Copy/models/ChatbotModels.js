import { STRING } from "sequelize";
import mysql from mysql;

const chatbosSchema = new mysql.Schema({
    userId: {
        type: STRING,
        required : true
    },
    message: {
        type: STRING,
        required : true
    },
    response: {
        type: STRING,
        required : true
    },
});

export default mysql.model("Chatbot");