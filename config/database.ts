import { Sequelize } from "sequelize";
import { config } from "dotenv";

config();
export const Database = new Sequelize({
    dialect: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    logging: false,
    define: {
        timestamps: false,
    },
});

export default Database;

