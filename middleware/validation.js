const isHexcolor = require('is-hexcolor');

const checkValid = (req, res, next) => {
    const title = req.body.title
    const color = req.body.color
    const priority = req.body.priority

    if (!(isHexcolor(color))) {
        return res.status(400).send({
            errors: 'color shoud be hexa value'
        })
    }

    if (!title || !color || !priority) {
        return res.status(400).send({
            errors: 'all fields are required'
        })
    }

    next();
}

module.exports = checkValid;