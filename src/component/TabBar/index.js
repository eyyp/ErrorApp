import { View,Text,StyleSheet} from "react-native";
import Left from '../../assets/icon/left.svg';
const TabBar = (props) =>{
    return(
        <View>
            <View style={styles.row}>
                <Left />
                <Text style={styles.title}>{props.title}</Text>
            </View>
            <View style={styles.line}></View>
        </View>
    );
}
const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        marginTop:10,
        marginBottom:10
    },
    title:{
        fontSize:18,
        color:'black',
        alignSelf:'center',
        marginLeft:120
    },
    line:{
        backgroundColor:'gray',
        width:365,
        height:0.7,
        alignSelf:'center'
    }
})
export default TabBar;