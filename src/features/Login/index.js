import { View,TextInput,StyleSheet, TouchableOpacity,Text,Image, ActivityIndicator} from "react-native";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../store/actions/user/user_check'
const Login = (props) =>{
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [message,setMessage] = useState('');
    const reducer = useSelector(state =>state.UserCheck)
    const {userCheck,userStatus} = reducer;
    const dispatch = useDispatch()

    const login = () =>{
        dispatch(actions.UserCheck(email,password))
    }

    useEffect(()=>{
        setMessage('');
    },[])

    useEffect(()=>{
        if(userStatus=='response'){
            if(userCheck.status != 'dont'){
                if(userCheck.active === 1){
                    props.navigation.navigate("Vote")
                }
                else {
                    setMessage('Lütfen Emailinize gelen kod ile hesabınızı aktif ediniz')
                }
            }
            else{
                setMessage('Email veya şifreniz hatalı')
            }
        }
        
    },[userCheck])

    return(
        <View style={styles.Body}>
            <View style={{marginLeft:140,marginTop:60}}>
                <Image 
                    style={{width:100,height:100}}
                    source={require('../../assets/images/cap2.png')}
                />
                <Text style={{fontSize:22,color:'black'}}>Bi Kampüs</Text>
            </View>
            <View style={styles.inputRow}>
                {!!message && <Text style={styles.poupText}>{message}</Text>}
                <TextInput style={styles.input} autoCorrect={false} autoCapitalize='none' onChangeText={mail => setEmail(mail)} placeholder="Email" placeholderTextColor={'#000000'}/>
                <TextInput style={styles.input} autoCorrect={false} autoCapitalize='none' onChangeText={password => setPassword(password)} secureTextEntry={true} placeholder="Şifre" placeholderTextColor={'#000000'}/>
                <TouchableOpacity style={styles.button} disabled={userStatus === 'onLoader' ? true : false} onPress={() => login()}>
                    {userStatus === 'onLoader' ? 
                        <ActivityIndicator color={'white'}/>
                        : <Text style={styles.buttonText}>Giriş Yap</Text>
                    }
                </TouchableOpacity>
            </View>
            <View style={styles.line}></View>
                <TouchableOpacity style={styles.signupButton} onPress={() => props.navigation.navigate("Signup")}>
                <Text >Hesabın yok mu ?</Text>
                    <Text style={{color:'#4F709C',paddingLeft:10}}>Kayıt Ol</Text>
                </TouchableOpacity>
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
    },
    poupText:{
        width:320,
        height:55,
        backgroundColor:'red',
        color:'white',
        borderRadius:5,
        textAlignVertical:'center',
        paddingLeft:20
    },
    line:{
        width:390,
        height:1,
        backgroundColor:'#4F709C',
        marginTop:230
    },
    signupButton:{
        marginTop:10,
        marginLeft:110,
        flexDirection:'row'
    }
})