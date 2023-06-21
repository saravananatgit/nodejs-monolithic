const express = require("express");

const router = express.Router();

const CourseModels = require('../models/courses')

router.post('/', async (req, res) =>  {
        const courseObject = new CourseModels({
            name: "MEAN Stack course",
             author: "saravanan",
            tags: ['node','backend'],
            isPubloshed: true,
             price : 20
            
        })
        
        const result = await courseObject.save()
 
    res.send("hey nodejs")
})


router.get('/:id', async(req, res) => {
        //eq (equal)
        //ne = not equla
        //gt = greater then
        //gte = greater then or equal to
        //lt = lesser then
        //lte = lesser then or equal to
        // in
        //nin
        const getCourse = await CourseModels
            .find({ price: { $lt: 30, } }) 
            
    res.send(req.params.id)
})

router.put('update', async(req, res) => {
   
        const findcourse = await CourseModels.findById(req);
        if (!findcourse) return;
        findcourse.set({
            price: 1000,
            isPubloshed : false
        })
    
        findcourse.save()
    console.log("get all course", findcourse)
    
    res.send("Updated")
    
})

module.exports = router;