import { StyleSheet } from "react-native-web";
import {COLORS, SIZES} from '../constants/index'
import { FontDisplay } from "expo-font";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.lightWhite
    },
    upperRow:{
        marginHorizontal:12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: SIZES.xLarge,
        zIndex:999,
        width: SIZES.width-44
    },
    image:{
        aspectRatio: 1,
        resizeMode: 'cover'
    },
    details:{
        marginTop: -SIZES.large,
        backgroundColor: COLORS.lightWhite,
        width: SIZES.width,
        borderTopLeftRadius: SIZES.medium,
        borderTopRightRadius: SIZES.medium,
    },
    titleRow:{
        marginHorizontal: 20,
        paddingBottom: SIZES.small,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: SIZES.width -44,
        top: 20
    },
    ratingRow:{
        paddingBottom: SIZES.small,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: SIZES.width -10,
        top: 5
    },
    title:{
        fontFamily: 'bold',
        fontSize: SIZES.large
    },
    priceWrapper:{
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.large
    },
    price:{
        paddingHorizontal: 6,
        fontFamily: 'semibold',
        fontSize: SIZES.large
    },
    rating:{
        top: SIZES.large,
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems:'center',
        marginHorizontal: SIZES.large
    },
    ratingText:{
        color: COLORS.gray,
        FontFamily: 'medium',
        paddingHorizontal: SIZES.xSmall
    },
    descriptionWrapper:{
        marginTop: SIZES.large,
        marginHorizontal: SIZES.large
    },
    description:{
        fontFamily: 'medium',
        fontSize: SIZES.large - 2,
    },
    descriptionText:{
        fontFamily: 'regular',
        fontSize: SIZES.small,
        marginBottom: SIZES.small,
        textAlign: 'justify'
    },
    location:{
        backgroundColor: COLORS.secondary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        padding: 5,
        borderRadius: SIZES.large,
        marginHorizontal: 12
    },
    cartRow:{
        paddingBottom: SIZES.small,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: SIZES.width-44,
    },
    cardBtn:{
        width: SIZES.width * 0.7,
        backgroundColor: COLORS.black,
        padding: SIZES.small/2,
        borderRadius: SIZES.large,
        marginLeft: 12
    },
    cartTitle:{
        marginLeft: SIZES.small,
        color: COLORS.lightWhite,
        fontFamily: 'semibold',
        fontSize:SIZES.medium
    },
    addCart:{
        width: 37,
        height: 37,
        borderRadius: 50,
        margin: SIZES.small,
        backgroundColor: COLORS.black,
        alignItems: 'center',
        justifyContent:'center'
    }
})

export default styles