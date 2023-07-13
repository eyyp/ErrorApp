import { useState, useEffect} from 'react';
import { View,Image, Text,TouchableOpacity,StyleSheet,ScrollView, TextInput} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/actions';
import { avatars } from '../../config';
const ShareCard = (props) =>{
    const [commentVisible, setCommentVisible] = useState(false);
    const [reactType,setReactType] = useState(0);
    const dispatch = useDispatch();
    const userReducer = useSelector(state => state.UserShareData)
    const reactShareReducer = useSelector(state => state.ReactShare)
    const userCheckReducer = useSelector(state=> state.UserCheck);
    const reactShareUserReducer = useSelector(state=> state.ReactShareUser)
    const {reactShareUser}  = reactShareUserReducer;
    const {shareData, shareDataStatus} = userReducer;
    const {userCheck} = userCheckReducer;
    const {reactShare, reactShareStatus} = reactShareReducer;
    useEffect(()=>{
        dispatch(actions.UserShareData(props.item.user_id))
        dispatch(actions.ReactShare(props.item.share_id))
    },[])

    useEffect(()=>{
        dispatch(actions.ReactShareUser(props.item.share_id,userCheck.user_id))
    },[userCheck])

    useEffect(()=>{
        console.log("reactShareUser:",reactShareUser)
    },[reactShareUser])
    return(
        <View>
            <View style={styles.card}>
                <TouchableOpacity style={styles.profilRow} onPress={()=>props.navigation.navigate('ProfilDif',{props:props.item.user_id})}>
                { shareDataStatus === 'response' ? 
                        <Image
                            style={styles.avatarImage}
                            source={avatars[shareData[0].avatar].url}
                        />
                    : <Image
                        style={styles.clockImage}
                        source={require('../../assets/icon/clock.png')}
                        />
                }
                    <Text style={styles.nickText}>{props.share_id}{shareData[0] !== undefined && shareData[0].nick}</Text>
                </TouchableOpacity>
                <View style={styles.shareRow}>
                    <Text style={styles.shareText}>{props.item.share_text}</Text>
                </View>
            </View>
            { !commentVisible &&
            <View>
                <View style={styles.buttonRow} >
                    <TouchableOpacity style={styles.reactFirstButton} onPress={()=>dispatch(actions.React(userCheck.user_id,props.item.share_id,1))}>
                        <Image
                            style={styles.image}
                            source={require('../../assets/icon/like.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.reactSecondButton} onPress={()=>setCommentVisible(true)}>
                        <Image
                            style={styles.image}
                            source={require('../../assets/icon/comment.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.reactSecondButton} onPress={()=>dispatch(actions.React(userCheck.user_id,props.item.share_id,2))}>
                        <Image
                            style={styles.image}
                            source={require('../../assets/icon/happy.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.reactSecondButton} onPress={()=>dispatch(actions.React(userCheck.user_id,props.item.share_id,3))}>
                        <Image
                            style={styles.image}
                            source={require('../../assets/icon/shocked.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.reactSecondButton} onPress={()=>dispatch(actions.React(userCheck.user_id,props.item.share_id,4))}>
                        <Image
                            style={styles.image}
                            source={require('../../assets/icon/sad.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.reactSecondButton} onPress={()=>dispatch(actions.React(userCheck.user_id,props.item.share_id,5))}>
                        <Image
                            style={styles.image}
                            source={require('../../assets/icon/angry.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.reactSecondButton} onPress={()=>dispatch(actions.React(userCheck.user_id,props.item.share_id,5))}>
                        <Image
                            style={styles.image}
                            source={require('../../assets/icon/love.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.reactSecondButton} onPress={()=>dispatch(actions.React(userCheck.user_id,props.item.share_id,6))}>
                        <Image
                            style={styles.image}
                            source={require('../../assets/icon/thinking.png')}
                        />
                    </TouchableOpacity>
                </View>
                {/*<View style={styles.buttonRow}>
                    <View style={styles.reactCountFirstRow}>
                        <Text style={styles.reactCountFirstText}>{reactShare[0] !== 'undefined' ? reactShare[props.index][0]?.count:0}</Text>
                    </View>
                    <View style={styles.reactCountRow}>
                        <Text style={styles.reactCountFirstText}>{reactShare[props.index][1] !== 'undefined' ? reactShare[props.index][1].count:0}</Text>
                    </View>
                    <View style={styles.reactCountRow}>
                        <Text style={styles.reactCountFirstText}>{reactShare[props.index][2] !== 'undefined' ? reactShare[props.index][2].count:0}</Text>
                    </View>
                    <View style={styles.reactCountRow}>
                        <Text style={styles.reactCountFirstText}>{reactShare[props.index][3] !== 'undefined' ? reactShare[props.index][3].count:0}</Text>
                    </View>
                    <View style={styles.reactCountRow}>
                        <Text style={styles.reactCountFirstText}>{reactShare[props.index][4] !== 'undefined' ? reactShare[props.index][4].count:0}</Text>
                    </View>
                    <View style={styles.reactCountRow}>
                        <Text style={styles.reactCountFirstText}>{reactShare[props.index][5] !== 'undefined' ? reactShare[props.index][5].count:0}</Text>
                    </View>
                    <View style={styles.reactCountRow}>
                        <Text style={styles.reactCountFirstText}>{reactShare[props.index][6] !== 'undefined' ? reactShare[props.index][6].count:0}</Text>
                    </View>
                    <View style={styles.reactCountRow}>
                        <Text style={styles.reactCountFirstText}>{reactShare[props.index][7] !== 'undefined' ? reactShare[props.index][7].count:0}</Text>
                    </View>
            </View>*/}
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
                        <View style={styles.commentProfil}>
                                <Image
                                    style={styles.commentProfilImage}
                                    source={require('../../assets/images/avatar/1.png')}
                                />
                                <View>
                                    <Text style={styles.commentNick}>Lorem İpsum</Text>
                                    <Text style={styles.commentText}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem sdfgsdfgsdfg asdfg asdf asdfg aasdfasdf asdf asdf asdf asdf as
                                    </Text>
                                </View>
                        </View>
                        <View style={styles.commentProfil}>
                                <Image
                                    style={{width:30,height:30,marginLeft:10,marginTop:12}}
                                    source={require('../../assets/images/avatar/1.png')}
                                />
                                <View>
                                    <Text style={styles.commentNick}>Lorem İpsum</Text>
                                    <Text style={styles.commentText}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem sdfgsdfgsdfg asdfg asdf asdfg aasdfasdf asdf asdf asdf asdf as
                                    </Text>
                                </View>
                        </View>
                    </ScrollView>
                    <View style={styles.Row}>
                        <View style={styles.commentInputRow}>
                            <TextInput style={styles.commentInput} placeholder="Yorum yaz..."/>
                        </View>
                        <View style={styles.commentButtonRow}>
                                <View style={styles.commentButtonSecondRow}>
                                    <Image 
                                        style={styles.commentSendIcon}
                                        source ={require('../../assets/icon/send.png')}
                                    />
                                </View>
                        </View>
                    </View>
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
        height:180,
        borderRadius:10,
        ...shadow,
        marginTop:10,
        marginLeft:28
    },
    commentRow:{
        backgroundColor:'#D8C4B6',
        width:334,
        minHeight:120,
        maxHeight:240,
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
        borderRadius:10,
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
        width:132,
        height:26,
        borderRadius:5,
        paddingLeft:8,
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
        height:100,
        marginTop:14,
        flexDirection:'row',
        backgroundColor:'#F5EFE7',
        borderRadius:5,
        marginLeft:14,
    },
    commentProfil:{
        width:300,
        height:100,
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
        color:'#3F3F3F'
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