const bcrypt = require('bcryptjs');
const { User } = require('../../models');
const errorHandle = require('../../../utils/errorHandle');
module.exports = async (req, res) => {
    try {
        await User.sync({ force: false })
        let id = req.params.id
        let listuserbyuserid = await User.findAll({
            where: {
                id: id
            }
        })
        if (listuserbyuserid.length > 0) {
            res.send(listuserbyuserid[0])
        }
        else {
            res.send({ message: "User Id not found" })
        }
    } catch (err) {
        console.log(err);
        const { status, message, error } = errorHandle(err);
        res.status(status).json({ status, message, error })
    }
}