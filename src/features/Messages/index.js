import React, { useEffect, useState} from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet} from 'react-native';

const Chat = (props) => {

  const [userid, setUserid] = useState(props.route.params.from_id);
  const [tonid,setToid] = useState(props.route.params.to_id);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  
  const SERVER_URL = 'http://192.168.1.155:3000';

  useEffect(() => {
    const socket = io(SERVER_URL);
    socket.emit('set username', userid);
    // Mesaj alındığında gerçekleşecek olayları tanımla
    socket.on('chat message', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    // Bağlantıyı sonlandır
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(()=>{
    
  },[messages])

  // Mesajı sunucuya gönder
  const sendMessage = () => {
    const socket = io(SERVER_URL);
    const data = {
      from: userid,
      to: tonid, // Alıcı kullanıcı adı
      message: message,
    };
    socket.emit('chat message', data);
    setMessages((prevMessages) => [...prevMessages, data]);
  };

  return (
    <View style={styles.Body}>
      <TextInput
        style={{ marginBottom: 8, height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Mesajınızı girin"
        value={message}
        onChangeText={setMessage}
      />
      <Button title="Gönder" onPress={sendMessage} disabled={!message} />
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 4 }}>
            <Text>{item.from}: {item.message}</Text>
          </View>
        )}
      />
    </View>
  );

  return(
    <View style={styles.Body}>
        <View style={styles.tabRow}>

        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    Body:{
      flex: 1,
      backgroundColor:'#F5EFE7'
    },
    container:{

    },
    tabRow:{
      backgroundColor:'#D8C4B6',
      width:'%100',
      height:84,
    },
    input:{

    },
    messageContainer:{

    },

})
export default Chat;