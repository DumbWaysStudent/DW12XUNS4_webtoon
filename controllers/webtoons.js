const models = require('../models')
const Webtoon = models.webtoon
const User = models.user
const Sequelize = require('sequelize')
const Op = Sequelize.Op;


exports.index = (req, res) => {
    const favorite = req.query.is_favorite
    const title = req.query.title
    if (favorite == "true"){
        Webtoon.findAll({
            where: { isFavorite: true }
        }).then (post => res.send(post))
    } else if (favorite == "false"){        
        Webtoon.findAll({
            where: { isFavorite: false }
        }).then(post => res.send(post))
    } else if (title){
        Webtoon.findAll({
            where  : {
                title : { [Op.like] : `%${req.query.title}%` }
              }
        }).then(post => res.send(post))
    } else {
        Webtoon.findAll({
           
        }).then(post => res.send(post))
    }
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