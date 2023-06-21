import React from 'react';
import Ionicons from 'react-native-vector-icons/Entypo'
import { SvgUri } from 'react-native-svg';
import Search from '../../assets/icon/search.svg'
import { View, TextInput, TouchableOpacity,StyleSheet} from 'react-native';

const SearchBar = () =>{
    return(
        <View style={styles.tabBar}>
          <TextInput style={styles.input} placeholder="Ürün Ara..." placeholderTextColor="#9C9BA4" />
          <Search style={styles.search}/>
        </View>
    );
}
const styles = StyleSheet.create({
  tabBar:{
      width:'100%',
      flexDirection:'row',
      paddingVertical:5,
      paddingHorizontal:10,
    },
  
    input:{
      backgroundColor:'white',
      width:'100%',
      height:44,
      borderWidth:1,
      borderColor:'#E0E0E0',
      borderRadius:8,
      paddingLeft:40,
      fontSize:16
    },
  
    search:{
      position:'absolute',
      marginLeft:20, 
      marginTop:14,
      color:'#B2B2B2'
    }
})
export default SearchBar;

