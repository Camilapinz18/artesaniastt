import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import styles from './welcome.style'
import { COLORS, SIZES } from '../../constants'
import { Feather } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'


const Welcome = () => {
    
    const  navigation = useNavigation();
    
    return (
    <View>
        <View style={styles.container}>
            <Text style={styles.welcomeText(COLORS.black, SIZES.small)}>Encuentra las </Text>
            <Text style={styles.welcomeText(COLORS.primary, 0)}>mejores artesanias </Text>
        </View>

        <View style={styles.searchContainer}>
            <TouchableOpacity>
                <Feather name='search' size={24} style={styles.searchIcon}/>
            </TouchableOpacity>
            <View style={styles.searchWrapper}>
                <TextInput
                    value=""
                    onPress={()=>navigation.navigate('Search')}
                    //onPress={()=>{}}
                    placeholder="Que buscas hoy?" 
                    style={styles.searchInput}
                />
            </View>
            <View>
                <TouchableOpacity style={styles.searchBtn}>
                    <Ionicons name='camera-outline' size={SIZES.large} color={COLORS.offwhite}/>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default Welcome