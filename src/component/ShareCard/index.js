import { View,Image, Text,TouchableOpacity,StyleSheet} from 'react-native';
const ShareCard = (props) =>{
    return(
        <View>
            <View style={styles.card}>
                <View style={styles.profilRow}>
                    <Image
                        style={{width:40,height:40,}}
                        source={require('../../assets/images/avatar/man.png')}
                    />
                    <Text style={styles.nickText}>Lorem İpsum</Text>
                </View>
                <View style={styles.shareRow}>
                    <Text style={styles.shareText}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </Text>
                </View>
            </View>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.reactFirstButton}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/icon/like.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.reactSecondButton}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/icon/comment.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.reactSecondButton}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/icon/happy.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.reactSecondButton}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/icon/shocked.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.reactSecondButton}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/icon/sad.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.reactSecondButton}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/icon/angry.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.reactSecondButton}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/icon/love.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.reactSecondButton}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/icon/thinking.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}
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
const styles = StyleSheet.create({
    card:{
        backgroundColor:'#D8C4B6',
        width:334,
        height:180,
        borderRadius:10,
        ...shadow,
        marginTop:10,
        marginLeft:28
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
    nickText:{
        marginLeft:10,
        marginTop:13,
        color:'#3F3F3F',
        fontSize:12,
        width:132,
        height:26,
        borderRadius:5,
        paddingLeft:8,
        backgroundColor:'#F5EFE7',
        paddingTop:4
    },
    shareRow:{
        width:300,
        height:100,
        marginTop:14,
        backgroundColor:'#F5EFE7',
        borderRadius:5,
        marginLeft:14
    },
    shareText:{
        marginLeft:14,
        marginTop:13,
        marginRight:13,
        fontSize:11,
        color:'#3F3F3F'
    },
    buttonRow:{
        flexDirection:'row'
    },
    reactFirstButton:{
        backgroundColor:'#D8C4B6',
        width:33,
        height:33,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:28,
        marginTop:7
    },
    reactSecondButton:{
        backgroundColor:'#D8C4B6',
        width:33,
        height:33,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10,
        marginTop:7
    },
    image:{
        width:24,
        height:24
    }
})
export default ShareCard;