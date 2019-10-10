import { createAppContainer } from 'react-navigation'
import { createStackNavigator }  from 'react-navigation-stack'

import Login from '../component/Login';
// import DetailScreen from '../component/DetailScreen';


const MainRoute = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
})

export default MainRoute

