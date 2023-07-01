import { View, StyleSheet} from "react-native";
import { useEffect } from "react";
import HomeTab from "../../component/HomeTab";
import SearchBar from "../../component/SearchBar";
import ProfilBar from "../../component/ProfilBar";
const Search = () =>{
    return(
        <View style={styles.Body}>
            <HomeTab/>
            <SearchBar/>
            <ProfilBar/>
            <ProfilBar/>
            <ProfilBar/>
            <ProfilBar/>
            <ProfilBar/>
            <ProfilBar/>
            <ProfilBar/>
            <ProfilBar/>
            <ProfilBar/>
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