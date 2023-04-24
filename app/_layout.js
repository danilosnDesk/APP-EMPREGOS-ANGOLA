import { SplashScreen, Stack, useRouter} from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as  exposplashscreen from 'expo-splash-screen';
import { HomeIcon, User } from "lucide-react-native";
import { COLORS, icons, images, SIZES } from '../constants';
import { ScreenHeaderBtn} from "../components";




exposplashscreen.preventAutoHideAsync();


const Layout = () => {
    const router = useRouter()

    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if (!fontsLoaded) return null;

    const handlerPress = ()=>{
        router.push('user/login')
    }
    


    return(

            <Stack onLayout={onLayoutRootView} />
         )

}

export default Layout;