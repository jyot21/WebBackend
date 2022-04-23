const express = require('express')
const passport = require('passport')
const router = express.Router()
const upload = require('../utils/multer')

const { checkAttendence, getAllStudents, getStudentByName, studentLogin,
    updatePassword, forgotPassword, getStudentByRegName,
    postOTP, postPrivateChat, getPrivateChat, differentChats,
    previousChats, updateProfile, getAllSubjects, getMarks } = require('../controller/studentController')

router.post('/login', studentLogin)

router.post('/forgotPassword', forgotPassword)

router.post('/postOTP', postOTP)

//UPLOAD PROFILE
router.post('/updateProfile', updateProfile)

//UPLOAD PASSWORD
router.post('/updatePassword', updatePassword)    

//CHAT RELATED ROUTES    
router.get('/chat/:roomId', getPrivateChat)

router.post('/chat/:roomId', postPrivateChat)
 
router.get('/chat/newerChats/:receiverName', differentChats)
    
router.get('/chat/previousChats/:senderName', previousChats)
    
router.get('/getMarks', getMarks)

router.get('/getAllSubjects', getAllSubjects)

router.get('/checkAttendence', checkAttendence)

//HELPER ROUTES
router.post('/getAllStudents', getAllStudents)

router.post('/getStudentByRegName', getStudentByRegName)

router.post('/getStudentByName', getStudentByName)

module.exports = router