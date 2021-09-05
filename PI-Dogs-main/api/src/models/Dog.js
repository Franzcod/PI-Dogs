const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Dog", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    life_span: {
      type: DataTypes.STRING,
    },
    userCreated: {
      type: DataTypes.BOOLEAN,
      default: true,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Z4Vx8DPwA15EgaQlEaVd55HCyaETzoM9l3jF62ikyePqOztNzIRhqKIoAESnD0sJ-sg&usqp=CAU",
    },
  });
};
