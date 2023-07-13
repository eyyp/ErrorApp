import { View, StyleSheet, TouchableOpacity,Text} from "react-native";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import * as action from '../../store/actions/user/user_check'
const Settings = () =>{
    const {userCheck} = useSelector(state => state.UserCheck)
    const dispatch = useDispatch()
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