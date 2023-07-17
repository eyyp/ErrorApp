import { View,Text,TouchableOpacity, TextInput,StyleSheet,Image,ScrollView} from "react-native";
import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store/actions";
import { io } from "socket.io-client";
const Message = (props) =>{
    const [messages,setMessages] = useState([]);
    const [mesaj,setMesaj] = useState('');
    const dispatch = useDispatch();
    const userReducer = useSelector(state=>state.UserCheck);
    const messageToReducer = useSelector(state=>state.MessageTo);
    const {userCheck} = userReducer;
    const {messageTo} = messageToReducer;

    const SERVER_URL = 'http://192.168.1.155:8080';

    useEffect(()=>{
        const socket = io(SERVER_URL);
        socket.emit('set username', props.route.params.message.from_id);
        socket.on('chat message', (data) => {
          setMessages((prevMessages) => [...prevMessages, data]);
        });

        return () => {
          socket.disconnect();
        };
    },[])

    useEffect(()=>{
        dispatch(actions.MessageTo(props.route.params.message.from_id,props.route.params.message.to_id))
    },[userCheck])

    useEffect(()=>{
        setMessages(messageTo)
    },[messageTo])

    const sendMessage = () => {
        const socket = io(SERVER_URL);
        const data = {
          from: props.route.params.message.from_id,
          to: props.route.params.message.to_id, 
          message: mesaj,
        };
        socket.emit('chat message', data);
        setMessages((prevMessages) => [...prevMessages, data]);
      };

    return(
        <View style={styles.body}>
            <View style={styles.tabRow}>
                <Image 
                    style={styles.avatar}
                    source={{uri:'http://yonetimpanel.com/admin/uploads/avatar/20.png'}}
                />
                <Text style={styles.nickText}>Lorem İpsum</Text>
            </View>
            <ScrollView style={styles.messageContainer}>
                {messages.map((item,index)=>
                    item.from_id == props.route.params.message.from_id 
                    ?<Text key={index} style={styles.messageRightCard}>{item.message}</Text> :<Text key={index} style={styles.messageLeftCard}>{item.message}</Text>
                )}   
            </ScrollView>
            <View style={styles.sendRow}>
                <View style={styles.inputRow}>
                    <TextInput style={styles.input} placeholder="Mesajınızı girin" value={mesaj} onChangeText={setMesaj}/>
                </View>
                <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                    <View style={styles.iconRow}>
                        <Image 
                            style={styles.icon}
                            source={require('../../assets/icon/send.png')}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:'#F5EFE7'
    },
    tabRow:{
        width:390,
        height:80,
        backgroundColor:'#D8C4B6',
        padding:17,
        flexDirection:'row'
    },
    nickText:{
        width:100,
        height:25,
        backgroundColor:'#F5EFE7',
        color:'#3F3F3F',
        borderRadius:5,
        marginLeft:10,
        marginTop:15,
        textAlign:'center',
        paddingTop:4,
        fontSize:12
    },
    messageContainer:{
        padding:20,
        height:580,
    },
    messageLeftCard:{
        maxWidth:150,
        minWidth:50,
        minHeight:25,
        paddingTop:2,
        textAlign:'left',
        alignSelf:'flex-start',
        padding:8,
        borderRadius:5,
        backgroundColor:'#4F709C',
        color:'white',
        marginBottom:10
    },
    messageRightCard:{
        maxWidth:250,
        minWidth:50,
        minHeight:25,
        paddingTop:2,
        textAlign:'left',
        padding:8,
        backgroundColor:'#007E2E',
        color:'white',
        marginBottom:10,
        paddingRight:8,
        alignSelf:'flex-end',
        borderRadius:5
    },
    sendRow:{
        flexDirection:'row',
        paddingLeft:5
    },
    inputRow:{
        width:320,
        height:50,
        backgroundColor:'#D8C4B6',
        borderRadius:5,
    },
    input:{
        width:310,
        height:40,
        backgroundColor:'#F5EFE7',
        borderRadius:5,
        fontSize:12,
        margin:5
    },
    sendButton:{
        width:50,
        height:50,
        backgroundColor:'#D8C4B6',
        borderRadius:5,
        marginLeft:10,
        padding:3
    },
    iconRow:{
        width:44,
        height:44,
        backgroundColor:'#F5EFE7',
        borderRadius:5,
        padding:7
    },
    icon:{
        width:30,
        height:30
    },
    avatar:{
        width:50,
        height:50
    }
})

export default Message;