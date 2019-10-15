const models = require('../models')
const Episode = models.episode
const Webtoon = models.webtoon

exports.index = (req, res) => {
     const { toon_id} = req.params.Webtoon
    console.log(req.params)
    Episode.findAll({
        //where: { id },
        // include: [{
        //     model: Webtoon,
        //     as: "episode"
        // }]
    }).then(toons=>
        res.send(toons),

    ).catch(err => {
        console.log(err)
    })
} 