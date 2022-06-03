import { View ,Platform,StyleSheet,Image,ImageBackground,Pressable} from 'react-native'
import React from 'react'
import Text from '../components/Text/Text'
import { colors } from '../themes/colors'


export default function Details() {
  return (
    <ImageBackground source={require('../../assets/images/Media.png')} style={styles.container}>
   
    <View style={styles.upperDetails}>

    </View>
      <View style={styles.lowerDetails}>
        <Text preset='h3'>Boston Lettuce</Text>
        <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
        <Text preset='h2'>1.10</Text>
        <Text> $ / piece</Text>
        </View>
        <Text preset='productWeightText'>~ 150gr / piece</Text>
        <View style={{marginTop:14}}>
            <Text preset='h4'>Spain</Text>
            <Text>
                Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.
            </Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:25}}>
            <View style={styles.addToWishlistIcon}>
                <Image
                source={require('../../assets/images/heart.png')}
                ></Image>
            </View>
            <Pressable 
                    style={styles.addToCartButton}
                    >
                        
                        <Text preset='small'>Add To Cart</Text>
            </Pressable>
        </View>
        
      </View>

  </ImageBackground>
    
  )     
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingTop: Platform.OS === 'android' ? 25 : 0,
       
      
       
    },
    upperDetails:{
        flex:0.5
    },
    detailsImage:{
        height:"100%"
    },
    lowerDetails:{
        flex:0.9,
        backgroundColor:'#F6F5F5',
        width:'100%',
        borderTopRightRadius:25,
        borderTopLeftRadius:25,
        paddingHorizontal:20,
        paddingVertical:40

    },
    addToWishlistIcon:{
        borderWidth:1,
        borderColor:colors.textBlue,
       
        paddingVertical:14,
        paddingHorizontal:20,
        borderRadius:10,
        backgroundColor:colors.white,
        marginRight:20
    },
    addToCartButton:{
        backgroundColor:colors.green,
        paddingVertical:10,
        paddingHorizontal:50,
        borderRadius:14,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }

})