import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    Body:{
        flex:1,
        backgroundColor:'#F7F6FB'
      },
      Container:{
        width:'92%',
        alignSelf:'center',
        justifyContent:'space-between'
      },
      listView: {
        justifyContent: 'space-between',
        paddingBottom:10,
        paddingTop:10,
        paddingHorizontal:5
      },
      title:{
        fontSize:22,
        lineHeight:23,
        fontFamily:'DMSans-Bold',
        color:'#3669C9'
      },
      area:{
        width:'100%',
        height:55,
        alignItems:'center',
        flexDirection:'row',
        paddingLeft:85,
        justifyContent:'space-between',
        paddingRight:25,
        paddingTop:16
      },
  
      tabBar:{
        justifyContent:'space-between',
        width:'100%',
        flexDirection:'row'
      },
      input:{
        backgroundColor:'white',
        width:300,
        height:44,
        borderWidth:1,
        borderColor:'#E0E0E0',
        borderRadius:8,
        paddingLeft:45,
        fontSize:16
      },
  
      search:{
        position:'absolute', 
        marginLeft:10,
        marginTop:10
      },
      banner:{
        marginRight:15
      },
  
      categoryItem:{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
  
        elevation: 2,
  
        backgroundColor:'white',
        width:72,
        height:72,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
      },
  
      categoryContainer:{
        marginRight:37,
        marginLeft:1,
        marginVertical:5
      },
  
      bannerRow:{
        paddingVertical:20
      },
  
      categoryTitleRow:{
        flexDirection:'row',
        marginBottom:14,
        justifyContent:'space-between'
      },
  
      productTitleRow:{
        flexDirection:'row',
        marginTop:50,
        marginBottom:14,
        justifyContent:'space-between'
      },
  
      categoryTitle:{
        fontSize:16,
        lineHeight:25,
        color:'#0C1A30',
        fontFamily:'DMSans-Regular'
      },
  
      jC_C:{justifyContent:'center'},
  
      allCategoryText:{
        fontSize:12,
        lineHeight:22,
        color:'#3669C9',
        fontFamily:'DMSans-Regular',
        textAlign:'center'
      },
  
      categoryImage:{
        width:50,
        height:50
      },
  
      categoryName:{
        fontSize:14,
        lineHeight:22,
        color:'#0C1A30',
        alignSelf:'center'
      },
  
      categoryCard:{
        alignItems:'center',
        marginRight:15,
        marginLeft:5,
        marginTop:2
      },
  
      menuRow:{
        width:44,
        height:44,
        backgroundColor:'#3669C9',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
      },
  
      modal:{
        width:'100%',
        height:'100%'
      },
  
      modalBody:{
        backgroundColor:'white',
        width:'100%',
        height:'52%',
        alignSelf:'center',
        marginTop:'auto',
        borderTopLeftRadius:20,
        borderTopRightRadius:20
      },
  
      modalContainer:{
        width:'90%',
        marginTop:20,
        alignSelf:'center'
      },
  
      tabRow:{
        flexDirection:'row',
        width:390,
        height:60,
        justifyContent:'space-between',
        padding:15,
        alignSelf:'center',
        backgroundColor:'white',
      },
  
      modalTitle:{
        fontSize:16,
        lineHeight:24,
        color:'#0C1A30',
        fontFamily:'DMSans-Medium'
      },
  
      white:{
        color:'white'
      },
  
      modalLine:{
        width:'100%',
        height:1,
        backgroundColor:'#EDEDED',
      },
  
      notificationTitle:{
        fontSize:16,
        lineHeight:16,
        color:'#0C1A30',
        fontFamily:'DMSans-Body'
      },

    notificationRow:{
        padding:20,
        width:'100%',
        flexDirection:'row'
    },

    bell:{
        color:'black',
        marginTop:10
    },

    textRow:{
        marginLeft:20,
        minHeight:50
    }
})