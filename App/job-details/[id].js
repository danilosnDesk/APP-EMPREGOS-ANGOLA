import React, { useState } from 'react'
import { Text, View, SafeAreaView, ScrollView, RefreshControl, ActivityIndicator } from 'react-native'
import { Stack, useRouter, useSearchParams } from 'expo-router';
import { Company, Specifics, ScreenHeaderBtn, JobAbout, JobFooter, JobTabs } from '../../components';
import { COLORS, SIZES, icons } from '../../constants';
import useFetch from '../../hooks/useFetch';



const jobDetails = () => {
    const seachParams = useSearchParams();
    const router = useRouter();

    const { data, error, isLoading, reFetchData } = useFetch(
        'job-details', { job_id: seachParams.id })

    console.log(seachParams.id);

    const [refreshing, setrefreshing] = useState(false);

    const tabs = ["About", "Qualifications", "Responsabilities"];
    const [ActiveTab, setActiveTab] = useState(tabs[0]);

    const onRefresh = () => {
    }

    const displayData = () => {
        switch (ActiveTab) {
            case "Qualifications":
                return <Specifics
                    title="Qualifications"
                    points={data[0].job_highlights?.Qualifications ?? ['N/A']}
                >
                </Specifics>
                break;

            case "About":
                return <JobAbout
                    info={data[0].job_description ?? "No data provided"}
                >
                </JobAbout>
                break;
            case "Responsabilities":
                return <Specifics
                    title="Responsabilities"
                    points={data[0].job_highlights?.Responsabilities ?? ['N/A']}
                >
                </Specifics>
                break;
            default:
                break;
        }
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension="60%"
                            handlerPress={() => router.back()
                            }
                        />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.share}
                            dimension="60%"

                        />
                    ),
                    headerTitle: '',

                }}

            />

            <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >

                {
                    isLoading ? (
                        <ActivityIndicator size={SIZES.large} color={COLORS.primary} />) :
                        error ? (
                            <Text>Algo Fodeu</Text>
                        ) :
                            data.length === 0 ? (
                                <Text>Sem detalhes do emprego</Text>
                            ) : (
                                <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                                    <Company
                                        companyLogo={data[0].employer_logo}
                                        jobTitle={data[0].job_title}
                                        companyName={data[0].employer_name}
                                        Location={data[0].job_country}

                                    />
                                    <JobTabs
                                        tabs={tabs}
                                        ActiveTab={ActiveTab}
                                        setActiveTab={setActiveTab}
                                    />

                                    {displayData()}

                                    <JobFooter url={data[0].job_google_link ?? 'https://careers.google.com/jobs/results'} />


                                </View>
                            )
                }
            </ScrollView>

        </SafeAreaView >
    )
}

export default jobDetails