const Students = require('../models/Student');

const getStudents = async(req, res)=>{
    try {
        const students = await Students.findAll();
        res.json(students);
      } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
      };
};

const addStudent = async(req, res)=>{
  try {
    const { username, password, cpf, name, email, age, phoneNumber, country } = req.body;
    const students = await Students.create({
      username,
      password,
      cpf,
      name,
      email,
      age,
      phoneNumber,
      country
    })
    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
}

module.exports={getStudents, addStudent};