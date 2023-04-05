import React from 'react'

import { View, Text, TouchableOpacity, FlatList } from 'react-native'

import styles from './tabs.style'
import { COLORS, SIZES } from '../../../constants';


const Tabs = ({ tabs, ActiveTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity style={styles.btn(item, ActiveTab)} onPress={() => { setActiveTab(item) }}>
              <Text style={styles.btnText(item, ActiveTab)}>{item}</Text>
            </TouchableOpacity>
          </View>

        )}
        horizontal
        keyExtrator={item => item}
        showsHorizontalScrollIndicator={false} /**Thanks CHAT GPT 4 */
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      >

      </FlatList>
    </View>
  )
}

export default Tabs