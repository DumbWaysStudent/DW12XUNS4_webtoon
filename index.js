const express = require('express')
//init bodyParser
const bodyParser = require('body-parser')
//group router
require('express-group-routes')

const app = express()
const port = 3000

const AuthController = require('./controllers/auth')
const UserController = require('./controllers/users')
const WebtoonController = require('./controllers/webtoons')

//const { authenticated } = require('./middleware')

app.use(bodyParser.json())



app.group("/api/v1", (router) => {

    router.post('/login', AuthController.login)
    router.post('/register', UserController.store)
    router.get('/webtoons', WebtoonController.index)
    
    // router.get('/webtoon', WebtoonController.store)
    // router.get('/user/:id', authenticated, UserController.show)    

})





app.listen(port, () => console.log(`Listening on port ${port}!`))