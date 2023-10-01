import { View, Text, TouchableOpacity, StyleSheet, ScrollView,Image, FlatList} from 'react-native';
import TextField from '../../component/TextField'; 
import { colors } from '../../config';
import { avatars } from "../../config";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../store/actions/user/user_create'
const SignUp = (props) => {
    const [nick, setNick] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');
    const [avatar, setAvatar] = useState(-1);
    const [error, setError] = useState(null);
    const [check, setCheck] = useState(true);

    const reducer = useSelector(state =>state.UserCreate)
    const {userCreate,userCreateStatus} = reducer;
    const dispatch = useDispatch()

    const create = () =>{
      dispatch(actions.UserCreate(nick,password,avatar))
    }

    useEffect(()=>{
        setError('');
    },[])

    useEffect(()=>{
        if(userCreateStatus=='response'){
            console.log("başarılı");
            props.navigation.navigate("Login")
        }
        else{
          if(userCreateStatus =='failure'){
            setMessage('nick veya şifre hatalı')
          }
        }
    },[userCreate])
    return (
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false} nestedScrollEnabled = {true}>
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
          <Text style={styles.title}>Error Solution</Text>
          <Text style={styles.lower}>Haydi sende katıl aramıza</Text>   
          <TextField
              style={styles.textField}
              value={nick}
              label="Kullanıcı Adı"
              errorText={error}
              onChangeText={(text) => setNick(text)}
          />
          <TextField
              style={styles.textField}
              value={password}
              label="Şifre"
              errorText={error}
              onChangeText={(text) => setPassword(text)}
          />
          <TextField
              style={styles.textField}
              value={passwordAgain}
              label="Şifre Tekrar"
              errorText={error}
              onChangeText={(text) => setPasswordAgain(text)}
          />
          <ScrollView horizontal={true} style={{maxHeight:'10%',marginBottom:'5%'}} showsHorizontalScrollIndicator={false} >
           {
              avatars.map((item,index) => 
                <TouchableOpacity key={index} style={{padding:'0.4%',borderWidth:1,marginRight:5,borderRadius:4,borderColor:'gray',backgroundColor: (index) === avatar ? colors.primary : 'white'}} onPress={()=>{setAvatar(index)}}>
                    <Image 
                      style={styles.avatarImage}
                      source={item.url}
                    />
                </TouchableOpacity>
            )}
          </ScrollView>
          <TouchableOpacity style={styles.button} onPress={create}>
            <Text style={styles.buttonText}>Üye Ol</Text>
          </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  content: {
      paddingTop: '5%',
      paddingHorizontal: '10%',
      flex:1,
      backgroundColor: 'white',
  },
  title: {
      fontFamily: 'Gilroy-Bold',
      color: 'black',
      fontSize: 32,
      alignSelf:'center'
  },
  lower: {
      fontFamily: 'Gilroy-Bold',
      fontSize: 14,
      alignSelf:'center',
      marginBottom: 40,
  },
  textField: {
      marginBottom: '5%', 
  },
  backArrow:{
    width:'6%',
    height:'3%',
    marginBottom:'5%'
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
  backButton:{
    width:'8%',
    height:'4%',
    marginBottom:'5%',
},
  bottomRow:{
      marginTop:'1%'
  },
  logo:{
      width:'60%',
      height:'20%',
      alignSelf:'center'
  },
  check:{
      width:'10%',
      height:'90%',
      marginRight:'1%'
  },
  checkButton:{
      marginTop:'5%',
      flexDirection:'row'
  },
  checkText:{
      color:'#B8B8B8',
      fontFamily:'Gilroy-Medium',
      fontSize:16,
      lineHeight:16,
      marginTop:'1%',
      marginLeft:'2%'
  },
  avatarImage:{
    width:50,
    height:50
  },
  box:{
    width:20,
    height:20,
    borderWidth:1,
    borderColor:'#B8B8B8',
    backgroundColor:'white',
    borderRadius:4
  }
});

export default SignUp;
