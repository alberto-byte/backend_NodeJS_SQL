// Tabela de Inscricao / matricula
const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database/conn');

const Classes = require('./Classes');
const Student = require('./Student');

const Enrollment = db.define('Enrollment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  classeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  studentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  enrollment_Date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  enrollment_available: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  maxStudents: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  remainingVacancies: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
})

Enrollment.belongsTo(Classes);
Enrollment.belongsTo(Student);
  
module.exports = Enrollment;