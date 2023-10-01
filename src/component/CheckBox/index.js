import { View, TouchableOpacity, Text,StyleSheet,Image} from "react-native";


const CheckBox = (props) =>{ 
    <TouchableOpacity style={styles.checkButton} >
        <Image 
            style={styles.checkImage}
            source={require('../../assets/icon/box.png')}
        />
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    checkButton:{
        marginTop:10
    },
    checkImage:{
        width:20,
        height:20
    },
    box:{
        width:20,
        height:20,
        borderRadius:5,
        backgroundColor:'white',
        borderColor:'green',
        borderWidth:5
    },
});
export default CheckBox;