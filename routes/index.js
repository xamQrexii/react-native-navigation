import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';
import Login from '../screens/Login';

// stack navigator
// const AppNavigator = createStackNavigator({
//     Home: {
//         screen: Home
//     },
//     About: {
//         screen: About
//     },
//     Contact: {
//         screen: Contact
//     }
// });
// export default createAppContainer(AppNavigator);

// tab navigator
// const TabNavigator = createBottomTabNavigator({
//     Home: {
//         screen: Home
//     },
//     About: {
//         screen: About
//     },
//     Contact: {
//         screen: Contact
//     }
// });
// export default createAppContainer(TabNavigator);

// drawer navigator
// const DrawerNavigator = createDrawerNavigator({
//     Home: {
//         screen: Home
//     },
//     About: {
//         screen: About
//     },
//     Contact: {
//         screen: Contact
//     }
// });
// export default createAppContainer(DrawerNavigator);


// multiple navigator
const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: Home
    },
    About: {
        screen: About
    },
    Contact: {
        screen: Contact
    }
}, {
    drawerBackgroundColor: 'lightgrey',
    drawerType: 'slide'
});

const AppNavigator = createStackNavigator({
    Login: {
        screen: Login
    },
    Home:{
        screen: DrawerNavigator
    }
});


export default createAppContainer(AppNavigator);








