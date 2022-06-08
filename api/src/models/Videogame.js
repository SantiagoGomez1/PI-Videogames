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
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      released: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
      },
      image: {
        type: DataTypes.STRING,
        defaultValue:
          "https://i.pinimg.com/originals/24/58/5f/24585fc9b7433a224a6ff5506e346969.png",
      },
      rating: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 5,
        },
      },
      platform: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
