// import express from "express";
const express = require('express')
const router = express.Router()

//Get all
router.get('/', (req,res) => {
    res.send('Hello')
})
// Get one
router.get('/:id', (req,res) => {

})

//create one
router.post('/', (req,res) => {

})

//delete

module.exports = router
// export default router;