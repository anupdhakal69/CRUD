import User from '../model/userModel.js';
import express from 'express';

const router = express.Router();

//create a new user
router.post("/create", async (req, res) => {

    const { name, age, email } = req.body;

    try {
        const userAdd = await User.create({ name, age, email });
        res.status(201).res.json(userAdd);
        
    } catch (error) {
        console.log(error.message);       
        res.status(500).json({ error: error.message + "bado error" });
    }
})

//read all users
router.get("/read", async (req, res) => {

    try {
        const userRead = await User.find();
        res.status(200).json(userRead);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

//read a user by id
router.get("/read/:id", async (req, res) => {

    try {
        const singleUser = await User.findById(req.params.id);
        res.status(200).json(singleUser);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

//delete a user by id
router.delete("/delete/:id", async (req, res) => {

    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id);
        res.status(200).json(deleteUser);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

//update a user by id
router.patch("/update/:id", async (req, res) => {

    const { name, age, email } = req.body;
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updateUser);

    }  catch (error) {
        res.status(500).json({ error: error.message });
    }
})

export default router