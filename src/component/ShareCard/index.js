import { useState, useEffect} from 'react';
import { View,Image, Text,TouchableOpacity,StyleSheet,ScrollView, TextInput} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/actions';
const ShareCard = (props) =>{
    const [com,setCom] =useState([]);
    const [comment,setComment] = useState('');
    const [commentVisible,setCommentVisible] = useState(false);
    const [reactUserShare,setReactUserShare] = useState({});
    const [sendVisible,setSendVisible] = useState(false);
    const dispatch = useDispatch();
    const userReducer = useSelector(state => state.UserCheck)
    const commentReducer = useSelector(state => state.Comment)
    const {userCheck} = userReducer;
    const {commentCreate} = commentReducer;
    useEffect(()=>{
        setReactUserShare(props.reactUser.find((element)=>{
            return element.share_id == props.item.share.share_id
        }))
        console.log('http://yonetimpanel.com/admin/uploads/avatar/'+ props.item.user?.avatar + '.png')
    },[])

    const sendComment = () =>{
        dispatch(actions.CommentCreate(userCheck.user_id,props.item.share.share_id,comment));
    }

    useEffect(()=>{
        setSendVisible(true)
    },[userCheck])

    useEffect(()=>{
        setComment('')
    },[commentCreate])

    return(
        <View>
            <View style={styles.card}>
                <TouchableOpacity style={styles.profilRow} onPress={()=>props.navigation.navigate("ProfilDif",{user_id:props.item.user.user_id})}>
                    <Image
                        style={styles.avatarImage}
                        source={{uri:'http://yonetimpanel.com/admin/uploads/avatar/' + props.item.user?.avatar + '.png'}}
                    />
                    <Text style={styles.nickText}>{props.item.user?.nick}</Text>
                </TouchableOpacity>
                <View style={styles.shareRow}>
                    <Text style={styles.shareText}>{props.item.share?.share_text}</Text>
                </View>
            </View>
            { !commentVisible &&
            <View>
                <View style={styles.buttonRow} >
                    <TouchableOpacity style={[styles.reactFirstButton,{backgroundColor:reactUserShare?.react_type == "1" ? '#D8C4B6':'#CDCDCD'}]} onPress={()=>{props.navigation.navigate("Home");dispatch(actions.React(props.item.user.user_id,props.item.share.share_id,1))}}>
                        <Image
                            style={styles.image}
                            source={require('../../assets/icon/like.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.reactSecondButton,{backgroundColor:'#CDCDCD'}]} onPress={()=>setCommentVisible(true)}>
                        <Image
                            style={styles.image}
                            source={require('../../assets/icon/comment.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.reactSecondButton,{backgroundColor:reactUserShare?.react_type == "2" ? '#D8C4B6':'#CDCDCD'}]} onPress={()=>dispatch(actions.React(props.item.user.user_id,props.item.share.share_id,2))}>
                        <Image
                            style={styles.image}
                            source={require('../../assets/icon/happy.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.reactSecondButton,{backgroundColor:reactUserShare?.react_type == "3" ? '#D8C4B6':'#CDCDCD'}]} onPress={()=>dispatch(actions.React(props.item.user.user_id,props.item.share.share_id,3))}>
                        <Image
                            style={styles.image}
                            source={require('../../assets/icon/shocked.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.reactSecondButton,{backgroundColor:reactUserShare?.react_type == "4" ? '#D8C4B6':'#CDCDCD'}]} onPress={()=>dispatch(actions.React(props.item.user.user_id,props.item.share.share_id,4))}>
                        <Image
                            style={styles.image}
                            source={require('../../assets/icon/sad.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.reactSecondButton,{backgroundColor:reactUserShare?.react_type == "5" ? '#D8C4B6':'#CDCDCD'}]} onPress={()=>dispatch(actions.React(props.item.user.user_id,props.item.share.share_id,5))}>
                        <Image
                            style={styles.image}
                            source={require('../../assets/icon/angry.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.reactSecondButton,{backgroundColor:reactUserShare?.react_type == "6" ? '#D8C4B6':'#CDCDCD'}]} onPress={()=>dispatch(actions.React(props.item.user.user_id,props.item.share.share_id,5))}>
                        <Image
                            style={styles.image}
                            source={require('../../assets/icon/love.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.reactSecondButton,{backgroundColor:reactUserShare?.react_type == "7" ? '#D8C4B6':'#CDCDCD'}]} onPress={()=>dispatch(actions.React(props.item.user.user_id,props.item.share.share_id,6))}>
                        <Image
                            style={styles.image}
                            source={require('../../assets/icon/thinking.png')}
                        />
                    </TouchableOpacity>
                </View>
                {<View style={styles.buttonRow}>
                    <View style={styles.reactCountFirstRow}>
                        <Text style={styles.reactCountFirstText}>{props.item.react.react_type_1}</Text>
                    </View>
                    <View style={styles.reactCountRow}>
                        <Text style={styles.reactCountFirstText}>{props.item.comments.length}</Text>
                    </View>
                    <View style={styles.reactCountRow}>
                        <Text style={styles.reactCountFirstText}>{props.item.react.react_type_2}</Text>
                    </View>
                    <View style={styles.reactCountRow}>
                        <Text style={styles.reactCountFirstText}>{props.item.react.react_type_3}</Text>
                    </View>
                    <View style={styles.reactCountRow}>
                        <Text style={styles.reactCountFirstText}>{props.item.react.react_type_4}</Text>
                    </View>
                    <View style={styles.reactCountRow}>
                        <Text style={styles.reactCountFirstText}>{props.item.react.react_type_5}</Text>
                    </View>
                    <View style={styles.reactCountRow}>
                        <Text style={styles.reactCountFirstText}>{props.item.react.react_type_6}</Text>
                    </View>
                    <View style={styles.reactCountRow}>
                        <Text style={styles.reactCountFirstText}>{props.item.react.react_type_7}</Text>
                    </View>
            </View>}
            </View>
            }
            {commentVisible &&
                <View>
                    <TouchableOpacity style={styles.closeButton} onPress={()=>setCommentVisible(false)}>
                        <Image 
                            style={styles.closeButtonIcon}
                            source={require('../../assets/icon/cross.png')}
                        />
                    </TouchableOpacity>
                    <ScrollView style={styles.commentRow}>
                    {props.item.comments.map((item,index)=>
                        <View style={styles.commentProfil} key={index}>
                        <Image
                            style={styles.commentProfilImage}
                            source={{uri:'http://yonetimpanel.com/admin/uploads/avatar/'+ item.user.avatar +'.png'}}
                        />
                        <View>
                            <Text style={styles.commentNick}>{item.user.nick}</Text>
                            <Text style={styles.commentText}>{item.item.comment_text}</Text>
                        </View>
                    </View>
                    )}
                    </ScrollView>
                    {sendVisible &&
                        <View style={styles.Row}>
                            <View style={styles.commentInputRow}>
                                <TextInput style={styles.commentInput} placeholder="Yorum yaz..." onChangeText={text => setComment(text)} value={comment}/>
                            </View>
                            <TouchableOpacity style={styles.commentButtonRow} onPress={()=>sendComment()}>
                                    <View style={styles.commentButtonSecondRow}>
                                        <Image 
                                            style={styles.commentSendIcon}
                                            source ={require('../../assets/icon/send.png')}
                                        />
                                    </View>
                            </TouchableOpacity>
                        </View>
                    }
                </View>
            }
        </View>
    );
}
const shadow = {
    shadowColor: "#000",
    shadowOffset:{
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
}
const styles = StyleSheet.create({
    Row:{
        flexDirection:'row'
    },
    card:{
        backgroundColor:'#D8C4B6',
        width:334,
        minHeight:120,
        borderRadius:10,
        ...shadow,
        marginTop:10,
        marginLeft:28,
        paddingBottom:10
    },
    commentRow:{
        backgroundColor:'#D8C4B6',
        width:334,
        minHeight:120,
        borderRadius:10,
        ...shadow,
        marginTop:10,
        marginLeft:28,
        paddingBottom:10
    },
    commentInputRow:{
        backgroundColor:'#D8C4B6',
        width:290,
        height:40,
        borderRadius:5,
        ...shadow,
        marginTop:10,
        marginLeft:28,
        marginBottom:10,
        paddingLeft:3,
    },
    profilRow:{
        width:46,
        height:46,
        marginLeft:14,
        marginTop:11,
        flexDirection:'row',
        backgroundColor:'#F5EFE7',
        borderRadius:10,
        paddingLeft:3,
        paddingTop:3
    },
    nickText:{
        marginLeft:10,
        marginTop:13,
        color:'#3F3F3F',
        fontSize:12,
        minWidth:80,
        height:26,
        borderRadius:5,
        paddingLeft:8,
        paddingRight:8,
        backgroundColor:'#F5EFE7',
        paddingTop:4
    },
    commentNick:{
        marginLeft:7,
        width:50,
        marginTop:15,
        color:'#3F3F3F',
        fontSize:10
    },
    shareRow:{
        width:300,
        ninHeight:100,
        marginTop:14,
        flexDirection:'row',
        backgroundColor:'#F5EFE7',
        borderRadius:5,
        marginLeft:14,
        paddingBottom:5
    },
    commentProfil:{
        width:300,
        minHeight:60,
        marginTop:14,
        flexDirection:'row',
        backgroundColor:'#F5EFE7',
        borderRadius:5,
        marginLeft:14,
        padding:5
    },
    shareText:{
        marginLeft:14,
        marginTop:13,
        marginRight:13,
        fontSize:11,
        color:'#3F3F3F'
    },
    commentText:{
        marginLeft:7,
        marginTop:5,
        marginRight:5,
        fontSize:10,
        width:220,
        color:'#3F3F3F',
        marginBottom:10,
    },
    buttonRow:{
        flexDirection:'row',
    },
    reactFirstButton:{
        backgroundColor:'#D8C4B6',
        width:33,
        height:33,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:28,
        marginTop:7,
    },
    reactSecondButton:{
        backgroundColor:'#D8C4B6',
        width:33,
        height:33,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10,
        marginTop:7
    },
    image:{
        width:24,
        height:24
    },
    commentInput:{
        fontSize:10,
        lineHeight:10,
        width:280,
        height:32,
        backgroundColor:'#F5EFE7',
        borderRadius:5,  
        marginTop:4,
        paddingLeft:10  

    },
    commentButtonRow:{
        width:40,
        height:40,
        backgroundColor:'#D8C4B6',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10,
        marginTop:10
    },
    commentButtonSecondRow:{
        width:32,
        height:32,
        backgroundColor:'#F5EFE7',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
    },
    commentSendIcon:{
        width:20,
        height:20
    },
    commentProfilImage:{
        width:30,
        height:30,
        marginLeft:10,
        marginTop:12
    },
    closeButtonIcon:{
        width:30,
        height:30
    },
    closeButton:{
        width:30,
        height:30,
        position:'absolute',
        marginLeft:340,
        zIndex:99
    },
    avatarImage:{
        width:40,
        height:40
    },
    clockImage:{
        width:30,
        height:30,
        marginLeft:10,
        marginTop:5
    },
    reactCountFirstText:{
        color:'white',
        fontSize:12
    },
    reactCountFirstRow:{
        width:30,
        height:18,
        backgroundColor:'#D8C4B6',
        borderRadius:5,
        marginLeft:30,
        marginTop:2,
        alignItems:'center'
    },
    reactCountRow:{
        width:30,
        height:18,
        backgroundColor:'#D8C4B6',
        borderRadius:5,
        marginLeft:13,
        marginTop:2,
        alignItems:'center'
    }
})
export default ShareCard;