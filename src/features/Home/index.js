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
    const [shareCategorys,setShareCategorys] = useState([]);
    const [homeVisible,setHomeVisible] = useState(false);
    const [visibleElegant, setVisibleElegant] = useState(true);
    const [selectCategory,setSelectCategory] = useState('');

    const dispatch = useDispatch();
   
    const checkElegantReducer = useSelector(state=>state.ChecksElegant);
    const {checksElegant, checkElegantStatus} = checkElegantReducer;

    const reactUserShareReducer = useSelector(state=>state.ReactShareUser);
    const {reactShareUser, reactShareUserStatus} = reactUserShareReducer;

    const categoryShareReducer = useSelector(state =>state.ShareCategory);
    const {shareCategory} = categoryShareReducer;

    const elegantCreateReducer = useSelector(state =>state.ChecksCreate);
    const {checksElegantCreate} = elegantCreateReducer;   

    const shareCampusReducer = useSelector(state =>state.ShareCampus);
    const {shareCampus} = shareCampusReducer;

    const userReducer = useSelector(state=>state.UserCheck);
    const {userCheck, userStatus} = userReducer;

    const elegantReducer = useSelector(state=>state.Elegant);
    const {elegant,elegantStatus} = elegantReducer;

    const categoryReducer = useSelector(state=>state.Category);
    const {category, categoryStatus} = categoryReducer;

    const campusReducer = useSelector(state =>state.Campus);
    const {selectCampus} = campusReducer;


    const calculate = () =>{
        dispatch(actions.CheksElegant(elegant.elegant_id))
    }

    useEffect(()=>{
        setShareCategorys(shareCampus)
    },[shareCampus])

    useEffect(()=>{
        setShareCategorys(shareCategory)
    },[shareCategory])

    useEffect(()=>{
        dispatch(actions.ReactShareUser(userCheck.user_id))
        setHomeVisible(true);
    },[userCheck])

    useEffect(()=>{
        calculate();
    },[checksElegantCreate])

    const CategorySelect = (category_id) =>{
        setSelectCategory(category_id);
        dispatch(actions.ShareCategory(selectCampus,category_id));
    }

    return(
        <View style={styles.Body}>
            <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
                {homeVisible && <HomeTab navigation={props.navigation} user={userCheck} onPress={()=>setVisible(true)}/>}
                <View style={styles.elegateRow}>
                    <Text style={styles.elegateTitle}>{elegant?.title}</Text>
                    <View style={styles.elegaButtonRow}>
                        {visibleElegant ?
                            <View style={styles.row}>
                                <TouchableOpacity style={styles.elegateButton} onPress={()=>{setVisibleElegant(false);dispatch(actions.CheksElegantCreate(userCheck.user_id,elegant?.elegant_id,"A"));}}>
                                    <Text style={styles.elegateButtonText}>{elegant?.nameA}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.elegateButton} onPress={()=>{setVisibleElegant(false);dispatch(actions.CheksElegantCreate(userCheck.user_id,elegant?.elegant_id,"B"));}}>
                                    <Text style={styles.elegateButtonText}>{elegant?.nameB}</Text>
                                </TouchableOpacity>
                            </View> 
                            :
                            <View style={styles.row}>
                                <View style={styles.elegateConFirst}>
                                    <Text style={styles.elegateText}>{checksElegant?.A}</Text>
                                </View>
                                <View style={styles.elegateConSecond}>
                                    <Text style={styles.elegateText}>{checksElegant?.B}</Text>
                                </View>
                            </View>
                        }
                    </View>
                    {!visibleElegant && 
                        <View style={styles.elegantInfoRow}>
                            <Text style={styles.elegantText}>{elegant?.nameA}</Text>  
                            <Text style={styles.elegantTextSecond}>{elegant?.nameB}</Text>
                        </View>
                    }     
                </View>
                {shareCategorys.map((item,index) =><ShareCard item={item} reactUser={reactShareUser} key={index} index={index} navigation={props.navigation} />)}
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
                        <TouchableOpacity style={[styles.allButton,{backgroundColor:selectCategory == 'all' ? '#4F709C' :'#F5EFE7'}]} onPress={()=>{setSelectCategory('all');dispatch(actions.ShareCampus(selectCampus))}}>
                                <Image 
                                    style={styles.buttonImage}
                                    source={{uri:'http://yonetimpanel.com/admin/uploads/package.png'}}
                                />
                                <Text style={[styles.modalButtonTitle,{color:selectCategory == 'all' ? 'white' :'black'}]}>Tümü</Text>
                        </TouchableOpacity>
                        <FlatList 
                            data={category}
                            numColumns={2} 
                            renderItem={({item}) =>
                            <TouchableOpacity style={[styles.modalButton,{backgroundColor:selectCategory == item.category_id ? '#4F709C' :'#F5EFE7'}]} onPress={()=>CategorySelect(item.category_id)}>
                                <Image 
                                    style={styles.buttonImage}
                                    source={{uri:'http://yonetimpanel.com/admin/uploads/' + item.icon}}
                                />
                                <Text style={[styles.modalButtonTitle,{color:selectCategory == item.category_id ? 'white' :'black'}]}>{item.category_name}</Text>
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