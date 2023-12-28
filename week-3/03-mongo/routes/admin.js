const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const {username,password}=req.body;
    await Admin.create({username:username,password:password});
    res.send("Admin created successfully");
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    let course=await Course.create({
        courseId:req.body.courseId,
        title:req.body.title,
        description:req.body.description,
        price:req.body.price,
        imageLink:req.body.imageLink
    })
    res.json({
        message:"Course created successfully",
        id:course.courseId,
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    let courses=await Course.find();
    res.send(courses)
});

module.exports = router;