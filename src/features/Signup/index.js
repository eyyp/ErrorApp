import { View,TextInput,StyleSheet, TouchableOpacity,Text,Image, ScrollView,ActivityIndicator} from "react-native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../store/actions/user/user_create'
import * as actionsNick from '../../store/actions/user/user_nick_chechk'
import { shadow } from "../../config";
import { signUpValidation } from "../../lib/signUpValidation";
import { avatars } from "../../config";
const Signup = (props) =>{
    const nickReducer = useSelector(state => state.NickCheck);
    const createReducer = useSelector(state => state.UserCreate);
    const {nickCheck,nickStatus} = nickReducer;
    const {userCreate, status} = createReducer;
    const dispatch = useDispatch();

    const [email,setEmail] = useState('');
    const [nick,setNick] = useState('');
    const [password,setPassword] = useState('');
    const [passwordAgain,setPasswordAgain] = useState('');
    const [gender,setGender] = useState();
    const [bio,setBio] = useState('');
    const [userAc,setUserAc] = useState(false);
    const [kvkk,setKvkk] = useState(false);
    const [offer,setOffer] = useState(false);
    const [avatar,setAvatar] = useState('0');
    const [error,setError] = useState();

    const SignUp = () => {
        const res = signUpValidation(email,password,passwordAgain,bio)
        if(res.situation){
            if(avatar !== '0' && userAc && kvkk && gender != null && nickStatus.status !== 'false'){
                dispatch(actions.UserCreate(email,nick,password,gender,bio,avatar+1))
            }
        }
        else{
            setError(res.message);
        }
    }

    const SetAvatar = (value) => {
        setAvatar(value)
    }

    useEffect(()=>{
        props.navigation.navigate("Login")
    },[userCreate])

    return(
        <ScrollView style={styles.Body} showsHorizontalScrollIndicator={false}>
            <Image 
                source={require('../../assets/icon/left.png')}
            />            
            <View style={styles.logoRow}>
                <Image 
                    style={styles.logo}
                    source={require('../../assets/images/cap2.png')}
                />     
            </View>
            <View style={styles.inputRow}>

                <Text style={[styles.errorMessage,{backgroundColor:!!error && 'red'}]}>{!!error ? error.message : ''}</Text>
                <TextInput style={styles.input} placeholder="Email" onChangeText={mail => setEmail(mail)} maxLength={30} placeholderTextColor={'#000000'}/>
                { nickStatus == 'onLoader' ?
                    <ActivityIndicator 
                        style={styles.indicator}
                    />
                    : nickCheck.status == 'false' ? 
                        <Image 
                            style={styles.nickCheckImage} 
                            source={require('../../assets/icon/check.png')}
                        />
                    : nickCheck.status == 'true'  &&
                        <Image 
                            style={styles.nickCheckImage} 
                            source={require('../../assets/icon/close.png')}
                        />
                }
 
                <TextInput style={styles.input} placeholder="Nick" onChangeText={nick => {dispatch(actionsNick.NickCheck(nick));setNick(nick)}} maxLength={15} placeholderTextColor={'#000000'}/>
                
                <TextInput style={styles.input} secureTextEntry={true} placeholder="Şifre"  maxLength={20} onChangeText={password => setPassword(password)} placeholderTextColor={'#000000'}/>
                <TextInput style={styles.input} secureTextEntry={true} placeholder="Tekrar Şifre" maxLength={20} onChangeText={passwordAgain => setPasswordAgain(passwordAgain)} placeholderTextColor={'#000000'}/>
                <TextInput style={styles.input} maxLength={40} placeholder="Biyografi" onChangeText={bio => {setBio(bio)}} placeholderTextColor={'#000000'}/>
                <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}>
                    {
                        avatars.map((item,index) => 
                        <TouchableOpacity key={index} style={[styles.avatarButton,{backgroundColor: (index) === avatar ? '#D8C4B6' : 'white'}]} onPress={()=>{SetAvatar(index)}}>
                            <Image 
                                style={styles.avatarImage}
                                source={item.url}
                            />
                        </TouchableOpacity>
                    )}
                </ScrollView>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.checkButton} onPress={()=>setGender(1)}>
                        {gender === 1 
                        ?<Image 
                                style={styles.checkImage}
                                source={require('../../assets/icon/box.png')}
                            />
                        :<View style={styles.box}>
                        </View>
                        }
                    </TouchableOpacity>
                    <Text style={styles.checkText}>Erkek</Text>
                    <TouchableOpacity style={styles.checkButton} onPress={()=>setGender(0)}>
                        {gender === 0 
                            ?   <Image 
                                    style={styles.checkImage}
                                    source={require('../../assets/icon/box.png')}
                                />
                            :   <View style={styles.box}>
                                </View>
                        }
                    </TouchableOpacity>
                    <Text style={styles.checkText}>Kız</Text>
                </View>      
                <View style={styles.row}>
                    <TouchableOpacity style={styles.checkButton} onPress={()=>setUserAc(!userAc)}>
                    {userAc  
                            ?   <Image 
                                    style={styles.checkImage}
                                    source={require('../../assets/icon/box.png')}
                                />
                            :   <View style={styles.box}>
                            </View>
                        }
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.agreementButton,styles.row]} onPress={()=>props.navigation.navigate("UserAgremeent")}>
                        <Text style={styles.agreementButtonText}>Kullanıcı & Üyelik Sözleşmesi'</Text>
                        <Text style={styles.agreementText}> anladım ve kabul ediyorum.</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.checkButton} onPress={()=>setKvkk(!kvkk)}>
                    {kvkk 
                            ?   <Image 
                                    style={styles.checkImage}
                                    source={require('../../assets/icon/box.png')}
                                />
                            :   <View style={styles.box}>
                            </View>
                        }
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.agreementButton} onPress={()=>props.navigation.navigate("Kvkk")}>
                        <View style={styles.row}>
                            <Text style={styles.agreementButtonText}>KVKK Metni’ni ve Aydınlatma Metni’</Text>
                            <Text style={styles.agreementText}>ni okudum,</Text>
                        </View>
                        <Text style={styles.agreementText}>anladım ve kabul ediyorum.</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.checkButton} onPress={()=>setOffer(!offer)}>
                    {offer  
                            ?   <Image 
                                    style={styles.checkImage}
                                    source={require('../../assets/icon/box.png')}
                                />
                            :   <View style={styles.box}>
                            </View>
                        }
                    </TouchableOpacity>
                    <Text style={styles.checkText}>Kampanya ve tanıtımlar için Email, Telefon ve Sms ile iletişim kurulmasını kabul ediyorum.</Text>
                </View>
                <TouchableOpacity style={[{opacity:(userAc && kvkk && gender != null && nickStatus.status !== 'false') ? 1 : 0.5},styles.button]} disabled={(userAc && kvkk && gender != null && nickStatus.status !== 'false') ? false : true} onPress={()=>SignUp()}>
                    <Text style={styles.buttonText}>Kayıt Ol</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
export default Signup;

const styles = StyleSheet.create({
    Body:{
        flex:1,
        backgroundColor:'#F5EFE7',
    },
    logoRow:{
        marginLeft:140,
        marginTop:20
    },
    logo:{
        width:90,
        height:120
    },
    errorMessage:{
        width:320,
        height:55,
        borderRadius:5,
        color:'white',
        textAlignVertical:'center',
        paddingLeft:17
    },
    logoText:{
        fontSize:22,
        color:'black'
    },  
    input:{
        width:320,
        height:55,
        backgroundColor:'white',
        borderRadius:10,
        marginTop:15,
        paddingLeft:20,
    },
    box:{
        width:20,
        height:20,
        borderRadius:5,
        backgroundColor:'white'
    },
    button:{
        backgroundColor:'#4F709C',
        borderRadius:10,
        width:320,
        height:60,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
        marginBottom:20,
    },
    buttonText:{
        color:'white',
        fontSize:19
    },
    inputRow:{
        paddingLeft:32
    },
    checkButton:{
        marginTop:10
    },
    row:{
        flexDirection:'row'
    },
    checkText:{
        marginTop:11,
        marginLeft:5,
        color:'black',
        fontSize:12,
        marginRight:10,
        paddingRight:40
    },
    agreementText:{
        color:'black',
        fontSize:12,
        marginRight:10,
        paddingRight:40
    },
    agreementButtonText:{
        marginLeft:5,
        color:'blue',
        fontSize:12,
    },
    agreementButton:{
        marginTop:11,
    },
    checkImage:{
        width:20,
        height:20
    },
    avatarButton:{
        borderRadius:5,
        width:68,
        height:68,
        alignItems:'center',
        justifyContent:'center',
        marginRight:15,
        ...shadow,
        marginVertical:10
    },
    avatarImage:{
        width:50,
        height:50
    },
    indicator:{
        color:'black',
        position:'absolute',
        zIndex:9999,
        marginLeft:310,
        marginTop:155
    },
    nickCheckImage:{
        width:25,
        height:25,
        position:'absolute',
        marginTop:155,
        marginLeft:310,
        zIndex:998
    }
})