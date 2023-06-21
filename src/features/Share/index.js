import { ScrollView, View,StyleSheet,TouchableOpacity,Text,Image, TextInput} from "react-native";
import Left from '../../assets/icon/left.svg'
import TabBar from "../../component/TabBar";
const Share = () =>{
    return(
        <ScrollView style={styles.Body}>
                <TabBar title="Paylaşım Yap"/>
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
                <TextInput style={styles.multiInput} multiline={true} placeholder="Paylaşımınızı buraya giriniz..."/>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.categoryButton}>
                        <Text style={styles.buttonText}>Kaydet</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.categoryButton,{backgroundColor:'#FF9F0C'}]}>
                        <Text style={styles.buttonText}>Temizle</Text>
                    </TouchableOpacity>
                </View>
        </ScrollView>
    );
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
    }
})
export default Share;