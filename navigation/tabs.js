import React from "react";
import {
    TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { connect } from "react-redux";
import { SetTradeModalVisibility } from "../stores/tab/tabAction";
import { Home, Portfolio, Market, Profile } from "../screens"
import { COLORS,icons } from "../constants"
import { TabIcon } from "../components";

const Tab = createBottomTabNavigator()
const TabBarCustomButton=({children, onPress})=>{
return(
    <TouchableOpacity
    style={{
        flex: 1, justifyContent: 'center',alignItems: 'center'
    }}
    onPress={onPress}
    >
       
       
        {children}
        
    </TouchableOpacity>
)
}

const Tabs = ({SetTradeModalVisibility,isTradeModalVisible}) => {

function TradeButtonOnClickHandler(){
SetTradeModalVisibility(!isTradeModalVisible)
}

    return (
        <Tab.Navigator
            tabBarOptions={
            
                {
                    showLabel:false,
                style: {
                    height:80,
                    backgroundColor: "#ad8762",
                    borderTopColor: "transparent",
                    
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon:({focused})=>{
                        if(!isTradeModalVisible)
                        {
                    return (<TabIcon
                    focused={focused}
                    icon={icons.home}
                    label="home"
                    />
                    )
                }
                }
            }
        }
        listeners={{
            tabPress:(e)=>{
                if(isTradeModalVisible)
                {
                    e.preventDefault()
                }
            }
        }}

            />
            <Tab.Screen
                name="Portfolio"
                component={Portfolio}
                options={{tabBarIcon:({focused})=>{
                    if(!isTradeModalVisible)
                        {
                    return (<TabIcon
                    focused={focused}
                    icon={icons.briefcase}
                    label="Portfolio"
                    />
                    )
                        }
                }
            }
        }
        listeners={{
            tabPress:(e)=>{
                if(isTradeModalVisible)
                {
                    e.preventDefault()
                }
            }
        }}
            />
            <Tab.Screen
                name="Trade"
                component={Home}
                options={{tabBarIcon:({focused})=>{
                    
                    return (<TabIcon
                    focused={focused}
                    icon={isTradeModalVisible ? icons.close : icons.trade}
                    label="Trade"
                    isTrade={true}
                    />
                    )
                        
                },
                tabBarButton:(props)=>(
                    <TabBarCustomButton
                    {...props}
                    onPress={()=>TradeButtonOnClickHandler()}
                    />
                )
            }
        }
            />
            <Tab.Screen
                name="Market"
                component={Market}
                options={{tabBarIcon:({focused})=>{
                    if(!isTradeModalVisible)
                        {
                    return (<TabIcon
                    focused={focused}
                    icon={icons.market}
                    label="Market"
                    />
                    )
                        }
                }
            }
        }
        listeners={{
            tabPress:(e)=>{
                if(isTradeModalVisible)
                {
                    e.preventDefault()
                }
            }
        }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{tabBarIcon:({focused})=>{
                    if(!isTradeModalVisible)
                        {
                    return (<TabIcon
                    focused={focused}
                    icon={icons.profile}
                    label="Profile"
                    />
                    )
                        }
                }
            }
        }
        listeners={{
            tabPress:(e)=>{
                if(isTradeModalVisible)
                {
                    e.preventDefault()
                }
            }
        }}
            />
        </Tab.Navigator>
    )
}

//export default Tabs;
function mapStateToProps(state){
    return{
        isTradeModalVisible: state.tabReducer.isTradeModalVisible
    }
}

function mapDispatchToProps(dispatch)
{
    return{
        SetTradeModalVisibility:(isVisible)=>{return dispatch(SetTradeModalVisibility(isVisible))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Tabs);