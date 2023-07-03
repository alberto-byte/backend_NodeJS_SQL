// const  = require('../models/Enrollment');
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

    // const travelPackage = await TravelPackage.findByPk(travelPackageId)

    // if (!travelPackage) {
    //   return res.status(404).json({ message: 'TravelPackage not found' })
    // }

    // if (travelPackage.remainingVacancies === 0) {
    //   return res.status(400).json({ message: 'No remaining vacancy' })
    // }

    // travelPackage.decrement('remainingVacancies')
    // await travelPackage.save()

    res.json(classes)
  } catch (error) {
    console.error(error)
    res.status(500).send('Server Error')
  }  
}

module.exports={getClasses, addClasse};