import { View,Text, ScrollView, Button, StyleSheet, Image,TouchableOpacity, FlatList} from "react-native";
import TextField from "../../component/TextField";
import {colors, shadow} from '../../config/index'
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../store/actions/error/error_all'
import { avatars } from "../../config/index";
const Home = (props)=>{
    const [errors,setErrors] = useState([]);

    const reducer = useSelector(state =>state.ErrorAll)
    const {errorAll,allStatus} = reducer;
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(actions.ErrorAll())
    },[])

    useEffect(()=>{
        setErrors(errorAll)
    },[errorAll])

    return(
        <View style={styles.body}>
            <TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate("ErrorCreate")}>
                <Text style={styles.buttonText}>Yeni Hata Kaydet</Text>
            </TouchableOpacity>
            <FlatList 
                data={errors}
                numColumns={1} 
                renderItem={({item}) => <View style={styles.card}>
                <View style={styles.userRow}>
                    <Image 
                        source={avatars[item.user.avatar].url}
                        style={{width:50,height:50}}
                    />
                    <Text style={styles.nickText}>{item.user.nick}</Text>
                    <Text style={styles.codeText}>Error Code: {item.error.code}</Text>
                    </View>
                    <Text style={styles.text}> {item.error.title}</Text>
                    <Text style={styles.text}> {item.error.solution}</Text>
                        <TouchableOpacity style={styles.editButton} onPress={()=>props.navigation.navigate("ErrorUpdate",{error:item.error})}>
                            <Image
                                style={styles.edit}
                                source={require('../../assets/images/edit.png')}
                            />
                        </TouchableOpacity>
                </View>}
                key={(item) => item.error.error_id} 
                keyExtractor={item => item.error.error_id} 
                contentContainerStyle={styles.content} 
            />
        </View>
    );   
}

const styles = StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:'#F7F6FB'
    },  
    content: {
        flex:1,
        paddingVertical: '5%',
        paddingHorizontal: '5%',
    },
    edit:{
        width:30,
        height:30,
        marginLeft:20
    },
    delete:{
        width:30,
        height:30,
    },
    card:{
        backgroundColor:'white',
        width:'100%',
        minHeight:'30%',
        borderRadius:4,
        ...shadow,
        padding:15,
        marginBottom:'5%'
    },
    editButton:{
        alignSelf:'flex-end',
    },
    userRow:{
        flexDirection:'row'
    },
    nickText:{
        fontSize:16,
        alignSelf:'center',
        marginLeft:20,
        fontWeight:'700'
    },
    codeText:{
        fontSize:14,
        alignSelf:'center',
        marginLeft:50,

    },
    text:{
        margin:5,marginTop:20
    },
    button:{
        backgroundColor:colors.primary,
        width:'90%',
        height:50,
        borderRadius:4,
        alignSelf:'center',
        marginTop:20,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        color:'white',
        fontSize:16
    }
  })

export default Home;