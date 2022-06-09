const bcrypt = require('bcryptjs');
const { User } = require('../../models');
const errorHandle = require('../../../utils/errorHandle');
module.exports = async (req, res) => {
    try {
        await User.sync({ force: false })
        let {
            name,
            phone_number,
            email,
            password
        } = req.body
        let checkuser = await User.findAll({
            where: {
                phone_number: phone_number
            }
        })
        if (checkuser.length > 0) {
            res.status(409).json({
                message: "User already exsists"
            })
        }
        else {
            let createuser = await User.create({
                name: name,
                phone_number: phone_number,
                email: email,
                password: password
            })
            res.send({ message: "User created successfully" })
        }
    } catch (err) {
        console.log(err);
        const { status, message, error } = errorHandle(err);
        res.status(status).json({ status, message, error })
    }
}