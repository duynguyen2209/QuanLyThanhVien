const router = require("express").Router()
const User = require("../models/customer")

//Create newCustomer

router.post("/new", async (req, res) => {
    const newCustomer = new User(req.body);
    try {
        const savedCustomer = await newCustomer.save()
        res.status(201).json(savedCustomer)
    } catch (err) {
        res.status(500).json(err)
    }
})


//Delete user

router.delete("/:id", async (req, res) => {
    console.log(req.params);
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(201).json({
            EM:"Delete success"
        })

    } catch (err) {
        res.status(500).json(err)
    }
})

// Get userr


router.get("/", async (req, res) => {
    try {
        const savedCustomer = await User.find()
        res.status(201).json(savedCustomer)
    } catch (err) {
        res.status(500).json(err)
    }
})



module.exports = router