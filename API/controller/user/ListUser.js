const bcrypt = require('bcryptjs');
const { User } = require('../../models');
const errorHandle = require('../../../utils/errorHandle');
module.exports = async (req, res) => {
    try {
        await User.sync({ force: false })
        let limit = parseInt(req.query.limit) || 10;
        let page = req.query.page || 1;
        let offset = 0 + (parseInt(page) - 1) * limit
        let listuser = await User.findAll({
            offset: offset,
            limit: limit,
            order: [
                ['createdAt', 'ASC']
            ],
        })
        res.send(listuser)
    } catch (err) {
        console.log(err);
        const { status, message, error } = errorHandle(err);
        res.status(status).json({ status, message, error })
    }
}