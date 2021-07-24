import { DataTypes } from 'sequelize';

import sequelize from '../connectors/sequelize';

export default sequelize.define('author', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    firstname: { type: DataTypes.TEXT, allowNull: false },
    lastname: { type: DataTypes.TEXT, allowNull: false },
}, {
    timestamps: false
});
