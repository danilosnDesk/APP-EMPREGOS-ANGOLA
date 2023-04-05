import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList
} from 'react-native'

import styles from './welcome.style'
import { SIZES, icons } from '../../../constants'
import { useRouter } from 'expo-router'
import { useState } from "react";


const JobsType = ["Tempo-Inteiro", "Contrato", "Meio tempo", "Estágios"]

const Welcome = ({ SearcTerm, setSearcTerm, handlerClick }) => {
  const router = useRouter();
  const [activeJob, setactiveJob] = useState('Tempo-Inteiro')

  return (
    <View>

      {/** WELCOME TEXT VIEW */}
      <View style={styles.container}>
        <Text style={styles.userName}>Bem-vindo, Danilson</Text>
        <Text style={styles.welcomeMessage}>Encontre um emprego</Text>
      </View>

      {/** SEARCH VIEW */}
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={SearcTerm}
            onChangeText={(texto) => setSearcTerm(texto)}
            placeholder='Qual emprego procuras?'
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handlerClick}>
          <Image source={icons.search}
            style={styles.searchBtnImage}
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>

      {/** SEARCH VIEW */}
      <View style={styles.tabsContainer}>
        <FlatList
          data={JobsType}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJob, item)}
              onPress={() => {
                setactiveJob(item)
                router.push(`/search/${item}`)
              }}


            >
              <Text style={styles.tabText(activeJob, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
          showsHorizontalScrollIndicator={false} /**IA GPT 4  */
        />
      </View>

    </View>
  )
}

export default Welcome