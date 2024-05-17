import { View, Image, TouchableOpacity,Text} from 'react-native'
import React from 'react'
import styles from './productDetails.style'
import { Fontisto, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import { COLORS, SIZES } from '../constants'
import { useState } from 'react'

const ProductDetails = ({navigation}) => {

    const [count, setCount] = useState(1);

    const increment =() =>{
        setCount(count + 1)
    }

    const decrement =() =>{
        setCount(count - 1)

        if(count <= 0){
            setCount(0)
        }
    }

  return (
    <View style={styles.container}>
        <View style={styles.upperRow}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Ionicons name='chevron-back-circle' size ={30}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{}}>
                <Ionicons name='heart' size ={30} color={COLORS.primary}/>
            </TouchableOpacity>
        </View>

        <Image
            source={{uri: 'https://images.pexels.com/photos/20123455/pexels-photo-20123455/free-photo-of-paisaje-hombre-verano-trabajando.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
            style={styles.image}
        />

        <View style={styles.details}>
            <View style={styles.titleRow}>
                <Text style={styles.title}>Product</Text>
                <View style={styles.priceWrapper}>
                    <Text style={styles.price}>$ 123.000</Text>
                </View>
            </View>

            <View style={styles.ratingRow}>
                <View style={styles.rating}>
                    {[1,2,3,4,5].map((index)=>(
                        <Ionicons key={index} name='star' size={24} color='gold'/>
                    ))}
                    <Text style={styles.ratingText}>(4.9)</Text>
                </View>

                <View style={styles.rating}>
                    <TouchableOpacity onPress={()=>increment()}>
                        <SimpleLineIcons name='plus' size={20}/>
                    </TouchableOpacity>
                    <Text style={styles.ratingText}>   {count}   </Text>
                    <TouchableOpacity onPress={()=>decrement()}>
                        <SimpleLineIcons name='minus' size={20}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.descriptionWrapper}>
                <Text style={styles.description}>
                    Description
                </Text>
                <Text style={styles.descriptionText}>
                    Es un hecho establecido hace demasiado tiempo que us paquetes de autoedición y edixto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).
                </Text>

                <View style={{marginBottom: SIZES.small}}>
                    <View style={styles.location}>
                        <View style={{flexDirection: 'row'}}>
                            <Ionicons name='location-outline' size={20}/>
                            <Text>Tunja</Text>
                        </View>

                        <View style={{flexDirection: 'row'}}>
                            <MaterialCommunityIcons name='truck-delivery-outline' size={20}/>
                            <Text>Envio gratis</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.cartRow}>
                    <TouchableOpacity onPress={()=>{}} style={styles.cardBtn}>
                        <Text style={styles.cartTitle}>Compra</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{}} style={styles.addCart}>
                        <Fontisto name='shopping-bag' color={COLORS.lightWhite} size={20}/>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    </View>
  )
}

export default ProductDetails