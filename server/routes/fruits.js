// import express from "express";
const express = require('express')
const { collection } = require('../models/veg')
const router = express.Router()
const Fruit = require('../models/veg')

//Get all
router.get('/', async (req,res) => {
    try {
        const fruits = await Fruit.find({ vegType: 'fruit' })
        res.json(fruits)
    } catch (err){
        res.status(500).json({ message: err.message})
    }
})
// Get one
router.get('/:id', (req,res) => {
    res.send(req.params.id)
})

//create one
router.post('/', async (req,res) => {
    const fruit = new Fruit({
        name: req.body.name,
        id: req.body.id,
        energyKcal: req.body.energyKcal,
        protein: req.body.protein,
        fat: req.body.fat,
        carbohydrate: req.body.carbohydrate,
        vegType: 'fruit'
    })

    try {
        const newFruit = await fruit.save()
        res.status(201).json(newFruit)
    } catch (err) {
        res.status(400).json({message: err.message})
    }

})

// async function getFruits(req, res, next) {
//     try {
//         fruits = await Fruit.find({ vegType:'fruits' }).exec()
//     }
// }

//delete

module.exports = router
// export default router;