import { View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './search.style'
import { Feather } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { COLORS, SIZES } from '../constants/index'

const Search = () => {
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
            <TouchableOpacity>
              <Ionicons name='camera-outline' size={SIZES.large} color={COLORS.offwhite}/>

            </TouchableOpacity>
            <View style={styles.searchWrapper}>
                <TextInput
                    value=""
                    //onPress={()=>navigation.navigate('Search')}
                    onPress={()=>{}}
                    placeholder="Que buscas hoy?" 
                    style={styles.searchInput}
                />
            </View>
            <View>
                <TouchableOpacity style={styles.searchBtn}>
                    <Ionicons name='search' size={SIZES.large} color={COLORS.offwhite}/>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Search