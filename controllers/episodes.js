const models = require('../models')
const Episode = models.episode
const Webtoon = models.webtoon

exports.index = (req, res) => {
    const{ toon_id }= req.params
    console.log( toon_id )
    Episode.findAll({
        where: { toonId: toon_id },
        // include: [{
        //     model: Webtoon,
        //     as: "toonid"
        // }]
    }).then(toons=>
        res.send(toons),

    ).catch(err => {
        console.log(err)
    })
}

exports.show = (req, res) => {
    const { toon_id, episode_id  } = req.params
    Episode.findOne({
        where: { toonId: toon_id, id: episode_id },
          
    }).then(posts=>
        res.send(posts)
    ).catch(err => {
        console.log(err)
    })
}

exports.store = (req, res) => {
    const body = {
        title: req.body.title,
        image: req.body.image,
        toonId: req.params.toon_id,
        userId: req.params.user_id
    }
    Episode.create(body)
    .then(post=> {
        res.send({
            message: "success", 
            post
        })
    }).catch(err => {
        console.log(err)
    })
}