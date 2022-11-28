import { DataTypes } from 'sequelize'
export default ({ sequelize }) => {
    sequelize.define('Level', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        level_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull:false,
        }
    }, {
        underscored: true,
        tableName: 'levels',
        updatedAt:false
    })
}