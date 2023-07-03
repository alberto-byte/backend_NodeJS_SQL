const Instructors = require('../models/Instructor');

const getInstructors = async (req, res)=>{
    try {
        const instructors = await Instructors.findAll();
        res.json(instructors);
      } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
      }
}

const addInstructor = async (req, res)=>{
  try {
    const { name, email, value_hours, diplomas  } = req.body
    const instructor = await Instructors.create({
      name,
      email,
      value_hours,
      diplomas
    })
    res.json(instructor)
  } catch (error) {
    console.error(error)
    res.status(500).send('Server Error');
  }  
}

module.exports={getInstructors, addInstructor};