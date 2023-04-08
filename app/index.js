import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components";

const Home = () => {
    const router = useRouter();
    const [SearcTerm, setSearcTerm] = useState("");

    const handlerPress = ()=>{
        router.push('/login')
    }

    console.log(SearcTerm);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: COLORS.lightWhite
                    },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="40%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.avatar_default} dimension="90%" handlerPress={handlerPress} />
                    ),
                    headerTitle: ""
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium
                    }}
                >
                    <Welcome
                        SearcTerm={SearcTerm}
                        setSearcTerm={setSearcTerm}
                        handlerClick={() => {
                            if (SearcTerm) {
                                router.push(`/search/${SearcTerm}`)
                            }
                        }} />
                    <Popularjobs />
                    <Nearbyjobs />

                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default Home;