import { View, StyleSheet} from "react-native";
import { useEffect, useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import HomeTab from "../../component/HomeTab";
import SearchBar from "../../component/SearchBar";
import ProfilBar from "../../component/ProfilBar";
import { actions } from "../../store/actions";
import { filter } from "../../lib/filter";
const Search = (props) =>{
    const [users,setUsers] = useState([]);
    const [con,setCon] = useState('');
    const dispatch = useDispatch();
    const searchReducer = useSelector(state => state.UserSearch);
    const userReducer = useSelector(state => state.UserCheck)
    const {userCheck} = userReducer; 
    const {userSearch, searchStatus} = searchReducer;
    useEffect(()=>{
        dispatch(actions.UserSearch())
    },[])

    useEffect(()=>{
       setUsers(userSearch)
    },[userSearch])

    return(
        <View style={styles.Body}>
            <HomeTab navigation={props.navigation} user={userCheck} onPress={()=>props.navigation.navigate("Home")}/>
            <SearchBar setSearch={(text)=>setUsers(filter(users,text))} text="Kullanıcı ara..."/>
            {users.map((item,index)=><ProfilBar item={item} key={index} navigation={props.navigation}/>)}
        </View>
    );
}
const styles = StyleSheet.create({
    Body:{
        flex:1,
        backgroundColor:'#F5EFE7'
    }
})
export default Search;