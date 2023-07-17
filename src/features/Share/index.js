import { ScrollView, View,StyleSheet,TouchableOpacity,Text,Image, TextInput,Modal,FlatList} from "react-native";
import { useState, useEffect} from "react";
import {actions} from '../../store/actions/index'
import { useDispatch, useSelector } from 'react-redux';
const Share = (props) =>{
    const [visible,setVisible] = useState(false);
    const [categorys,setCategorys] = useState([]);
    const [selectCategory,setSelectCategeory] = useState('');
    const [share,setShare] = useState('');
    const [buttonVisible,setButtonVisible] = useState(false);
    const dispatch = useDispatch();
    const categoryReducer = useSelector(state=>state.Category);
    const userReducer = useSelector(state=>state.UserCheck)
    const createShareReducer = useSelector(state=>state.ShareCreate)
    const campusReducer = useSelector(state=>state.Campus);
    const {category, categoryStatus} = categoryReducer;
    const {userCheck} = userReducer;
    const {shareCreate} = createShareReducer;
    const {selectCampus} = campusReducer;
    useEffect(()=>{
        setCategorys(category)
    },[category])

    useEffect(()=>{
        setButtonVisible(true)
        dispatch(actions.Category())
    },[userCheck])

    const sendShare = () => {
        dispatch(actions.ShareCreate(userCheck.user_id,share,selectCategory,selectCampus))
    }

    useEffect(()=>{
        if(shareCreate?.length != 'undefined'){
            props.navigation.navigate("Profil")
        }
    },[shareCreate])

    return(
        <ScrollView style={styles.Body}>
                <View>
                    <TouchableOpacity style={styles.categoryButton} onPress={()=>setVisible(true)}>
                        <Text style={styles.buttonText}>Konular</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.categoryRow}>
                    <TextInput style={styles.multiInput} multiline={true} placeholder="Paylaşımınızı buraya giriniz..." onChangeText={text=>setShare(text)} value={share}/>
                </View>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={[styles.categoryButton,{opacity:(buttonVisible && share.length > 0 && selectCategory.length > 0) ? 1:0.5}]} disabled={!(buttonVisible && share.length > 0 && selectCategory.length > 0)} onPress={()=>sendShare()}>
                        <Text style={styles.buttonText}>Kaydet</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryButton} onPress={()=>{setSelectCategeory('');setShare('')}}>
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
                            <TouchableOpacity style={styles.allButton} onPress={()=>dispatch(actions.ShareAll())}>
                                <Image 
                                    style={styles.buttonImage}
                                    source={{uri:'http://yonetimpanel.com/admin/uploads/package.png'}}
                                />
                                <Text style={styles.modalButtonTitle}>Tümü</Text>
                            </TouchableOpacity>
                            <FlatList 
                                data={categorys}
                                numColumns={2} 
                                renderItem={({item}) =>
                                <TouchableOpacity style={[styles.modalButton,{backgroundColor:selectCategory == item.category_id ? '#3669C9' :'#F5EFE7'}]} onPress={()=>setSelectCategeory(item.category_id)}>
                                    <Image 
                                        style={styles.buttonImage}
                                        source={{uri:'http://yonetimpanel.com/admin/uploads/' + item.icon}}
                                    />
                                    <Text style={styles.modalButtonTitle}>{item.category_name}</Text>
                                </TouchableOpacity>}
                                key={(item) => item.category_id} 
                                keyExtractor={item => item.category_id} 
                                contentContainerStyle={styles.listView} 
                            />
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
    allButton:{
        marginLeft:120,
        marginTop:20,
        width:150,
        height:40,
        backgroundColor:'#F5EFE7',
        borderRadius:5,
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection:'row',
        paddingLeft:15,
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
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginBottom:6
    },
    buttonImage:{
        width:30,
        height:30,
        marginRight:10
    },
    modalButtonTitle:{
        color:'#D8C4B6'
    },
    listView:{
        paddingBottom:10,
        paddingTop:20,
        paddingLeft:40
    }
})
export default Share;