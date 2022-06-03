import {typography} from '../../themes/typography';
import { colors } from "../../themes/colors";

const Base={
    fontFamily:typography.primary,
    color:colors.textBlue,

}
const Button_Base={
    fontFamily:typography.primary,
    color:colors.white,
  

}
const Bold={
    fontFamily:typography.bold,
    color:colors.headingBlue,
    
}

export const presets={
    default:Base,
 
    h1:{
        ...Bold,
        fontSize:34
    },
    h2:{
        ...Bold,
        fontSize:32
    },
    h3:{
        ...Bold,
        fontSize:30
    },
    h4:{
        ...Bold,
        fontSize:22
    },
    p:{
        ...Base,
        fontSize:17,
        fontWeight:'200',
        
    },
    small:{
        ...Button_Base,
        fontSize:15
    },
    productWeightText:{
        fontSize:17,
        color:colors.green,
        fontFamily:typography.primary
    }

}