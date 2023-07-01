import { View, StyleSheet, TouchableOpacity,Text} from "react-native";
const Settings = () =>{
    return(
        <View style={styles.Body}>
            <View>
                <TouchableOpacity>
                    <Text>Ayarlar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}
const styles = StyleSheet.create({
    Body:{
        flex:1,
        backgroundColor:'#F7F6FB'
    },
})
export default Settings;