import { View,TouchableOpacity, Text,Image,StyleSheet} from "react-native";

const CampusButton = (props) => {
    console.log(props)
    return(
        <TouchableOpacity style={styles.Button}>
            <Image 
                style={{width:120,height:120}}
                source={require('../../assets/Logo/üniLogo.png')}
            />
            <View style={styles.titleRow}>
                <Text style={styles.title}>{props.item.Name}</Text>
            </View>
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
        backgroundColor:'#D8C4B6',
        borderRadius:10,
        height:180,
        width:160,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:20,
        marginBottom:10,
        ...shadow
    },
    title:{
        color:'#000000',
        fontSize:12
    },
    titleRow:{
        backgroundColor:'#F5EFE7',
        width:110,
        height:35,
        borderRadius:5,
        marginTop:7,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default CampusButton;