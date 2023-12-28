const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const {username,password}=req.body;
    await User.create({username:username,password:password});
    res.send("User created successfully")
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    const courses=Course.find();
    res.json(courses);
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    console.log(req.params.courseId);
    const course=await Course.findOne({courseId:req.params.courseId})
    res.send(course);
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});


module.exports=router