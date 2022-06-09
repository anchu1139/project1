const bcrypt = require('bcryptjs');
const { User } = require('../../models');
const errorHandle = require('../../../utils/errorHandle');
module.exports = async (req, res) => {
    try {
        await User.sync({ force: false })
        let id = req.params.id
        let deletestudent=await User.destroy({
            where:{
                id:id
            }
        })
        res.send({message:"Deleted Sucessfully."})
    } catch (err) {
        console.log(err);
        const { status, message, error } = errorHandle(err);
        res.status(status).json({ status, message, error })
    }
}