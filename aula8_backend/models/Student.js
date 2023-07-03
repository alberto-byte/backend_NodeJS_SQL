// Tabela de Studantes
const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database/conn');

const bcrypt = require('bcrypt')

const Students = db.define('Student', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

Students.beforeCreate(async (student) => {    
  console.log(student.password);
  const passwordHash = await bcrypt.hash(student.password, 10);
  console.log(passwordHash);
  student.password = passwordHash;
})

module.exports = Students;