import { View,Text, ScrollView, Button, StyleSheet, Image,TouchableOpacity} from "react-native";
import TextField from "../../component/TextField";
import {colors} from '../../config/index'
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../store/actions/error/error_create'
const ErrorCreate = (props)=>{
    const [code,setCode] = useState();
    const [title,setTitle] = useState();
    const [solution,setSolution] = useState();
    const [message,setMessage] = useState(null);
    const reducer = useSelector(state =>state.UserCheck)
    const {userCheck,userStatus} = reducer;
    const reducerCreate = useSelector(state =>state.ErrorCreate)
    const {errorCreate,createStatus} = reducerCreate;
    const dispatch = useDispatch()

    const create = () =>{
        dispatch(actions.ErrorCreate(userCheck.user_id,code,title,solution))
    }

    useEffect(()=>{
        setMessage(null);
    },[])

    useEffect(()=>{
        if(createStatus =='basic' || createStatus == 'disabledLoader' || createStatus == 'end'){
            props.navigation.navigate("Home")
        }
        else{
            if(createStatus =='failure'){
                setMessage('İşlem başarısız')
            }
        }
    },[errorCreate])
    return(
        <ScrollView contentContainerStyle={styles.content}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.backButton} onPress={()=>props.navigation.goBack()}>
                    <Image 
                        style={styles.backArrow}
                        source={require('../../assets/icon/left.png')}
                    />
                </TouchableOpacity>
                <Image 
                    style={styles.logo}
                    source={require('../../assets/images/logo.png')}
                />
                <Text style={styles.title}>Hata Kaydet</Text>
                <Text style={styles.lower}>Haydi şu iğrenç hatadan kurtulalım</Text>
                <TextField
                    style={styles.textField}
                    value={code}
                    label="Kod"
                    errorText={message}
                    onChangeText={(text) => setCode(text)}
                />
                <TextField
                    style={styles.textField}
                    value={title}
                    label="Başlık"
                    errorText={message}
                    onChangeText={(text) => setTitle(text)}
                />
                <TextField
                    style={styles.textField}
                    value={solution}
                    label="Çözüm"
                    errorText={message}
                    onChangeText={(text) => setSolution(text)}
                />
                <TouchableOpacity style={styles.button} onPress={create}>
                    <Text style={styles.buttonText}>Kaydet</Text>
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
    container:{
        borderRadius:10,
        backgroundColor:'white',
        width:'100%',
        height:'100%',
        padding:'5%'
    },
    title: {
      fontFamily: 'Gilroy-Bold',
      color: 'black',
      fontSize: 32,
      marginLeft:'24%',
    },
    backButton:{
        width:'8%',
        height:'4%',
        marginBottom:'5%',
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
        width:'100%',
        height:'100%',
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

export default ErrorCreate;