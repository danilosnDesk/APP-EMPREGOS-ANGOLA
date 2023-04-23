import { Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Stack } from "expo-router";
import { COLORS, icons } from '../../constants';

const Login = () => {
  return (
    <SafeAreaView className="flex-1 justify-center  items-center bg-white">
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: "",
          headerStyle: { backgroundColor: "white" },
          headerTintColor: `${COLORS.tertiary}`
        }}>
      </Stack.Screen>
      <ScrollView className="w-full">
        <View className="flex items-center w-full" style={{ padding: 5, }}>
          <Image source={icons.Fingerprint_IMG} style={{ width: 100, height: 100, resizeMode: "contain" }} />
        </View>


        <View className="bg-white w-full shadow-sm" style={{ padding: 25, }}>
          <Text className="text-[40px]" style={{ color: `${COLORS.tertiary}` }}>Entre </Text>
          <Text className="text-[24px] text-gray-500">
            Faça o seu login</Text>
        </View>
        <View className="w-full" style={{ padding: 25, }}>
          <TextInput placeholder='Seu email' className="bg-white p-2 mt-2 text-gray-500 text-[18px] " style={{ borderWidth: 2, borderColor: "gray", borderBottomColor: `${COLORS.tertiary}`, borderRadius: 14 }} />
          <TextInput secureTextEntry placeholder='Seu senha' className="bg-white p-2 mt-2 text-gray-500 text-[18px] " style={{ borderWidth: 2, borderColor: "gray", borderBottomColor: `${COLORS.tertiary}`, borderRadius: 14, marginTop: 30 }} />
          <TouchableOpacity className="p-2">
            <Text className="text-gray-500">Esqueci a senha</Text>
          </TouchableOpacity>
        </View>
        <View className="w-full" style={{ padding: 25, }}>
          <TouchableOpacity className={`mt-2`} style={{ backgroundColor: `${COLORS.tertiary}`, padding: 10, borderRadius: 14, alignItems: "center" }} >
            <Text className="text-[24px] text-white">Entrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login;

