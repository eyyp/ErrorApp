import { View,ScrollView,Image,FlatList} from "react-native";
import SearchBar from "../../component/SearchBar";
import CampusButton from "../../component/CampusButton";
import HomeTab from "../../component/HomeTab";
import { styles } from "./styles";
const Vote = () =>{
    const data = [{Name:'Yozgat Bozok Üniversitesi'},{Name:'Yozgat Bozok Üniversitesi'},{Name:'Bozok'},{Name:'Bozok'},{Name:'Bozok'},{Name:'Bozok'}]
    return(
        <View style={styles.Body}>
            <HomeTab/>
            <SearchBar/>
            <FlatList 
                data = {data}
                renderItem={({item}) => <CampusButton item={item} />}
                numColumns={2} 
                key={(item) => item.id} 
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listView}  
            />
        </View>
    )
}

export default Vote;