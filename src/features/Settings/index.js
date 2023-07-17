import { View, StyleSheet, TouchableOpacity,Text,Image,TextInput} from "react-native";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { actions } from "../../store/actions";
const Settings = (props) =>{
    const [visible,setVisible] = useState(false);
    const [password,setPassword] = useState('');
    const [passwordAgain,setPasswordAgain] = useState('');
    const [message,setMessage] = useState('');
    const {userCheck} = useSelector(state => state.UserCheck)
    const {changePassword, status} = useSelector(state => state.ChangePassword)
    const dispatch = useDispatch()

    const save = () =>{
        if(password === passwordAgain){
            dispatch(actions.UserChangePassword(userCheck.user_id,password));
        }
        else{
            setMessage('Şifreler uyuşmuyor');
        }
    }

    useEffect(()=>{
        if(status == 'response'){
            props.navigation.navigate("Login")
        }
    },[changePassword])

    return(
        <View style={styles.Body}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.settingsButton} onPress={()=>setVisible(!visible)}>
                    <Text style={styles.setttingsButtonText}>Şifre Değiştir</Text>
                    {visible ?
                        <Image 
                            style={styles.down}
                            source={require('../../assets/icon/down.png')}
                        />
                        :<Image 
                            style={styles.right}
                            source={require('../../assets/icon/right.png')}
                        />
                    }
                </TouchableOpacity>
                {visible &&
                    <View style={styles.inputRow}>
                        <TextInput style={styles.input} autoCorrect={false} autoCapitalize='none' onChangeText={password => setPassword(password)} secureTextEntry={true} placeholder="Şifre" placeholderTextColor={'#000000'}/>
                        <TextInput style={styles.input} autoCorrect={false} autoCapitalize='none' onChangeText={password => setPasswordAgain(password)} secureTextEntry={true} placeholder="Şifre Tekrar" placeholderTextColor={'#000000'}/>
                        <Text style={{color:'red'}}>{message}</Text>
                        <TouchableOpacity style={styles.saveButton} onPress={()=>save()}>
                            <Text style={styles.saveButtonText}>Kaydet</Text>
                        </TouchableOpacity>                
                    </View>
                }
                <TouchableOpacity style={styles.settingsButton} onPress={()=>props.navigation.navigate('Login')}>
                        <Text style={styles.setttingsButtonText}>Çıkış Yap</Text>
                        <Image 
                            style={styles.logout}
                            source={require('../../assets/icon/logout.png')}
                        />
                </TouchableOpacity>
            </View>
        </View>
    );

}
const styles = StyleSheet.create({
    Body:{
        flex:1,
        backgroundColor:'#F5EFE7'
    },
    container:{
        paddingHorizontal:30,
        paddingVertical:20
    },
    settingsButton:{
        marginTop:10,
        width:330,
        height:40,
        backgroundColor:'#D8C4B6',
        borderRadius:5,
        justifyContent:'space-between',
        paddingTop:10,
        paddingHorizontal:15,
        flexDirection:'row'
    },
    setttingsButtonText:{
        color:'#000000'
    },
    right:{
        width:13,
        height:13,
        marginTop:4
    },
    down:{
        width:20,
        height:20,
        marginTop:2
    },
    logout:{
        width:25,
        height:25,
    },
    inputRow:{
        width:330,
        marginTop:10,
        mniHeight:170,
        backgroundColor:'#D8C4B6',
        borderRadius:5,
        padding:15
    },
    input:{
        width:300,
        height:40,
        borderRadius:5,
        backgroundColor:'#F5EFE7',
        paddingLeft:15,
        marginBottom:10
    },
    saveButton:{
        width:100,
        height:40,
        backgroundColor:'#F5EFE7',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    },
    saveButtonText:{
        color:'#000000'
    }
})
export default Settings;