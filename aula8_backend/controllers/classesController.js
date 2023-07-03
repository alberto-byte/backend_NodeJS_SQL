const Instructors = require('../models/Instructor');
const Courses = require('../models/Course');
const Classes = require('../models/Classes');

const getClasses = async (req, res)=>{
    try {
        const classes = await Classes.findAll();
        res.json(classes);
      } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
      }
}

const addClasse = async (req, res)=>{
  try {

    const { InstructorId, CourseId } = req.body

    const classes = await Classes.create({
      InstructorId,
      CourseId
    })

    const instructor = await Instructors.findByPk(InstructorId)

    if (!instructor) {
      return res.status(404).json({ message: 'Instructor not found' })
    }

    const courses = await Courses.findByPk(CourseId)

    if (!courses) {
      return res.status(404).json({ message: 'Course not found' })
    }

    await travelPackage.save()

    res.json(classes)
  } catch (error) {
    console.error(error)
    res.status(500).send('Server Error')
  }  
}

module.exports={getClasses, addClasse};