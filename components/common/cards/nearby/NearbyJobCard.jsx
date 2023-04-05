import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './nearbyjobcard.style'


const NeabyJobCard = ({ job, handleNavegationFunction }) => {

  return (

    <TouchableOpacity
      style={styles.container}
      onPress={handleNavegationFunction}

    >
      <TouchableOpacity
        style={styles.logoContainer}
      >
        <Image
          source={{ uri: job.employer_logo || 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg' }}
          resizeMode='contain'
          style={styles.logoImage}
        ></Image>
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>{job.employer_name}</Text>
        <Text style={styles.jobType} numberOfLines={1}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NeabyJobCard