import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import BottomTabNavigator from './BottomTabNavigator';
// import Detail from '../screen/init/Detail';
// import MoreDetail from '../screen/init/MoreDetail'

const UserRoute = createStackNavigator({
    BottomTabNavigator : {
        screen : BottomTabNavigator,
        navigationOptions :{
            header : null
        }
    }
})



export default createAppContainer(UserRoute)