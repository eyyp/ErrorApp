import { TouchableOpacity,Image,Text, StyleSheet} from "react-native"
export const categoryButton = (props) =>{
    return(
        <TouchableOpacity style={styles.modalButton} onPress={props.onPress()}>
            <Image 
                style={styles.buttonImage}
                source={{uri:'http://yonetimpanel.com/admin/uploads/package.png'}}
            />
            <Text style={styles.modalButtonTitle}>Tümü</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    modalButton:{
        marginRight:10,
        width:150,
        height:40,
        backgroundColor:'#F5EFE7',
        borderRadius:5,
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection:'row',
        paddingLeft:15
    },
    modalButtonTitle:{
        color:'black',
    },
    buttonImage:{
        width:30,
        height:30,
        marginRight:10
    },
})