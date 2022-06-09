const bcrypt = require('bcryptjs');
const { User } = require('../../models');
const errorHandle = require('../../../utils/errorHandle');
module.exports = async (req, res) => {
    try {
        await User.sync({ force: false })
        let id = req.params.id
        let { name,
            phone_number,
            email } = req.body
        let updateuser = await User.update({
            "name": name,
            "email": email,
            "phone_number": phone_number
        }, {
            where: {
                id: id
            }
        })
        res.send({ message: "Updated Sucessfully." })
    } catch (err) {
        console.log(err);
        const { status, message, error } = errorHandle(err);
        res.status(status).json({ status, message, error })
    }
}