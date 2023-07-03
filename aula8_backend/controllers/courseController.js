const Courses = require('../models/Course');

const getCourses = async (req, res)=>{
    try {
        const courses = await Courses.findAll();
        res.json(courses);
      } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
      }
}

const addCourse = async (req, res)=>{
  try {
    const { name, requeriment, price, start_date, end_date  } = req.body;
    const courses = await Courses.create({
      name,
      requeriment,
      price,
      start_date,
      end_date
    })
    res.json(courses)
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }  
}

module.exports={getCourses, addCourse};