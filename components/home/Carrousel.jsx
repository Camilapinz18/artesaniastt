import { View, Text } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import styles from './carrousel.style'
import { COLORS } from '../../constants'

const Carrousel = () => {

    const slides = [
        "https://images.pexels.com/photos/5804955/pexels-photo-5804955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/23384634/pexels-photo-23384634/free-photo-of-comida-madera-amanecer-mujer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/18664921/pexels-photo-18664921/free-photo-of-montanas-playa-punto-de-referencia-costa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ];

  return (
    <View style={styles.carrouselContainer}>
      <SliderBox 
        images={slides}
        dotColor = {COLORS.primary}
        inactiveDot = {COLORS.secondary}
        ImageComponentStyle = {{borderRadius: 15, width: '93%', marginTop: 15}}
        autoplay
        circleLoop
      />
    </View>
  )
}

export default Carrousel