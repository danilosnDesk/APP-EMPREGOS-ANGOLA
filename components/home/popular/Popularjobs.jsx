import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import useFetch from "../../../hooks/useFetch";



const Popularjobs = () => {
  const router = useRouter();

  const { data, isLoading, error } = useFetch(
    'search', {
    query: 'PHP developer',
    num_page: 1,
    page: 1
  });

  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}> Vagas Populares</Text>
        <TouchableOpacity >
          <Text style={styles.headerBtn}>ver tudo</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {
          isLoading ?
            (<ActivityIndicator size="large" color={COLORS.primary} />) : error ? (<Text>Estamos tentando resolver, há uma falha</Text>) :
              data.length === 0 ? (<Text>Sem emprego</Text>) :
                (
                  <FlatList
                    data={data}
                    renderItem={({ item }) =>
                    (<PopularJobCard
                      handleCardPress={handleCardPress}
                      selectedJob={selectedJob}
                      item={item} />
                    )}
                    keyExtractor={item => item?.job_id}
                    contentContainerStyle={{ columnGap: SIZES.medium }}
                    horizontal showsHorizontalScrollIndicator={false} /**Thanks CHAT GPT 4 */ />)

        }
      </View>
    </View >
  )
}

export default Popularjobs