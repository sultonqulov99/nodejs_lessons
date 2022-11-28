import { DataTypes } from 'sequelize'
export default async ({ sequelize }) => {
    sequelize.define('Tense', {
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
        tableName: 'tenses',
        updatedAt:false
    })
    // await sequelize.models.Level.hasMany(sequelize.models.Tense, {
    //     foreignKey: 'level_id',
    // })
    await sequelize.models.Tense.belongsTo(sequelize.models.Level,{
        foreignKey: 'level_id'
    })
}