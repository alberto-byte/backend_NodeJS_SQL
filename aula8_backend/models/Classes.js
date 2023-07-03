// Tabela de Cursos
const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database/conn');

const Instructor = require('./Instructor');
const Course = require('./Course');

const Classes = db.define('Classes', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  InstructorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  CourseId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  end_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
})

Classes.belongsTo(Instructor);
Classes.belongsTo(Course);
  
module.exports = Classes;