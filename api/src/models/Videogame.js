const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Videogame",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        unique:true,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      released: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
      rating: {
        type: DataTypes.FLOAT,
        validate: {
          min: 1,
          max: 5,
        },
      },
      platforms: {
        type: DataTypes.JSON,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
