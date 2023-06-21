import { View,ScrollView,Image,FlatList} from "react-native";
import SearchBar from "../../component/SearchBar";
import CampusButton from "../../component/CampusButton";
import { styles } from "./styles";
const Vote = () =>{
    const data = [{Name:'Bozok'},{Name:'Bozok'},{Name:'Bozok'},{Name:'Bozok'},{Name:'Bozok'},{Name:'Bozok'}]
    return(
        <View style={styles.Body}>
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