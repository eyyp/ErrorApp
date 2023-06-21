import { View, StyleSheet, TouchableOpacity} from "react-native";
import Right from '../../assets/icon/right.svg'
const Settings = () =>{
    return(
        <View style={styles.Body}>
            <View>
                <TouchableOpacity>
                    <Text>Hesap Bilgilerim</Text>
                    <Right />
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