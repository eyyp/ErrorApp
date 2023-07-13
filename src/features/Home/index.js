import { ScrollView, View,StyleSheet,TouchableOpacity,Text,Image,FlatList,Modal} from "react-native";
import { useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {styles} from './style'
import HomeTab from "../../component/HomeTab";
import ShareCard from "../../component/ShareCard";
import {actions} from '../../store/actions/index'
import { CategoryButton } from "../../component/CategoryButton/CategoryButton";
const Home = (props) =>{
    const [visible,setVisible] = useState(false);
    const [All,setAll] = useState([]);
    const [categorys,setCategorys] = useState([]);
    const [elegants,setElegants] = useState({});
    const [visibleElegant, setVisibleElegant] = useState(false);
    const [A,setA] = useState(0);
    const [B,setB] = useState(0);
    const dispatch = useDispatch();
    const allShare = useSelector(state=>state.All);
    const categoryReducer = useSelector(state=>state.Category);
    const elegantReducer = useSelector(state=>state.Elegant);
    const userReducer = useSelector(state=>state.UserCheck);
    const checkElegantReducer = useSelector(state=>state.ChecksElegant);
    const {checksElegant, checkElegantStatus} = checkElegantReducer;
    const {elegant,elegantStatus} = elegantReducer;
    const {all,status} = allShare;
    const {category, categoryStatus} = categoryReducer;
    const {userCheck, userStatus} = userReducer;
    const calculate = () =>{
        dispatch(actions.CheksElegant(elegants.elegant_id))
    }

    useEffect(()=>{
        dispatch(actions.ShareAll())
        dispatch(actions.Category())
        //props.campus_id gönderilmesi gerekiyor
        dispatch(actions.Elegant("1e9dd799-c1d4-4fce-8bbd-0d029b476dd2"))
    },[])
    useEffect(()=>{
        //setCategorys(all)
        setAll(all)
    },[all])

    useEffect(()=>{
        setCategorys(category)
    },[category])

    useEffect(()=>{
        setElegants(elegant)
    },[elegant])

    useEffect(()=>{
        calculate();
    },[elegants])

    useEffect(()=>{
        console.log(checksElegant.A)
        setA(checksElegant.A);
        setB(checksElegant.B);
    },[checksElegant])
    return(
        <View style={styles.Body}>
            <ScrollView>
                <HomeTab navigation={props.navigation} onPress={()=>setVisible(true)}/>
                <View style={styles.elegateRow}>
                    <Text style={styles.elegateTitle}>{elegants.title}</Text>
                    <View style={styles.elegaButtonRow}>
                        {visibleElegant ?
                            <View style={{flexDirection:'row'}}>
                                <TouchableOpacity style={styles.elegateButton} onPress={()=>{dispatch(actions.CheksElegantCreate(userCheck.user_id,elegants.elegant_id,"A"));calculate()}}>
                                    <Text style={styles.elegateButtonText}>{elegants.nameA}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.elegateButton} onPress={()=>{dispatch(actions.CheksElegantCreate(userCheck.user_id,elegants.elegant_id,"B"));calculate()}}>
                                    <Text style={styles.elegateButtonText}>{elegants.nameB}</Text>
                                </TouchableOpacity>
                            </View> 
                            :
                                <View style={{flexDirection:'row'}}>
                                    <View style={styles.elegateConFirst}>
                                        <Text style={styles.elegateButtonText}>{A}</Text>
                                    </View>
                                    <View style={styles.elegateConSecond}>
                                        <Text style={styles.elegateButtonText}>{B}</Text>
                                    </View>
                                </View>
                        }
                    </View>
                    <View style={styles.elegantInfoRow}>
                        <Text style={styles.elegantText}>{elegants.nameA}</Text>  
                        <Text style={styles.elegantTextSecond}>{elegants.nameB}</Text>
                    </View>  
                </View>
                {All.map((item,index) =><ShareCard item={item} key={index} index={index} navigation={props.navigation}/>)}
            </ScrollView>
        <Modal transparent={true} visible={visible} animationType="slide">
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
                        <TouchableOpacity style={styles.modalButton} onPress={()=>dispatch(actions.ShareCategory(item.category_id))}>
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
                    {/*<ScrollView style={styles.modalScroll}>
                        { categorys.map((item,index) => 
                            <View style={[styles.row,{marginTop:10}]}>
                                <TouchableOpacity style={styles.modalButton} onPress={()=>dispatch(actions.ShareAll())}>
                                    <Image 
                                        style={styles.buttonImage}
                                        source={require('../../assets/icon/all.png')}
                                    />
                                    <Text style={styles.modalButtonTitle}>Tümü</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.modalButton}>
                                    <Image 
                                        style={styles.buttonImage}
                                        source={{uri: 'http://yonetimpanel.com/admin/uploads/package.png'}}
                                    />
                                    <Text style={styles.modalButtonTitle}>Gezi</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        <View style={[styles.row,{marginTop:10}]}>
                            <TouchableOpacity style={styles.modalButton}>
                                <Image 
                                    style={styles.buttonImage}
                                    source={{uri: 'http://yonetimpanel.com/admin/uploads/package.png'}}
                                />
                                <Text style={styles.modalButtonTitle}>Okul</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton}>
                                <Image 
                                    style={styles.buttonImage}
                                    source={require('../../assets/icon/marketing.png')}
                                />
                                <Text style={styles.modalButtonTitle}>Genel</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.row,{marginTop:10}]}>
                            <TouchableOpacity style={styles.modalButton}>
                                <Image 
                                    style={styles.buttonImage}
                                    source={require('../../assets/icon/suitcase.png')}
                                />
                                <Text style={styles.modalButtonTitle}>İş</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton}>
                                <Image 
                                    style={styles.buttonImage}
                                    source={require('../../assets/icon/hand.png')}
                                />
                                <Text style={styles.modalButtonTitle}>İkinciel</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.row,{marginTop:10}]}>
                            <TouchableOpacity style={styles.modalButton}>
                                <Image 
                                    style={styles.buttonImage}
                                    source={require('../../assets/icon/homework.png')}
                                />
                                <Text style={styles.modalButtonTitle}>Ödev-Sınav</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton}>
                                <Image 
                                    style={styles.buttonImage}
                                    source={require('../../assets/icon/friends.png')}
                                />
                                <Text style={styles.modalButtonTitle}>Ev Arkadaşı</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.row,{marginTop:10}]}>
                            <TouchableOpacity style={styles.modalButton}>
                                <Image 
                                    style={styles.buttonImage}
                                    source={require('../../assets/icon/hotel.png')}
                                />
                                <Text style={styles.modalButtonTitle}>Yut İşlemleri</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton}>
                                <Image 
                                    style={styles.buttonImage}
                                    source={require('../../assets/icon/promotion.png')}
                                />
                                <Text style={styles.modalButtonTitle}>Ev İlanları</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.row,{marginTop:10}]}>
                            <TouchableOpacity style={styles.modalButton}>
                                <Image 
                                    style={styles.buttonImage}
                                    source={require('../../assets/icon/package.png')}
                                />
                                <Text style={styles.modalButtonTitle}>Kayıp</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton}>
                                <Image 
                                    style={styles.buttonImage}
                                    source={require('../../assets/icon/destination.png')}
                                />
                                <Text style={styles.modalButtonTitle}>Yolculuk</Text>
                            </TouchableOpacity>
                        </View>
                        </ScrollView>*/}
                </View>
            </View>
        </Modal>
    </View>
    )
}

export default Home;