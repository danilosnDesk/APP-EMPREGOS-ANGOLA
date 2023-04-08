import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'

import styles from './nearbyjobs.style'
import { COLORS, SIZES } from '../../../constants'
import useFetch from "../../../hooks/useFetch";
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import { useRouter } from 'expo-router';



const Nearbyjobs = () => {
  const router = useRouter();

  const { data, isLoading, error } = useFetch(
    'search', {
    query: 'PHP developer',
    num_page: 1,
    page: 1
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Recrutadores</Text>
        <TouchableOpacity >
          <Text style={styles.headerBtn}>ver tudo</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {
          isLoading ?
            (<ActivityIndicator size="large" color={COLORS.primary} />) :
            error ?
              (<Text>Estamos tentando resolver, há uma falha</Text>) :
              data.length === 0 ? (<Text>Sem emprego</Text>) :
                (
                  data.map(job => (
                    <NearbyJobCard
                      job={job}
                      key={`nerby-job-${job?.job_id}`}
                      handleNavegationFunction={() => router.push(`/job-details/${job?.job_id}`)}
                    />
                  ))
                )
        }
      </View>
    </View >
  )
}

export default Nearbyjobs