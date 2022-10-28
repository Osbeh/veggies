const express = require('express')
const { collection } = require('../models/veg')
const router = express.Router()
const Vegetable = require('../models/veg')

//Get all
router.get('/', async (req,res) => {
    try {
        const vegetables = await Vegetable.find({ vegType: 'vegetable' })
        res.json(vegetables)
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
    const vegetable = new Vegetable({
        name: req.body.name,
        id: req.body.id,
        energyKcal: req.body.energyKcal,
        protein: req.body.protein,
        fat: req.body.fat,
        carbohydrate: req.body.carbohydrate,
        vegType: 'vegetable'
    })

    try {
        const newVegetable = await vegetable.save()
        res.status(201).json(newVegetable)
    } catch (err) {
        res.status(400).json({message: err.message})
    }

})


module.exports = router
// export default router;