// import express from "express";
const express = require('express')
const { collection } = require('../models/veg')
const router = express.Router()
const Root = require('../models/veg')

//Get all
router.get('/', async (req,res) => {
    try {
        const roots = await Root.find({ vegType: 'root' })
        res.json(roots)
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
    const root = new Root({
        name: req.body.name,
        id: req.body.id,
        energyKcal: req.body.energyKcal,
        protein: req.body.protein,
        fat: req.body.fat,
        carbohydrate: req.body.carbohydrate,
        vegType: 'root'
    })

    try {
        const newRoot = await root.save()
        res.status(201).json(newRoot)
    } catch (err) {
        res.status(400).json({message: err.message})
    }

})


module.exports = router