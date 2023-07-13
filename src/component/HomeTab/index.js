import { StyleSheet,View,TouchableOpacity,Text,Image} from "react-native";
import { clearToken } from "../../config";
const HomeTab = (props) =>{
    return(
        <View style={styles.tabRow} >
        <TouchableOpacity style={styles.tabButton} onPress={()=>props.onPress()}>
            <Image
                style={styles.image}
                source={require('../../assets/icon/menus.png')}
            />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
            <Image
                style={styles.image}
                source={require('../../assets/icon/messages.png')}
            />
        </TouchableOpacity>
        <TouchableOpacity style={styles.userButton}>
            <Text style={styles.userNick}>Lorem İpsum</Text>
            <Image
                style={styles.image}
                source={require('../../assets/images/avatar/1.png')}
            />
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop:10,zIndex:999,flexDirection:'row',padding:5,borderRadius:5,backgroundColor:'#D8C4B6',width:100,height:30}} onPress={()=>{clearToken(),props.navigation.navigate("Login")}}>
            <Image 
                style={{width:25,height:25}}
                source={require('../../assets/icon/logout.png')}
            />
            <Text style={{marginLeft:5}}>Çıkış yap</Text>
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
        marginLeft:100,
        width:116,
        height:31,
        backgroundColor:'#F5EFE7',
        ...shadow,
        borderRadius:23,
        alignItems:'center',
        paddingLeft:7
    },
    userNick:{
        color:'black',
        fontSize:12,
        marginRight:5
    }
})
export default HomeTab;