import { View,Text,Image,StyleSheet, TouchableOpacity,ScrollView} from "react-native";
import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import ShareCard from "../../component/ShareCard";
import { shadow} from "../../config";
import { actions } from "../../store/actions";
const ProfilDif = (props) => {

    const [shares,setShares] = useState([]);
    const [nick,setNick] = useState('');
    const [bio,setBio] = useState('');
    const [avatar,setAvatar] = useState(1);
    const [reactUser, setReactUser] = useState([]);
    const dispatch = useDispatch();
    const sharesReducer = useSelector(state=>state.ShareUser)
    const reactUserShareReducer = useSelector(state=>state.ReactShareUser)
    const userReducer = useSelector(state =>state.UserFind);  
    const {reactShareUser, reactShareUserStatus} = reactUserShareReducer;
    const {shareUser} = sharesReducer;
    const {userFind} = userReducer;

    useEffect(()=>{
        dispatch(actions.UserFind(props.route.params.user_id))
    },[])

    useEffect(()=>{
        setShares(shareUser)
    },[shareUser])

    useEffect(()=>{
        setNick(userFind.nick);
        setBio(userFind.bio_text);
        setAvatar(userFind.avatar);
    },[userFind])

    useEffect(()=>{
        setReactUser(reactShareUser)
        dispatch(actions.ShareUser(props.route.params.user_id))
    },[reactShareUser])

    return(
        <View>
            <View style={styles.tabRow}>
                <View style={styles.row}>
                    <Image 
                        style={styles.image}
                        source={{uri:'http://yonetimpanel.com/admin/uploads/avatar/'+ avatar + '.png'}}
                    />
                    <View style={styles.nickRow}>
                        <Text style={styles.nickText}>{nick}</Text>
                    </View>
                </View>
                <View style={styles.bioRow}>
                    <Text style={styles.bioText}>{bio}</Text>
                </View>
                <TouchableOpacity style={styles.messageButton}>
                    <Text style={styles.messageButtonText}>Mesaj Gönder</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.ShareRow}>
                {shares.map((item,index) => {
                    return <ShareCard item={item} reactUser={reactUser} key={index} index={index} navigation={props.navigation}/>
                })}
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    tabRow:{
        ...shadow,
        backgroundColor:'#D8C4B6',
        borderRadius:5,
        width:334,
        alignSelf:'center',
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
        paddingVertical:10
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