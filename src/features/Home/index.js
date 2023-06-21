import { ScrollView, View,StyleSheet,TouchableOpacity,Text,Image} from "react-native";
import { useEffect } from "react";
import Like from '../../assets/icon/like.svg'
import Chat from '../../assets/icon/chat.svg'
import { search } from "../../services/method/user";
import axios from "axios";
const Home = () =>{

    return(
        <ScrollView style={styles.Body}>
                <ScrollView style={styles.categoryRow} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={styles.categoryButton}>
                        <Text style={styles.buttonText}>Genel Duyuru</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryButton}>
                        <Text style={styles.buttonText}>İş İlanları</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryButton}>
                        <Text style={styles.buttonText}>Tanışma</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryButton}>
                        <Text style={styles.buttonText}>Genel Duyuru</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryButton}>
                        <Text style={styles.buttonText}>Genel Duyuru</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryButton}>
                        <Text style={styles.buttonText}>Genel Duyuru</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryButton}>
                        <Text style={styles.buttonText}>Genel Duyuru</Text>
                    </TouchableOpacity>
                </ScrollView>
                <View style={{justifyContent:'space-between',flexDirection:'row',marginHorizontal:5}}>
                    <TouchableOpacity style={{backgroundColor:'#48C9B0',width:80,height:50,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:5}}>
                        <Text style={{color:'white',fontSize:16,fontWeight:'900'}}>A</Text>
                        <Text style={{color:'white',fontSize:16,fontWeight:'900'}}>%20</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:'#3669C9',width:300,height:50,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:5}}>
                        <Text style={{color:'white',fontSize:16,fontWeight:'900'}}>%80</Text>
                        <Text style={{color:'white',fontSize:16,fontWeight:'900'}}>B</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{color:'black',fontSize:14,marginLeft:3}}> Oy vermek istediğiniz seçeneği tıklayınız.</Text>
                <View style={styles.ShareRow}>
                <View style={styles.card}>
            <View style={styles.profilRow}>
                <Image
                    style={styles.image}
                    source={require('../../assets/images/avatar.png')}
                />
                <Text style={styles.nickText}>Kişi</Text>
            </View>
            <View style={styles.shareRow}>
                <Text style={styles.shareText}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </Text>
            </View>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button}>
                    <Like width={30} height={30} style={styles.gary}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Chat width={30} height={30} style={styles.gary}/>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.card}>
            <View style={styles.profilRow}>
                <Image
                    style={styles.image}
                    source={require('../../assets/images/avatar.png')}
                />
                <Text style={styles.nickText}>Kişi</Text>
            </View>
            <View style={styles.shareRow}>
                <Text style={styles.shareText}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </Text>
            </View>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button}>
                    <Like width={30} height={30} style={styles.gary}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Chat width={30} height={30} style={styles.gary}/>
                </TouchableOpacity>
            </View>
        </View>
                </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Body:{
        flex:1,
        backgroundColor:'#F7F6FB'
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
        height:60,
        backgroundColor:'white',
        borderRadius:10,
        marginTop:10,
        marginleft:10,
        width:400,
        paddingVeritcal:10
    },
    categoryButton:{
        backgroundColor:'#3669C9',
        width:120,
        height:40,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10
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
  
        elevation: 2,
        marginBottom:10
    },
    profilRow:{
        width:200,
        height:50,
        marginLeft:15,
        marginTop:15,
        flexDirection:'row'
    },
    ShareRow:{
        width:390,
        paddingVertical:10,
        paddingHorizontal:20,
        marginTop:15
    },
    image:{
        width:40,
        height:40
    },
    nickText:{
        marginLeft:10,
        marginTop:7,
        color:'black',
        fontSize:15,
        fontWeight:'900'
    },
    shareRow:{
        height:235
    },
    shareText:{
        marginLeft:15,
        fontSize:16,
        paddingRight:10,
        color:'black'
    },
    buttonRow:{
        flexDirection:'row'
    },
    button:{
        marginLeft:15
    },
    gary:{
        color:'gray'
    }
})
export default Home;