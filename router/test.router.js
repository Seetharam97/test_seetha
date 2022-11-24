"use strict";

const router = require("express").Router();
const markModel = require("../models/test.model");

// post api
router.post("/addMark", async(req, res)=>{
    try {
        console.log(req.body)
        const mark = new markModel(req.body)
        const result = await mark.save(); 
        res.status(200).json({"status": "suceess", message: "Mark added successfully!", result: result})
    } catch (error) {
        res.status(500).json({"status": "failure", "message": error.message })
    }
});

// get method or fetch
router.get("/getAllStudentMark", async(req, res)=>{
    try {
        const result = await markModel.find()
        res.status(200).json({"status": "suceess", message: "Mark detals fetched successfully!", result: result})
    } catch (error) {
        res.status(500).json({"status": "failure", "message": error.message })
    }
});

// get individual student marks
router.get("/getIndividualStudentMark", async(req, res)=>{
    try {
        const condition = {"roll_no": req.query.roll_no}
        const result = await markModel.findOne(condition)
        if(!result){
            res.status(404).json({"status": "failure", message: "no mark details available for this student!"})
        }
        res.status(200).json({"status": "suceess", message: "Mark detals fetched successfully!", result: result})
    } catch (error) {
        res.status(500).json({"status": "failure", "message": error.message })
    }
});

//update the mark details
router.put("/updateTheMark/:roll_no", async(req, res)=>{
    try {
        let condition = {roll_no: req.params.roll_no}
        let updatedData = req.body
        let option = {new: true}

        let result = await markModel.findOneAndUpdate(condition, updatedData, option)

        res.status(200).json({"status": "suceess", message: "Mark detals updated successfully!", result: result})
    } catch (error) {
        res.status(500).json({"status": "failure", "message": error.message })
    }
});

// delete method
router.delete("/deleteMarkDetails", async(req, res)=>{
    try {
        console.log(req.body)
        await markModel.findOneAndDelete(req.body)
        res.status(200).json({"status": "suceess", message: "Mark details deleted successfully!"})
    } catch (error) {
        res.status(500).json({"status": "failure", "message": error.message })
    }
})

module.exports = router;