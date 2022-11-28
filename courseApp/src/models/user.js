import { DataTypes } from 'sequelize'
export default ({ sequelize }) => {
    sequelize.define('User', {
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        pre_password:{
            type: DataTypes.STRING,
            allowNull: true,
        }
    }, {
        underscored: true,
        tableName: 'users',
        updatedAt:false
    })
}