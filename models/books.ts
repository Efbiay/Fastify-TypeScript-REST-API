import { Database } from "../config/database"
import { Sequelize, Model, DataTypes } from 'sequelize';

export class Books extends Model {
    public id!: number;
    public name!: string;
}

Books.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "books",
    sequelize: Database
})

