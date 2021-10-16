import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
    Switch
} from 'react-native';
import { MainLayout } from '.';
import { StackNavigationProp } from '@react-navigation/stack';
import { HeaderBar } from '../components';
import { FONTS,COLORS, SIZES, dummyData, icons } from '../constants';

const Setting=({title,type,value,onPress,navigation})=>{

    if (type=="button")
    {
        return (<TouchableOpacity

            
 
            style={{
                flexDirection: 'row',
                height: 50,
                alignItems: 'center'
            }}
        >
            <Text style={{flex:1,color: "#332421", ...FONTS.h3}}>{title}</Text>
           
           
            <View 
            style={{
                
                flexDirection:'row', 
                alignItems:'center'
        }}
            
            >
                <Text style={{
                    marginLeft: SIZES.radius,
                    color: COLORS.lightGray3, 
                    ...FONTS.h3}}>
                {value}
                </Text>
               
                </View>
        </TouchableOpacity>)
    }
    else
    {
        return (
            <View
            style={{
                flexDirection:'row', 
                alignItems:'center',
                height:50
 
            }}>
                  <Text style={{flex:1,color: "#332421", ...FONTS.h3}}>{title}</Text>
          
                <Switch value={value}
                onValueChange={(value)=> onPress(value)}/>

            </View>
        )
    }
}
const SectionTitle=({title})=>{
    return (
        <View
        style={{marginTop: SIZES.padding}}>
            <Text style={{color: COLORS.lightGray3, ...FONTS.h3}} >{title}</Text>
        </View>
    )
}
const Profile = () => {
    const [faceID, setFaceID]= React.useState(true)
    return (
        <MainLayout>
       <View
        style={{
            flex: 1,
            paddingHorizontal: SIZES.padding,
            backgroundColor: COLORS.white
                    }}>
            <HeaderBar
            title="Profile"
            
            />

            <ScrollView>
                <View style={{flexDirection: 'row', marginTop: SIZES.radius}}>

                <View
                style={{flex:1}}>

                    <Text style={{color: "#332421"}}>{dummyData.profile.email}</Text>
                    <Text style={{color: "#332421", ...FONTS.body4, color: COLORS.lightGray3}}>ID: {dummyData.profile.id}</Text>    
                
                </View>
                <View
                style={{flexDirection:'row',
            alignItems:'center'}}
                >
                <Image
                    source={icons.verified}
                    style={{
                        height: 25,
                        width:25
                    }}
                />
                <Text style={{color: "green", marginLeft: SIZES.base, ...FONTS.body4 }}>Verified</Text>

                </View>

                </View>
                <SectionTitle
                title="APP"
                /><Setting
                title="Launch Screen"
                value="Home"
                type="button"
                onPress={()=> navigation.navigate("Home")}
                />
                <Setting
                title="Appearance"
                value="Dark"
                type="button"
                onPress={()=> nvigation.navigate("Home")}
                />

                <SectionTitle
                title="ACCOUNTS"
                />
                <Setting
                title="Payment Currency"
                value="USD"
                type="button"
                onPress={()=> console.log("Pressed")}
                />
                <Setting
                title="Language"
                value="English"
                type="button"
                onPress={()=> console.log("Pressed")}
                />
                 <SectionTitle
                title="SECURITY"
                />
                <Setting
                title="FaceID"
                value={faceID}
                type="switch"
                onPress={(value)=> setFaceID(value)}
                />

            </ScrollView>
           
            
        </View>
        </MainLayout>
    )
}

export default Profile;