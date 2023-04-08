import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";
const style = StyleSheet.create({
    container: {
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop:SIZES.large,
    },
    Title:{
        fontSize: SIZES.large
    },
    btn:{
        backgroundColor: "#FE7654",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    input:{
       
    }

})

export default style