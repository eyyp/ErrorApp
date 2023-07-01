import { View,Text,Image,StyleSheet} from "react-native";
import ShareCard from "../../component/ShareCard";
import {shadow} from '../../assets/styles/styles'
const Profil = () => {
    return(
        <View >
            <View style={styles.tabRow}>
                <View style={styles.row} >
                    <Image 
                        style={styles.image}
                        source={require('../../assets/images/avatar/man.png')}
                    />
                    <Text style={styles.nickText}>@kişi</Text>
                </View>
                <Text style={styles.bioText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Text>
            </View>
            <View style={styles.ShareRow}>
                <ShareCard />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    tabRow:{
        ...shadow,
        backgroundColor:'#D8C4B6',
        borderRadius:5,
        width:334,
        alignSelf:'center',
        marginTop:10
    },
    row:{
        flexDirection:'row',
        padding:10,
    },
    image:{
        width:70,
        height:70
    },
    nickText:{
        fontSize:15,
        fontWeight:'400',
        color:'black',
        marginLeft:15,
        marginTop:20
    },
    bioText:{
        padding:15,
        color:'black',
        fontWeight:'400',
        fontSize:15
    },
    line:{
        width:'95%',
        height:0.3,
        backgroundColor:'gray',
        alignSelf:'center',
        marginTop:2
    },
    ShareRow:{
        width:390,
        paddingVertical:10
    }
})
export default Profil;