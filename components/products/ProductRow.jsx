import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants'
import ProductCardView from './ProductCardView'
import styles from './productRow.style'
import useFetch from '../../hooks/useFetch'

const ProductRow = () => {

    const {data, isLoading, error} = useFetch()

  return (
    <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator size={SIZES.large} color={COLORS.primary}/>
        ): error? (
          <Text>Algo fue mal</Text>
        ):(<FlatList
          data={data}
          keyExtractor={(item) =>  item.id}
          renderItem={({item})=>(<ProductCardView item = {item}/>)}
          horizontal
          contentContainerStyle={{columnGap: SIZES.medium}}
        />)}
    </View>
  )
}

export default ProductRow