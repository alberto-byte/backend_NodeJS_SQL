const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Students = require('../models/Student');
class AuthenticationController {
    static async login(req, res) {
      try {
        const { username, password } = req.body;
          
        const student = await Students.findOne({ where: { username } });
        
        if (!student) {
          return res.status(401).json({ message: 'Invalid student' });
        }
          
        const compareResult = await bcrypt.compare(password, student.password);

        if (!compareResult) {
          return res.status(401).json({ message: 'Invalid password' });
        }

        const token= jwt.sign({id:student.id, username:student.username}, 'secret_key');

        return res.status(200).json({auth:true, token: token});
        
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
    }

    static async logout(req, res) {
      return res.json({auth:false, token: null});
    }
  }
  
  module.exports = AuthenticationController;