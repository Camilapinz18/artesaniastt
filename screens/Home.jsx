import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './home.style'
import { Ionicons, Fontisto } from '@expo/vector-icons'
import { ScrollView } from 'react-native'
import { Welcome } from '../components'
import Carrousel from '../components/home/Carrousel'
import Heading from '../components/home/Heading'
import ProductRow from '../components/products/ProductRow'

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name='location-outline' size={24}/>
          <Text style={styles.location}>Bogotá</Text>
          <View style={{alignItems: 'flex-end'}}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name='shopping-bag' size={24}/>
            </TouchableOpacity>
          </View>
        </View>

      </View>


      <ScrollView>
        <Welcome/>
        <Carrousel/>
        <Heading/>
        <ProductRow/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home