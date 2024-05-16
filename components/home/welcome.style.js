import { StyleSheet } from "react-native-web";
import {COLORS, SIZES} from '../../constants/index'

const styles = StyleSheet.create({
    
    container:{
        width: '100%'
    },
    welcomeText: (color, top)=> ({
        fontFamily: 'bold',
        fontSize: SIZES.xxLarge -5,
        marginTop: top,
        color: color,
        marginHorizontal:12 
    }),
    searchContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium,
        marginHorizontal: SIZES.small,
        height: 50
    },
    searchIcon: {
        marginHorizontal: 10,
        color: COLORS.gray,
        marginTop: SIZES.small
    },
    searchWrapper:{
        flex:1,
        flexDirection: 'row',
        backgroundColor: COLORS.secondary,
        marginRight: SIZES.small,
        borderRadius: SIZES.small
    },
    searchInput:{
        fontFamily: 'regular',
        width: '100%',
        height: '100%',
        paddingHorizontal: SIZES.small,
    },
    searchBtn:{
        width: 50,
        height:'100%',
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.medium,
        alignItems: 'center',
        justifyContent: 'center',
    }

})

export default styles