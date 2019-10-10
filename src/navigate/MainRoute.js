import { createAppContainer } from 'react-navigation'
import { createStackNavigator }  from 'react-navigation-stack'

import Login from '../component/Login'

const MainRoute = createStackNavigator({
    Login : {
        screen : Login,
        navigationOptions : {
            header : null
        }
    },
})

export default createAppContainer(MainRoute)