import { View,Text,Image,StyleSheet} from "react-native";
import ProfilTab from "../../component/ProfilTab";
import ShareCard from "../../component/ShareCard";
const Profil = () => {
    return(
        <View>
            <ProfilTab title="Profilim"/>
            <View style={styles.row}>
                <Image 
                    style={styles.image}
                    source={require('../../assets/images/avatar.png')}
                />
                <Text style={styles.nickText}>Kişi</Text>
            </View>
            <Text style={styles.bioText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Text>
            <View style={styles.line}></View>
            <View style={styles.ShareRow}>
                <ShareCard />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        padding:10
    },
    image:{
        width:70,
        height:70
    },
    nickText:{
        fontSize:17,
        color:'black',
        marginLeft:15,
        marginTop:20
    },
    bioText:{
        padding:15,
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
        paddingVertical:10,
        paddingHorizontal:20,
        marginTop:15
    }
})
export default Profil;