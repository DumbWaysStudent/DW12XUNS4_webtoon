const models = require('../models')
const Webtoon = models.webtoon
const User = models.user

exports.index = (req, res) => {
    Webtoon.findAll({
        include: [{
            model: User,
            as: "created_by"
        }]
    }).then(posts=>
        res.send(posts)
    ).catch(err => {
        console.log(err)
    })
}
