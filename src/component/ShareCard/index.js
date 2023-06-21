import { View,Image, Text,TouchableOpacity,StyleSheet} from 'react-native';
import Like from '../../assets/icon/like.svg'
import Chat from '../../assets/icon/chat.svg'
const ShareCard = (props) =>{
    return(
        <View style={styles.card}>
            <View style={styles.profilRow}>
                <Image
                    style={styles.image}
                    source={require('../../assets/images/avatar.png')}
                />
                <Text style={styles.nickText}>Kişi</Text>
            </View>
            <View style={styles.shareRow}>
                <Text style={styles.shareText}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </Text>
            </View>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button}>
                    <Like width={30} height={30} style={styles.gary}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Chat width={30} height={30} style={styles.gary}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    card:{
        backgroundColor:'white',
        width:350,
        height:350,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
  
        elevation: 2
    },
    profilRow:{
        width:200,
        height:50,
        marginLeft:15,
        marginTop:15,
        flexDirection:'row'
    },
    image:{
        width:40,
        height:40
    },
    nickText:{
        marginLeft:10,
        marginTop:7,
        color:'black',
        fontSize:15,
        fontWeight:'900'
    },
    shareRow:{
        height:235
    },
    shareText:{
        marginLeft:15,
        fontSize:16,
        paddingRight:10,
        color:'black'
    },
    buttonRow:{
        flexDirection:'row'
    },
    button:{
        marginLeft:15
    },
    gary:{
        color:'gray'
    }
})
export default ShareCard;