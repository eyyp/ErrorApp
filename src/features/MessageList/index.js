import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet,Image} from 'react-native';
import { user,messages } from '../../services/mock';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/actions';
const MessageListPage = (props) => {
  const [messages,setMessages] = React.useState([]);
  const [avatar,setAvatar] = React.useState(0);
  const dispatch = useDispatch();
  const userReducer = useSelector(state=>state.UserCheck);
  const messageReducer = useSelector(state=>state.MessageUser);
  const {userCheck} = userReducer;
  const {userMessage} = messageReducer;
  useEffect(()=>{
    dispatch(actions.MessageUser(userCheck.user_id));
  },[userCheck])

  useEffect(()=>{
    setMessages(userMessage);
  },[userMessage])

  const renderMessageItem = ({ item }) => (
    <TouchableOpacity style={styles.messageItem} onPress={()=>props.navigation.navigate("Message",item)}>
      <View style={styles.avatarRow}>
        <Image 
          style={styles.avatar}
          source={{uri:'http://yonetimpanel.com/admin/uploads/avatar/' + item.user.avatar + '.png'}}
        />
      </View>
      <View>
        <Text style={styles.senderText}>{item.user.nick}</Text>
        <Text style={styles.contentText}>{item.message.message}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessageItem}
        keyExtractor={(item) => item.message.to_id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#F5EFE7'
  },
  messageItem: {
    paddingTop:8,
    paddingLeft:8,
    borderRadius:5,
    width:334,
    height:110,
    backgroundColor: '#D8C4B6',
    marginTop:18,
    flexDirection:'row'
  },
  senderText: {
    fontSize: 12,
    fontWeight: '400',
    marginBottom: 8,
    color:'#3F3F3F',
    backgroundColor:'#F5EFE7',
    borderRadius:5,
    width:105,
    height:26,
    paddingLeft:6,
    paddingTop:5,
    marginLeft:18
  },
  contentText: {
    fontSize: 12,
    fontWeight: '400',
    marginBottom: 8,
    color:'#3F3F3F',
    backgroundColor:'#F5EFE7',
    borderRadius:5,
    width:236,
    height:44,
    paddingLeft:10,
    paddingTop:10,
    marginLeft:18
  },
  avatarRow:{
    width:54,
    height:52,
    backgroundColor:'#F5EFE7',
    borderRadius:5,
    alignItems:'center'
  },
  avatar:{
    width:48,
    height:48
  }
});

export default MessageListPage;