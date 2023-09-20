import { useState } from 'react';
import { View, SafeAreaView, Text } from 'react-native'
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES} from '../constants';
import { Welcome, ScreenHeaderReturnBtn} from '../components'

const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerTitle: "Scan",
                    headerTitleAlign: "center",
                    headerLeft: () => (
                        <ScreenHeaderReturnBtn iconUrl={ icons.returnbtn} dimensions="60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderReturnBtn iconUrl={ icons.profile} dimensions="100%" />
                    ),
                }}
            />

            <View style={{ flex: 1, padding: SIZES.medium}}>
                <Welcome />
            </View>
        </SafeAreaView>
    )
}

export default Home;