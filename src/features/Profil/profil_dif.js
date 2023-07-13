import { View,Text,Image,StyleSheet, TouchableOpacity} from "react-native";
import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import ShareCard from "../../component/ShareCard";
import { shadow } from "../../config";
import { actions } from "../../store/actions";
const ProfilDif = (props) => {

    const [shares,setShares] = useState([]);
    const [nick,setNick] = useState('');
    const [bio,setBio] = useState('');
    const [avatar,setAvatar] = useState(1);
    const dispatch = useDispatch();
    const shareUserReducer = useSelector(state=>state.ShareUser);
    const userShareReducer = useSelector(state=>state.UserShareData);
    const {shareUser} = shareUserReducer;
    const {shareData} = userShareReducer;
    useEffect(()=>{
        dispatch(actions.ShareUser(props.route.params.user_id))
        dispatch(actions.UserShareData(props.route.params.user_id))
    },[])

    useEffect(()=>{
        setShares(shareUser)
    },[shareUser])

    useEffect(()=>{
        setNick(shareData.nick);
        setBio(shareData.bio);
        setAvatar(shareData.avatar)
    },[shareData])

    return(
        <View>
            <View style={styles.tabRow}>
                <View style={styles.row}>
                    <Image 
                        style={styles.image}
                        source={require('../../assets/images/avatar/1.png')}
                    />
                    <Text style={styles.nickText}>{nick}</Text>
                </View>
                <Text style={styles.bioText}>{bio}</Text>
                <TouchableOpacity style={styles.messageButton}>
                    <Text style={styles.messageButtonText}>Mesaj Gönder</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.ShareRow}>
                {shares.map((item,index) => {
                    return <ShareCard item={item} key={index} index={index} navigation={props.navigation}/>
                })}
            </View>
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
        fontSize:15,
        fontWeight:'400',
        color:'black',
        marginLeft:15,
        marginTop:20
    },
    bioText:{
        padding:15,
        color:'black',
        fontWeight:'400',
        fontSize:15
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
        alignItems:'center',
        justifyContent:'center'
    },
    messageButtonText:{
        fontSize:15,
        fontWeight:'500'
    }
})
export default ProfilDif;