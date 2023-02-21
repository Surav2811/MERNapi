const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const User = require('../model/user')

// GET
router.get('/',async (req,res) => {
    try{
        await res.send("You are at the HOMEPAGE")
    } catch (ex) {
        res.status(404).send("Page not found")
    }
})
// // POST
router.post('/register',async (req,res) => {
    const user = new User({
        name : req.body.name,
        phoneNumber : req.body.phoneNumber,
        emailID : req.body.emailID
    })
    try{
        newUser = await user.save()
        res.send("Successfully created a User!!")
    } catch (ex) {
        console.error(error)
    }

})

// PUT
router.put('/update/:id',async (req,res) => {
    const user = await User.findById(req.params.id)

    user.name = req.body.name
    user.phoneNumber = req.body.phoneNumber
    user.emailID = req.body.emailID
    user.dateCreated = Date.now()
    try{
        await user.save()
        res.send("Successfully Updated")

    } catch (ex) {
        res.status(400).json({ message : ex.message})
    }

})
// PATCH
router.patch('/updateEmailID/:id',async (req,res) => {
    const user = await User.findById(req.params.id)

    user.emailID = req.body.emailID
    try{
        await user.save()
        res.send("Successfully updated email ID")
    } catch (ex) {
        res.status(400).json({ message : ex.message})
    }

})

// DELETE
router.delete('/delete/:id',async (req,res) => {
    let user
    try{
        user = await User.findById(req.params.id)
        await user.remove()
        res.send("Successfully deleted")
    } catch (ex) {
        res.status(400).json({ message : ex.message})
    }

})
module.exports = router