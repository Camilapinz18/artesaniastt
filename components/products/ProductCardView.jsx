import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './productCardView.style'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../constants'

const ProductCardView = () => {
  return (
   <TouchableOpacity
        onPress={()=>{}}
    >
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={{uri: "https://images.pexels.com/photos/20106383/pexels-photo-20106383/free-photo-of-manos-sosteniendo-una-taza-de-matcha.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}}
                    style={styles.image}
                />
            </View>
            <View style={styles.details}>
                <Text style={styles.title} numberOfLines={1}>Produt</Text>
                <Text style={styles.supplier}>Product</Text>
                <Text style={styles.price}>$123.000</Text>
            </View>

            <TouchableOpacity style={styles.addBtn}>
                <Ionicons name='add-circle' size={35} color={COLORS.primary}/>
            </TouchableOpacity>
        </View>


   </TouchableOpacity>
  )
}

export default ProductCardView