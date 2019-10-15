const models = require('../models')
const Webtoon = models.webtoon
const User = models.user

exports.index = (req, res) => {
    const favorite = req.query.is_favorite
    console.log(favorite)
    Webtoon.findAll({
    
    }).then(toons=>
        res.send(toons)
        
    ).catch(err => {
        console.log(err)
    })
}

exports.index2 = (req, res) => {
    const favorite = req.query.is_favorite
    console.log(favorite)
    Webtoon.findAll({
        where: { isFavorite: true },
    }).then(posts=>
        res.send(posts)
    ).catch(err => {
        console.log(err)
    })
}
exports.show = (req, res) => {
    const { toon_id } = req.params
    Webtoon.findOne({
        where: { id: toon_id },
          include: [{
            model: User,
            as: "userid"
        }]
    }).then(posts=>
        res.send(posts)
    ).catch(err => {
        console.log(err)
    })
}