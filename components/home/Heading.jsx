import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './headings.style'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../constants'

const Heading = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Destacados</Text>
            <TouchableOpacity>
                <Ionicons name='grid' size={24} color={COLORS.primary}/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Heading