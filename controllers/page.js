const models =  require('../models')
const Image = models.page


exports.show = (req, res) => {
    const { episode_id  } = req.params
    
    Image.findAll({
        where: { episodeId: episode_id },
          
    }).then(posts=>
        res.send(posts)
    ).catch(err => {
        console.log(err)
    })
}

exports.store = (req, res) => {
    const body = {
        page: req.body.page,
        image: req.body.image,
        episodeId: req.params.episode_id
    }
    Image.create(body)
    .then(post=> {
        res.send({
            message: "success", 
            post
        })
    }).catch(err => {
        console.log(err)
    })
}