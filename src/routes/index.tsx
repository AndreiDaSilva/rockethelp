import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { SignIn } from '../screens/SignIn'
import { AppRoutes } from './app.routes'

export function Routes(){
    return(
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
    )
}