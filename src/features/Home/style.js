import { StyleSheet } from "react-native";
const shadow = {
    shadowColor: "#000",
    shadowOffset:{
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
}
export const styles =  StyleSheet.create({
    Body:{
        flex:1,
        backgroundColor:'#F5EFE7',
        width:390
    },
    input:{
        width:320,
        height:55,
        backgroundColor:'white',
        borderRadius:10,
        marginTop:15,
        paddingLeft:20,
    },
    button:{
        backgroundColor:'#3669C9',
        borderRadius:10,
        width:300,
        height:60,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
        marginLeft:10
    },
    buttonText:{
        color:'white',
        fontSize:19
    },
    inputRow:{
        marginTop:80,
        paddingLeft:32
    },
    tabRow:{
        height:48,
        backgroundColor:'#D8C4B6',
        borderRadius:5,
        margin:10,
        width:334,
        padding:10,
        alignSelf:'center',
        flexDirection:'row',
        ...shadow,
    },
    tabButton:{
        width:33,
        height:33,
    },
    image:{
        width:23,
        height:23,
        marginTop:3,
        marginLeft:3
    },
    userButton:{
        flexDirection:'row',
        marginLeft:100,
        width:116,
        height:31,
        backgroundColor:'#F5EFE7',
        ...shadow,
        borderRadius:23,
        alignItems:'center',
        paddingLeft:7
    },
    userNick:{
        color:'black',
        fontSize:12,
        marginRight:5
    },
    categoryButton:{
        backgroundColor:'#3669C9',
        width:120,
        height:40,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10
    },
    buttonText:{
        color:'white',
        fontSize:15        
    },

    profilRow:{
        width:46,
        height:46,
        marginLeft:14,
        marginTop:11,
        flexDirection:'row',
        backgroundColor:'#F5EFE7',
        borderRadius:10,
        paddingLeft:3,
        paddingTop:3
    },
    gary:{
        color:'gray'
    },
    elegateRow:{
        width:334,
        minHeight:65,
        justifyContent:'space-between',
        borderRadius:5,
        marginHorizontal:5,
        alignSelf:'center',
        paddingLeft:9,
        backgroundColor:'#D8C4B6'
    },
    elegateTitle:{
        alignSelf:'center',
        color:'#F5EFE7',
        fontSize:15,
        fontWeight:'700',
        marginTop:3
    },
    elegateButton:{
        backgroundColor:'#F5EFE7',
        width:156,
        height:35,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginRight:4,
        borderRadius:5
    },
    elegateConFirst:{
        backgroundColor:'#CCEEBC',
        width:150,
        height:35,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        paddingLeft:5,
        paddingRight:10,
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5,
        marginRight:4
    },
    elegateConSecond:{
        backgroundColor:'#8CC0DE',
        width:150,
        height:35,
        flexDirection:'row',
        alignItems:'center',
        paddingRight:10,
        paddingLeft:10,
        borderTopRightRadius:5,
        borderBottomRightRadius:5
    },
    elegaButtonRow:{
        flexDirection:'row',
        paddingBottom:4
    },
    elegateButtonText:{
        color:'#D8C4B6',
        fontSize:14,
        fontWeight:'900'
    },
    elegateText:{
        color:'white',
        fontSize:14,
        fontWeight:'900'
    },
    modalContainer:{
        flex: 1, 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor:'#F5EFE7'
    },
    elegantInfoRow:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    elegantText:{
        color:'white',
        marginBottom:6,
        marginLeft:10
    },
    elegantTextSecond:{
        color:'white',
        marginBottom:6,
        marginRight:10
    },
    modalBody:{
        backgroundColor:'#D8C4B6',
        width:'100%',
        height:'100%',
        alignSelf:'center',
        marginTop:'auto',
    },
    row:{
        flexDirection:'row'
    },
    scroll:{
        paddingBottom:20
    },
    modalTitle:{
        color:'#F5EFE7',
        marginLeft:160,
        fontSize:18,
        marginTop:10,
        fontWeight:'900'
    },
    closeImage:{
        width:15,
        height:15,
        marginTop:18,
        marginLeft:130
    },
    modalScroll:{
        padding:30
    },
    modalButton:{
        marginRight:10,
        width:150,
        height:40,
        borderRadius:5,
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection:'row',
        paddingLeft:15,
        marginBottom:10
    },
    allButton:{
        marginLeft:120,
        marginTop:20,
        width:150,
        height:40,
        backgroundColor:'#F5EFE7',
        borderRadius:5,
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection:'row',
        paddingLeft:15,
    },
    modalButtonTitle:{
        color:'black',
    },
    buttonImage:{
        width:30,
        height:30,
        marginRight:10
    },
    listView:{
        paddingBottom:10,
        paddingTop:20,
        paddingLeft:40
    },
    okButton:{
        backgroundColor:'#F5EFE7',
        width:150,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5, 
        marginLeft:120,
        marginBottom:300
    }
})