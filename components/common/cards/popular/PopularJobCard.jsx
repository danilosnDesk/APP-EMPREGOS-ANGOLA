import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'


const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {

  return (

    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => { handleCardPress(item) }}

    >
      <TouchableOpacity
        style={styles.logoContainer(selectedJob, item)}
      >
        <Image
          source={{ uri: item.employer_logo || 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg' }}
          resizeMode='contain'
          style={styles.logoImage}
        ></Image>
      </TouchableOpacity>

      <Text style={styles.companyName} numberOfLines={1}>{item.job_title || 'Recrutador desconhecido'}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>{item.employer_name}</Text>
        <Text style={styles.location} numberOfLines={1}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard