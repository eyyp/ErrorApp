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
    const [categorys,setCategorys] = useState([]);
    const [shareCategorys,setShareCategorys] = useState([]);
    const [reactUser,setReactUser] = useState([]);
    const [elegants,setElegants] = useState({});
    const [homeVisible,setHomeVisible] = useState(false);
    const [visibleElegant, setVisibleElegant] = useState(true);
    const [campusid,setCampusId] = useState('');
    const [A,setA] = useState(0);
    const [B,setB] = useState(0);
    const dispatch = useDispatch();
    const categoryReducer = useSelector(state=>state.Category);
    const elegantReducer = useSelector(state=>state.Elegant);
    const userReducer = useSelector(state=>state.UserCheck);
    const checkElegantReducer = useSelector(state=>state.ChecksElegant);
    const reactUserShareReducer = useSelector(state=>state.ReactShareUser);
    const campusReducer = useSelector(state =>state.Campus);
    const categoryShareReducer = useSelector(state =>state.ShareCategory);
    const shareCampusReducer = useSelector(state =>state.ShareCampus);   
    const {checksElegant, checkElegantStatus} = checkElegantReducer;
    const {elegant,elegantStatus} = elegantReducer;
    const {category, categoryStatus} = categoryReducer;
    const {userCheck, userStatus} = userReducer;
    const {reactShareUser, reactShareUserStatus} = reactUserShareReducer;
    const {selectCampus} = campusReducer;
    const {shareCategory} = categoryShareReducer
    const {shareCampus} = shareCampusReducer;

    const calculate = () =>{
        dispatch(actions.CheksElegant(elegants.elegant_id))
    }

    useEffect(()=>{
        dispatch(actions.Elegant(selectCampus))
        dispatch(actions.ShareCampus(selectCampus))
        setReactUser(reactShareUser)
        setCampusId(selectCampus)
    },[selectCampus,reactShareUser])

    useEffect(()=>{
        dispatch(actions.Category())
    },[])

    useEffect(()=>{
        setShareCategorys(shareCampus)
    },[shareCampus])

    useEffect(()=>{
        setCategorys(shareCategory)
    },[shareCategory])

    useEffect(()=>{
        dispatch(actions.ReactShareUser(userCheck.user_id))
        setHomeVisible(true);
    },[userCheck])

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
        if(checksElegant.A != 'undifined'){
            setA(checksElegant.A);
            setB(checksElegant.B);   
        }
    },[checksElegant])
    return(
        <View style={styles.Body}>
            <ScrollView>
                {homeVisible && <HomeTab navigation={props.navigation} user={userCheck} onPress={()=>setVisible(true)}/>}
                <View style={styles.elegateRow}>
                    <Text style={styles.elegateTitle}>{elegants.title}</Text>
                    <View style={styles.elegaButtonRow}>
                        {visibleElegant ?
                            <View style={styles.row}>
                                <TouchableOpacity style={styles.elegateButton} onPress={()=>{setVisibleElegant(false);dispatch(actions.CheksElegantCreate(userCheck.user_id,elegants.elegant_id,"A"));calculate()}}>
                                    <Text style={styles.elegateButtonText}>{elegants.nameA}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.elegateButton} onPress={()=>{setVisibleElegant(false);dispatch(actions.CheksElegantCreate(userCheck.user_id,elegants.elegant_id,"B"));calculate()}}>
                                    <Text style={styles.elegateButtonText}>{elegants.nameB}</Text>
                                </TouchableOpacity>
                            </View> 
                            :
                                <View style={styles.row}>
                                    <View style={styles.elegateConFirst}>
                                        <Text style={styles.elegateText}>{A}</Text>
                                    </View>
                                    <View style={styles.elegateConSecond}>
                                        <Text style={styles.elegateText}>{B}</Text>
                                    </View>
                                </View>
                        }
                    </View>
                    {!visibleElegant && 
                        <View style={styles.elegantInfoRow}>
                            <Text style={styles.elegantText}>{elegants.nameA}</Text>  
                            <Text style={styles.elegantTextSecond}>{elegants.nameB}</Text>
                        </View>
                    }     
                </View>
                {shareCategorys.map((item,index) =><ShareCard item={item} reactUser={reactUser} key={index} index={index} navigation={props.navigation} />)}
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
                        <TouchableOpacity style={styles.modalButton} onPress={()=>dispatch(actions.ShareCategory(campusid,item.category_id))}>
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
    </View>
    )
}

export default Home;