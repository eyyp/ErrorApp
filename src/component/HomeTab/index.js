import { StyleSheet,View,TouchableOpacity,Text,Image} from "react-native";
import { clearToken } from "../../config";
import { avatars } from "../../config";
const HomeTab = (props) =>{
    return(
        <View style={styles.tabRow} >
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={styles.tabButton} onPress={()=>props.onPress()}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/icon/menus.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabButton} onPress={()=>props.navigation.navigate("MessageList")}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/icon/messages.png')}
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.userButton} onPress={()=>{props.navigation.navigate('Profil',{user_id:props.user.user_id})}}>
                <Text style={styles.userNick}>{props.user.nick}</Text>
                <Image
                    style={styles.image}
                    source={{uri:'http://yonetimpanel.com/admin/uploads/avatar/' + props.user.avatar + '.png'}}
                />
            </TouchableOpacity>
        </View>
    )
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
    tabRow:{
        height:48,
        backgroundColor:'#D8C4B6',
        borderRadius:5,
        margin:10,
        width:334,
        padding:10,
        alignSelf:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        ...shadow,
    },
    tabButton:{
        width:33,
        height:33,
    },
    image:{
        width:23,
        height:23,
        marginTop:3,
        marginLeft:3
    },
    userButton:{
        flexDirection:'row',
        minHeight:10,
        minHeight:30,
        backgroundColor:'#F5EFE7',
        ...shadow,
        borderRadius:10,
        alignItems:'center',
        paddingLeft:10,
        paddingRight:8
    },
    userNick:{
        color:'black',
        fontSize:12,
        marginRight:5
    }
})
export default HomeTab;