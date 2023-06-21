import { View,TextInput,StyleSheet, TouchableOpacity,Text,Image} from "react-native";
const Login = () =>{
    return(
        <View style={styles.Body}>
            <View style={{marginLeft:140,marginTop:60}}>
                <Image 
                    style={{width:100,height:100}}
                    source={require('../../assets/images/cap2.png')}
                />
                <Text style={{fontSize:22,color:'black'}}>bi Kampüs</Text>
            </View>
            <View style={styles.inputRow}>
                <TextInput style={styles.input} placeholder="Email" placeholderTextColor={'#000000'}/>
                <TextInput style={styles.input} secureTextEntry={true} placeholder="Şifre" placeholderTextColor={'#000000'}/>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Giriş Yap</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Login;

const styles = StyleSheet.create({
    Body:{
        flex:1,
        backgroundColor:'#F5EFE7'
    },
    input:{
        width:320,
        height:55,
        backgroundColor:'white',
        borderRadius:10,
        marginTop:15,
        paddingLeft:20,
    },
    button:{
        backgroundColor:'#4F709C',
        borderRadius:10,
        width:300,
        height:60,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
        marginLeft:10
    },
    buttonText:{
        color:'white',
        fontSize:19
    },
    inputRow:{
        marginTop:80,
        paddingLeft:32
    }
})