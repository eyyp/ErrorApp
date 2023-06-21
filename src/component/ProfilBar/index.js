import { TouchableOpacity, View,Image,Text,StyleSheet} from "react-native";

const ProfilBar = () =>{
    return(
        <View>
            <TouchableOpacity style={styles.button}>
                <Image 
                    style={styles.Image}
                    source={require('../../assets/images/avatar.png')}
                />
                <Text style={styles.nickText}>Kişi</Text>
            
            </TouchableOpacity>
            <View style={styles.line}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    button:{
        flexDirection:'row',
        padding:10
    },
    Image:{
        width:50,
        height:50
    },
    nickText:{
        marginLeft:15,
        marginTop:12,
        fontSize:16,
        color:'black'
    },
    line:{
        width:'95%',
        height:0.5,
        backgroundColor:'gray',
        alignSelf:'center'
    }
})

export default ProfilBar;