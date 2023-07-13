import { View, StyleSheet} from "react-native";
import { useEffect, useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import HomeTab from "../../component/HomeTab";
import SearchBar from "../../component/SearchBar";
import ProfilBar from "../../component/ProfilBar";
import { avatars } from "../../config";
import { actions } from "../../store/actions";
const Search = (props) =>{
    const [users,setUsers] = useState([]);
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
       console.log(userCheck) 
    },[userSearch])
    return(
        <View style={styles.Body}>
            <HomeTab/>
            <SearchBar/>
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