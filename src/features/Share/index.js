import { ScrollView, View,StyleSheet,TouchableOpacity,Text,Image, TextInput,Modal} from "react-native";
import { useState } from "react";
import TabBar from "../../component/TabBar";
const Share = () =>{
    const [visible,setVisible] = useState(false)
    return(
        <ScrollView style={styles.Body}>
                <View>
                    <TouchableOpacity style={styles.categoryButton} onPress={()=>setVisible(true)}>
                        <Text style={styles.buttonText}>Konular</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.categoryRow}>
                    <TextInput style={styles.multiInput} multiline={true} placeholder="Paylaşımınızı buraya giriniz..."/>
                </View>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.categoryButton}>
                        <Text style={styles.buttonText}>Kaydet</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryButton}>
                        <Text style={styles.buttonText}>Temizle</Text>
                    </TouchableOpacity>
                </View>
                <Modal transparent={true} visible={visible} animationType="slide" >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalBody}>
                            <View style={styles.row}>
                                <Text style={styles.modalTitle}>Konular</Text>
                                <TouchableOpacity onPress={()=>setVisible(false)}>
                                    <Image  
                                        style={styles.closeImage}
                                        source={require('../../assets/images/close.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <ScrollView style={styles.modalScroll}>
                                <View style={[styles.row,{marginTop:10}]}>
                                    <TouchableOpacity style={styles.modalButton}>
                                        <Image 
                                            style={styles.buttonImage}
                                            source={require('../../assets/images/cap2.png')}
                                        />
                                        <Text style={styles.modalButtonTitle}>Okul Duyuruları</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.modalButton}>
                                        <Image 
                                            style={styles.buttonImage}
                                            source={require('../../assets/images/cap2.png')}
                                        />
                                        <Text style={styles.modalButtonTitle}>Okul Duyuruları</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.row,{marginTop:10}]}>
                                    <TouchableOpacity style={styles.modalButton}>
                                        <Image 
                                            style={styles.buttonImage}
                                            source={require('../../assets/images/cap2.png')}
                                        />
                                        <Text style={styles.modalButtonTitle}>Okul Duyuruları</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.modalButton}>
                                        <Image 
                                            style={styles.buttonImage}
                                            source={require('../../assets/images/cap2.png')}
                                        />
                                        <Text style={styles.modalButtonTitle}>Okul Duyuruları</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </Modal>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    Body:{
        flex:1,
        backgroundColor:'#F5EFE7'
    },
    input:{
        width:320,
        height:55,
        backgroundColor:'white',
        borderRadius:10,
        marginTop:15,
        paddingLeft:20,
    },
    button:{
        backgroundColor:'#3669C9',
        borderRadius:10,
        width:300,
        height:60,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
        marginLeft:10
    },
    buttonText:{
        color:'white',
        fontSize:19
    },
    inputRow:{
        marginTop:80,
        paddingLeft:32
    },
    categoryRow:{
        width:360,
        minHeight:230,
        alignSelf:'center',
        backgroundColor:'#D8C4B6',
        borderRadius:5,
        paddingLeft:1,
        paddingBottom:12,
        marginTop:10
    },
    categoryButton:{
        backgroundColor:'#4F709C',
        width:120,
        height:40,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10,
        marginTop:10
    },
    buttonText:{
        color:'white',
        fontSize:15        
    },
    card:{
        backgroundColor:'white',
        width:350,
        height:350,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
  
        elevation: 2
    },
    multiInput:{
        width:350,
        backgroundColor:'white',
        alignSelf:'center',
        textAlignVertical: "top",
        padding:15,
        minHeight:250,
        borderRadius:10,
        marginTop:15
    },
    buttonRow:{
        flexDirection:'row',
        marginTop:20,
        alignSelf:'center'
    },
    modal:{
        width:'100%',
        height:'20%'
    },
    modalBody:{
      backgroundColor:'#D8C4B6',
      width:'100%',
      height:300,
      alignSelf:'center',
      marginTop:'auto',
      borderTopLeftRadius:20,
      borderTopRightRadius:20
    },
    modalContainer:{
        flex: 1, 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    tabRow:{
      flexDirection:'row',
      width:390,
      height:60,
      justifyContent:'space-between',
      padding:15,
      alignSelf:'center',
      backgroundColor:'red',
    },
    row:{
        flexDirection:'row'
    },
    modalTitle:{
        color:'#F5EFE7',
        marginLeft:160,
        fontSize:18,
        marginTop:10,
        fontWeight:'900'
    },
    closeImage:{
        width:15,
        height:15,
        marginTop:18,
        marginLeft:130
    },
    modalScroll:{
        padding:30
    },
    modalButton:{
        marginRight:10,
        width:150,
        height:40,
        backgroundColor:'#F5EFE7',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    buttonImage:{
        width:30,
        height:30,
        marginRight:10
    },
    modalButtonTitle:{
        color:'#D8C4B6'
    }
})
export default Share;