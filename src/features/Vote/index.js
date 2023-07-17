import { View,ScrollView,Image,FlatList} from "react-native";
import SearchBar from "../../component/SearchBar";
import CampusButton from "../../component/CampusButton";
import HomeTab from "../../component/HomeTab";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import { actions } from "../../store/actions";
const Vote = (props) =>{
    const [campuss,setCampuss] = useState([]);
    const dispatch = useDispatch();
    const campusReducer = useSelector(state=>state.Campus);
    const {campus} = campusReducer;
    useEffect(()=>{
        dispatch(actions.Campus());
    },[])

    useEffect(()=>{
        setCampuss(campus)
    },[campus])

    const filter = (array,keyword) => {
        array = array.filter(item =>
            item.campus_name?.toLowerCase().includes(keyword)
          )
        return array;
    }

    const set = (campus_id) =>{
        dispatch(actions.SelectCampus(campus_id))
        props.navigation.navigate("Tab")
    }

    return(
        <View style={styles.Body}>
            <SearchBar setSearch={(text)=>setCampuss(filter(campuss,text))} />
            <FlatList 
                data = {campuss}
                renderItem={({item}) => <CampusButton item={item} onPress={()=>set(item.campus_id)} />}
                numColumns={2} 
                key={(item) => item.campus_id} 
                keyExtractor={item => item.campus_id}
                contentContainerStyle={styles.listView}  
            />
        </View>
    )
}

export default Vote;