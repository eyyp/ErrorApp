import React, { useState } from 'react';
import Search from '../../assets/icon/search.svg'
import { View, TextInput, TouchableOpacity,StyleSheet,Image} from 'react-native';

const SearchBar = (props) =>{
    const [focus,setFocus] = useState(false);
    const  [key,setKey] = useState('');
    return(
        <View style={styles.tabBar}>
          <TextInput style={styles.input} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} placeholder={props.text} value={key} onChangeText={(text)=>{setKey(text);props.setSearch(text)}} placeholderTextColor="#9C9BA4" />
          <Search style={styles.search}/>
          {focus &&
            <TouchableOpacity style={styles.deleteButton} onPress={()=>{setKey('');props.reset()}}>
              <Image
                style={styles.deleteicon}
                source={require('../../assets/icon/cross.png')} 
              />
            </TouchableOpacity>
          }
        </View>
    );
}
const styles = StyleSheet.create({
  tabBar:{
      width:334,
      flexDirection:'row',
      padding:4,
      marginLeft:28,
      backgroundColor:'white',
      borderRadius:5,
      marginTop:15
    },
    input:{
      backgroundColor:'white',
      width:326,
      height:44,
      borderRadius:8,
      paddingLeft:40,
      fontSize:16
    },
  
    search:{
      position:'absolute',
      marginLeft:11, 
      marginTop:14,
      color:'#B2B2B2'
    },
    deleteButton:{
      position:'absolute',
      marginLeft:295,
      marginTop:13
    },
    deleteicon:{
      width:25,
      height:25
    }
})
export default SearchBar;

