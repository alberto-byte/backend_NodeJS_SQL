const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database/conn');

const Enrollment = db.define('Enrollment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  classes: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  students: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Enrollment_Date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
})
  
module.exports = Enrollment;