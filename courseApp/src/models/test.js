import { DataTypes } from 'sequelize'
export default async ({ sequelize }) => {
    sequelize.define('Test', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull:false,
        }
    }, {
        underscored: true,
        tableName: 'tests',
        updatedAt:false
    })
    await sequelize.models.Test.belongsTo(sequelize.models.Level,{
        foreignKey: 'level_id'
    })
}