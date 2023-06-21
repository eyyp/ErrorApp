import { View,TouchableOpacity, Text,Image,StyleSheet} from "react-native";

const CampusButton = (props) => {
    console.log(props)
    return(
        <TouchableOpacity style={styles.Button}>
            <Image 
                style={{width:120,height:120}}
                source={require('../../assets/Logo/uniLogo.jpg')}
            />
            <Text style={styles.title}>{props.item.Name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    Button:{
        backgroundColor:'white',
        borderRadius:10,
        height:180,
        width:160,
        alignItems:'center',
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
  
        elevation: 2,
        marginLeft:20,
        marginBottom:10
    },
    title:{
        color:'#000000',
        marginTop:10,
        fontSize:16
    }
})

export default CampusButton;