import { View, StyleSheet,SafeAreaView ,Image,Pressable,Platform} from 'react-native'
import React from 'react'
import {colors} from '../themes/colors'
import Text from '../components/Text/Text'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
    const navigation=useNavigation();
  return (
          <View style={styles.container}>
            <View style={styles.upperHome}>
                <View style={styles.homeLogo}>
                    <Image
                    style={styles.tinyLogo}
                    source={require('../../assets/images/D.png')}
                    />
                </View>
            </View>
            <View style={styles.lowerHome}>
                <View style={styles.lowerHomeImageContainer}>
                    <Image
                    
                    source={require('../../assets/images/Vector.png')}
                    />
                </View>
                <View style={{}}>
                    <Text preset="h1" styles={{marginTop:20,textAlign:'center'}}>Non-Contact Deliveries</Text>
                    <Text preset="p" styles={{marginTop:14,textAlign:'center',marginHorizontal:10}}>
                    When placing an order, select the option “Contactless delivery” and the courier will leave your order at the door.
                    </Text>
                </View>
                <View style={{marginTop:22}}>
                    <Pressable 
                    style={styles.orderNowButton}
                    onPress={()=>navigation.navigate('Details')}
                    >
                        <Text preset='small'>Order Now</Text>
                    </Pressable>
                    <Pressable style={{marginTop:14}}>
                        <Text preset='p' styles={{fontSize:15,textAlign:'center'}}>Dismiss</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        height:"100%",
        backgroundColor:colors.blue,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    upperHome:{
        backgroundColor:colors.blue,
        position:'relative',
        flex:0.6,
     
        
    },
    homeLogo:{
        backgroundColor:"#CDFFB6",
        width:60,
        height:60,
        borderRadius:30,
        position:'absolute',
        top:20,
        left:20,
        justifyContent:'center',
        alignItems:'center',
        
    },
    lowerHome:{
        flex:1,
        // justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.lightWhite,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingVertical:40,


    },
    lowerHomeImageContainer:{
        backgroundColor:colors.white,
        width:100,
        height:100,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center'
    },
    orderNowButton:{
        backgroundColor:colors.green,
        paddingVertical:15,
        paddingHorizontal:120,
        borderRadius:14
    }




})