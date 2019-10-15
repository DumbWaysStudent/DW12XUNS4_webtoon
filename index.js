const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = 3000

const AuthController = require('./controllers/auth')
const UserController = require('./controllers/users')
const WebtoonController = require('./controllers/webtoons')
const EpisodeController = require('./controllers/episodes')

const { authenticated } = require('./middleware')

app.use(bodyParser.json())



app.group("/api/v1", (router) => {

    router.post('/login', AuthController.login)
    
    router.post('/register', UserController.store)
    router.get('/user/:user_id/webtoons', UserController.show)

    router.get('/webtoons', WebtoonController.index)
    router.get('/webtoon/:toon_id', WebtoonController.show)
    router.get('/webtoon/:toon_id/episodes', EpisodeController.index)
    router.get('/webtoon/:toon_id/episode/:episode_id', EpisodeController.show)
    //router.get('/webtoonss', WebtoonController.index2)
    
    // router.get('/webtoon', WebtoonController.store)
    // router.get('/user/:id', authenticated, UserController.show)    

})





app.listen(port, () => console.log(`Listening on port ${port}!`))