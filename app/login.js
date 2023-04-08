import { useState } from "react";


import { View,Text, SafeAreaView, TextInput, TouchableOpacity } from "react-native"
import { COLORS, images,SIZES,icons,SHADOWS  } from "../constants";
import { Stack } from "expo-router"
import { ScrollView } from "react-native-gesture-handler";
import { Nearbyjobs, Popularjobs } from "../components";
import styles from '../components/login/LoginStyles'


const Login = () =>{
    const [getemail, setEmail] = useState("");
    const [getpassword, setPassword] = useState("");

    const handleLogin = ()=>{
        alert()
    }

    return(
        <View style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
            options={{
                headerTitle: "",
                headerShadowVisible:false,
                
            }}
            >

            </Stack.Screen>
<ScrollView showsVerticalScrollIndicator={false}>

<View style={styles.container}>
    <Text style={styles.Title}>Login</Text>
    <Text style={styles.text}>Faça o login e monitorize suas vagas</Text>


    <View>
      <TextInput
        placeholder="Email"
        value={getemail}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry={true}
        value={getpassword}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.btn}>
        <Text>Entrar</Text>
      </TouchableOpacity>
    </View>
     
</View>    

</ScrollView>
        </View> 

    )
}

export default Login