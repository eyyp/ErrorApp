import { View } from "react-native";
import TabBar from "../../component/TabBar";
import SearchBar from "../../component/SearchBar";
import ProfilBar from "../../component/ProfilBar";
const Search = () =>{
    return(
        <View>
            <TabBar title="Arama"/>
            <SearchBar />
            <ProfilBar />
            <ProfilBar />
            <ProfilBar />
            <ProfilBar />
            <ProfilBar />
            <ProfilBar />
            <ProfilBar />
        </View>
    );
}

export default Search;