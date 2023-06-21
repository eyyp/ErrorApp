import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { user,messages } from '../../services/mock';
const MessageListPage = (props) => {
  // Kullanıcının mesajlaşmalarının bir örneği
  /*const messages = [
    { id: 1, sender: 'John', content: 'Merhaba!' },
    { id: 2, sender: 'Alice', content: 'Selam!' },
    { id: 3, sender: 'John', content: 'Nasılsın?' },
    { id: 4, sender: 'Alice', content: 'İyiyim, teşekkürler!' },
    // ... Diğer mesajlar
  ];*/

  // Mesaj öğelerini render etmek için kullanılan bileşen
  const renderMessageItem = ({ item }) => (
    <TouchableOpacity style={styles.messageItem} onPress={()=>props.navigation.navigate("ChatApp",item)}>
      <Text style={styles.senderText}>{item.from_id}</Text>
      <Text style={styles.contentText}>{item.message}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessageItem}
        keyExtractor={(item) => item.message_id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  senderText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  contentText: {
    fontSize: 16,
  },
});

export default MessageListPage;