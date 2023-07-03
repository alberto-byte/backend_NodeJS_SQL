const Enrollments = require('../models/Enrollment');
const Classes = require('../models/Classes');

const getEnrollments = async (req, res)=>{
    try {
        const enrollements = await Enrollments.findAll();
        res.json(enrollements);
      } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
      }
}

const addEnrollment = async (req, res)=>{
  try {

    const { studentId, classeId } = req.body

    const enrollment = await Enrollments.create({
      studentId,
      classeId
    })

    const classe = await Classes.findByPk(classeId)

    if (!classe) {
      return res.status(404).json({ message: 'Classes not found' })
    }

    if (classe.remainingVacancies === 0) {
      return res.status(400).json({ message: 'No remaining vacancy' })
    }

    classe.decrement('remainingVacancies')
    await classe.save()

    res.json(enrollment)
  } catch (error) {
    console.error(error)
    res.status(500).send('Server Error')
  }  
}

module.exports={getEnrollments, addEnrollment};