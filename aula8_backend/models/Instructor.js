// Tabela de Instrutores
const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database/conn');

const Instructors = db.define('Instructors', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  value_hour: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  diplomas: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})


module.exports = Instructors;