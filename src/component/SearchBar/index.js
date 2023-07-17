import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Entypo'
import { SvgUri } from 'react-native-svg';
import Search from '../../assets/icon/search.svg'
import { View, TextInput, TouchableOpacity,StyleSheet} from 'react-native';

const SearchBar = (props) =>{
    
    return(
        <View style={styles.tabBar}>
          <TextInput style={styles.input} placeholder="Kullanıcı Ara..." onChangeText={(text)=>props.setSearch(text)} placeholderTextColor="#9C9BA4" />
          <Search style={styles.search}/>
        </View>
    );
}
const styles = StyleSheet.create({
  tabBar:{
      width:334,
      flexDirection:'row',
      padding:4,
      marginLeft:28,
      backgroundColor:'#D8C4B6',
      borderRadius:5,

    },
    input:{
      backgroundColor:'#F5EFE7',
      width:326,
      height:44,
      borderWidth:1,
      borderColor:'#E0E0E0',
      borderRadius:8,
      paddingLeft:40,
      fontSize:16
    },
  
    search:{
      position:'absolute',
      marginLeft:11, 
      marginTop:14,
      color:'#B2B2B2'
    }
})
export default SearchBar;

