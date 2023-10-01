import { View,TouchableOpacity, Text,Image,StyleSheet} from "react-native";

const CampusButton = (props) => {
    return(
        <TouchableOpacity style={styles.Button} onPress={()=>props.onPress()}>
            <View style={styles.logoRow}>
                <Image 
                    style={styles.logo}
                    source={{uri:'http://yonetimpanel.com/admin/uploads/logo/' + props.item.icon}}
                />
            </View>
                <Text style={styles.title}>{props.item.campus_name}</Text>
        </TouchableOpacity>
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
    Button:{
        backgroundColor:'white',
        borderRadius:4,
        minHeight:180,
        width:160,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:20,
        marginBottom:10,
        paddingTop:10,
        paddingBottom:10,
        ...shadow
    },
    title:{
        color:'#000000',
        fontSize:12
    },
    titleRow:{
        width:110,
        height:35,
        borderRadius:5,
        marginTop:7,
        alignItems:'center',
        justifyContent:'center'
    },
    logoRow:{
        width:140,
        height:140,
        backgroundColor:'',
        borderRadius:999,
        alignItems:'center',
        justifyContent:'center'
    },
    logo:{
        width:120,
        height:120
    }
})

export default CampusButton;