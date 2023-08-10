import { View,Text,Image,StyleSheet, TouchableOpacity,ScrollView} from "react-native";
import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import ShareCard from "../../component/ShareCard";
import { shadow, avatars} from "../../config";
import { actions } from "../../store/actions";
const ProfilDif = (props) => {

    const [shares,setShares] = useState([]);
    const [nick,setNick] = useState('');
    const [bio,setBio] = useState('');
    const [gearVisible,setGearVisible] = useState(false);
    const [avatar,setAvatar] = useState(0);
    const [reactUser, setReactUser] = useState([]);
    const dispatch = useDispatch();
    const sharesReducer = useSelector(state=>state.ShareUser)
    const reactUserShareReducer = useSelector(state=>state.ReactShareUser)
    const userReducer = useSelector(state =>state.UserCheck); 
    const {reactShareUser, reactShareUserStatus} = reactUserShareReducer;
    const {shareUser} = sharesReducer;
    const {userCheck} = userReducer;
    useEffect(()=>{
        dispatch(actions.ReactShareUser(userCheck.user_id))
    },[])

    useEffect(()=>{
        setShares(shareUser)
    },[shareUser])

    useEffect(()=>{
        setReactUser(reactShareUser)
        dispatch(actions.ShareUser(userCheck.user_id))
    },[reactShareUser])

    useEffect(()=>{
        setNick(userCheck.nick)
        setBio(userCheck.bio_text)
        setAvatar(userCheck.avatar)
        setGearVisible(true)
    },[userCheck])

    return(
        <View style={styles.body}>
            <View style={styles.tabRow}>
                <View style={styles.row}>
                    <Image 
                        style={styles.image}
                        source={{uri:'http://yonetimpanel.com/admin/uploads/avatar/'+ avatar + '.png'}}
                    />
                    <View style={styles.nickRow}>
                        <Text style={styles.nickText}>{nick}</Text>
                    </View>
                    {gearVisible &&
                        <TouchableOpacity onPress={()=>props.navigation.navigate("Settings",{user_id:userCheck.user_id})}>
                            <Image 
                                style={styles.gearImage}
                                source={require('../../assets/icon/gear.png')}
                            />
                        </TouchableOpacity>
                    }
                </View>
                <View style={styles.bioRow}>
                    <Text style={styles.bioText}>{bio}</Text>
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.ShareRow}>
                {shares.map((item,index) => {
                    return <ShareCard key={index.toString()} item={item} reactUser={reactUser}  index={index} navigation={props.navigation}/>
                })}
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    body:{
        backgroundColor:'#F5EFE7',
    },  
    tabRow:{
        ...shadow,
        backgroundColor:'#D8C4B6',
        borderRadius:5,
        width:334,
        alignSelf:'center',
        marginTop:10
    },
    gearImage:{
        width:30,
        height:30,
        marginLeft:120,
        marginTop:10
    },
    row:{
        flexDirection:'row',
        padding:10,
    },
    image:{
        width:70,
        height:70
    },
    nickText:{
        fontSize:12,
        fontWeight:'400',
        color:'black'
    },
    bioText:{
        padding:15,
        color:'black',
        fontSize:12
    },
    line:{
        width:'95%',
        height:0.3,
        backgroundColor:'gray',
        alignSelf:'center',
        marginTop:2
    },
    ShareRow:{
        width:390,
        paddingVertical:20,
    },
    messageButton:{
        marginBottom:10,
        marginLeft:10,
        width:150,
        height:40,
        borderRadius:5,
        backgroundColor:'#F5EFE7',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center'
    },
    messageButtonText:{
        fontSize:15,
        fontWeight:'500'
    },
    nickRow:{
        width:80,
        height:30,
        backgroundColor:'#F5EFE7',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
        marginLeft:5
    },
    bioRow:{
        width:300,
        height:120,
        backgroundColor:'#F5EFE7',
        alignSelf:'center',
        borderRadius:5,
        marginBottom:10
    }
})
export default ProfilDif;