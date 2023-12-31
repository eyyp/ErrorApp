import { View,Text, ScrollView, Button, StyleSheet, Image,TouchableOpacity} from "react-native";
import TextField from "../../component/TextField";
import {colors} from '../../config/index'
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../store/actions/user/user_check'
const Login = (props)=>{
    const [nick,setNick] = useState();
    const [password,setPassword] = useState();
    const [message,setMessage] = useState('');
    const reducer = useSelector(state =>state.UserCheck)
    const {userCheck,userStatus} = reducer;
    const dispatch = useDispatch()

    const login = () =>{
        dispatch(actions.UserCheck(nick,password))
    }

    useEffect(()=>{
        setMessage('');
    },[])

    useEffect(()=>{
        if(userStatus =='response'){
            props.navigation.navigate("Home")
        }
        else{
            if(userStatus =='failure'){
                setMessage('nick veya şifre hatalı')
            }
        }
        console.log(userStatus)
    },[userCheck])
    return(
        <ScrollView contentContainerStyle={styles.content}>
            <View style={{borderRadius:10,backgroundColor:'white',width:'100%',height:'100%',padding:'5%'}}>
                <Image 
                    style={styles.logo}
                    source={require('../../assets/images/logo.png')}
                />
                <Text style={styles.title}>Error Solution</Text>
                <Text style={styles.lower}>Hataların Çözüm Merkezi</Text>
                <TextField
                    style={styles.textField}
                    value={nick}
                    label="Kullanıcı Adı"
                    errorText={message}
                    onChangeText={(text) => setNick(text)}
                />
                <TextField
                    style={styles.textField}
                    value={password}
                    label="Şifre"
                    errorText={message}
                    onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity style={styles.button} onPress={login}>
                    <Text style={styles.buttonText}>Giriş</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signupButton} onPress={()=>props.navigation.navigate('Signup')}>
                    <Text style={styles.or}>or</Text>
                    <Text style={styles.signup}>Üye Ol</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>  
    );   
}

const styles = StyleSheet.create({
    content: {
      paddingVertical: '5%',
      paddingHorizontal: '5%',
      flex:1,
      backgroundColor:'#F7F6FB'
    },
    title: {
      fontFamily: 'Gilroy-Bold',
      color: 'black',
      fontSize: 32,
      marginLeft:'24%',
    },
    lower: {
      fontFamily: 'Gilroy-Bold',
      fontSize: 14,
      marginLeft:'30%',
      marginBottom:'40%',
    },
    textField: {
      marginBottom: '5%',
    },
    backArrow:{
        width:'6%',
        height:'3%',
        marginBottom:'5%'
    },
    signup:{
        color:colors.primary,
        fontSize:20,
        alignSelf:'center'
    },
    signupButton:{
        marginTop:'10%',
        alignSelf:'center'
    },
    or:{
        color:'gray',
        fontSize:16,
        marginBottom:'5%',
        alignSelf:'center'
    },
    line:{
        width:'100%',
        height:'0.1%',
        backgroundColor:'gray'
    },
    button:{
        backgroundColor:colors.primary,
        width:'100%',
        height:'6%',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center' 
    },
    buttonText:{
        color:'white',
        fontSize:16,
        lineHeight:16
    },
    bottomRow:{
        marginTop:'1%'
    },
    logo:{
        width:'50%',
        height:'20%',
        alignSelf:'center'
    },
    check:{
        width:'14%',
        height:'100%',
        marginRight:'1%'
    },
    checkButton:{
        marginTop:'5%',
        flexDirection:'row'
    },
    checkText:{
        color:'black',
        fontFamily:'Gilroy-Medium',
        fontSize:16,
        lineHeight:16,
        marginTop:2
    },
    forgotButton:{
        alignSelf:'flex-end', 
    },
    forgotText:{
        fontSize:16,
        lineHeight:16,
        color:'black'
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
  })

export default Login;