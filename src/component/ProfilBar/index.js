import { TouchableOpacity, View,Image,Text,StyleSheet} from "react-native";
import { avatars } from "../../config";
import { useEffect } from "react";
const ProfilBar = (props) =>{
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate('ProfilDif',{user_id:props.item.user_id})}>
                <Image 
                    style={styles.Image}
                    source={{uri:'http://yonetimpanel.com/admin/uploads/avatar/' + props.item.avatar + '.png'} }
                />
                <Text style={styles.nickText}>{props.item.nick}</Text>
            </TouchableOpacity>
        </View>
    );
}
const shadow = {
    shadowColor: "#000",
    shadowOffset:{
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#D8C4B6',
        width:339,
        height:69,
        borderRadius:5,
        ...shadow,
        marginTop:10,
        marginLeft:28
    },
    button:{
        flexDirection:'row',
        padding:10
    },
    Image:{
        width:50,
        height:50
    },
    nickText:{
        marginLeft:12,
        marginTop:12,
        fontSize:12,
        color:'#3F3F3F',
        backgroundColor:'#F5EFE7',
        width:105,
        height:26,
        borderRadius:5,
        paddingLeft:6,
        paddingTop:5
    },
    line:{
        width:'95%',
        height:0.5,
        backgroundColor:'gray',
        alignSelf:'center'
    }
})

export default ProfilBar;