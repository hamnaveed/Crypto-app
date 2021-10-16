import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { createStore,applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './stores/rootReducer';  
import Tabs from "./navigation/tabs";
import Send from './Send';
import Recieve from './Recieve';
import OnboardingScreen from './screens/OnboardingScreen';

const Stack = createStackNavigator();
const store= createStore(
    rootReducer,
    applyMiddleware(thunk)
)

const App = () => {
    return (
        <Provider store={store}>
        <NavigationContainer>
            
            <Stack.Navigator
                // screenOptions={{
                //     headerShown: false
                // }}
               // initialRouteName={'MainLayout'}
            >
                <Stack.Screen
            name="onboarding"
            component={OnboardingScreen}
            />
                <Stack.Screen
                    name="MainLayout"
                    component={Tabs}
                />
                                <Stack.Screen
                    name="Send"
                    component={Send}
                />
                                <Stack.Screen
                    name="Recieve"
                    component={Recieve}
                />
            </Stack.Navigator>
        </NavigationContainer>
        </Provider>
    )
}

export default App;
