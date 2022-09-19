import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/Home'
import {Announces } from '../screens/Announces'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes(){
  return(
    <Navigator screenOptions={{ headerShown: false}}>
      <Screen 
        name='home'
        component={Home}
        
       />
       <Screen 
        name='announces'
        component={Announces}
       />
    </Navigator>
  )
}