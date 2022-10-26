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
router.get('/:id', async (req,res) => {
    try {
        const boss = await Fruit.findOne({ id: req.params.id })
        res.json(boss)
    } catch(err) {
        res.status(500).json({ meassage: err.message })
    }
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


module.exports = router
// export default router;