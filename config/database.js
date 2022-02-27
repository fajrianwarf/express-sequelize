import { Sequelize } from "sequelize";

const db = new Sequelize('data_eduwork', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;