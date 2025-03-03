const user = require("../model/UserModel")

const creat = async (req, res) => {
    try {
    const userData = new user(req.body)

    if(!userData){
        return res.status(404).json({message: "Not Found Any Data"})
    }

    const saveUserData = await userData.save()
    res.status(200).json(saveUserData) 
    } 
    catch (error) {
        res.status(500).json({error: error})
    }
}  

const getAll = async (req, res) => {
    try {

        const userData = await user.find()
        if(!userData){
            res.status(404).json({message: "Data Not Found"})
        }
        res.status(200).json(userData)

    } catch (error) {
        res.status(500).json({error: error})
    }
}

const getOne = async (req, res) => {
    try {
        const id = req.params.id
    const userExist = await user.findById(id)
    if(!userExist){
        res.status(404).json({message: "User Not Found"})
    }
    res.status(200).json(userExist)
    } catch (error) {
        res.status(500).json({error: error})
    }
}

const Update = async (req, res) => {

    try { 
        const id = req.params.id
    const userExist = await user.findById(id)
    if(!userExist){
        return res.status(401).json({message: "User Not Found"})
    }
    const updatedUser = await user.findByIdAndUpdate(id, req.body, {new: true})
    res.status(200).json({message:"User Updated Successfully",updatedUser})
    } catch (error) {
        res.status(500).json({error: error})
    }

}

const deleteUser = async (req, res) =>{
    try {
        const id = req.params.id
        const userExist = await user.findById(id)
        if(!userExist){
            res.status(404).json({message: "User Not Found"})
        }
        await user.findByIdAndDelete(id)
        res.status(200).json({message: "User Deleted Sucessfully"})
    } catch (error) {
        
    }
}

module.exports = {
    creat,
    getAll,
    getOne,
    Update,
    deleteUser
}