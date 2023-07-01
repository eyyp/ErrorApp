import { View,TextInput,StyleSheet, TouchableOpacity,Text,Image, ScrollView} from "react-native";
const Signup = () =>{
    return(
        <ScrollView style={styles.Body}>
            <View style={{marginLeft:140,marginTop:60}}>
                <Image 
                    style={{width:100,height:100}}
                    source={require('../../assets/images/cap2.png')}
                />
                <Text style={{fontSize:22,color:'black'}}>bi Kampüs</Text>
            </View>
            <View style={styles.inputRow}>
                <TextInput style={styles.input} placeholder="Email" placeholderTextColor={'#000000'}/>
                <TextInput style={styles.input} placeholder="Nick" placeholderTextColor={'#000000'}/>
                <TextInput style={styles.input} secureTextEntry={true} placeholder="Şifre" placeholderTextColor={'#000000'}/>
                <TextInput style={styles.input} secureTextEntry={true} placeholder="Tekrar Şifre" placeholderTextColor={'#000000'}/>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.checkButton}>
                        <Image 
                            style={styles.checkImage}
                            source={require('../../assets/icon/box.png')}
                        />
                    </TouchableOpacity>
                    <Text style={styles.checkText}>Erkek</Text>
                    <TouchableOpacity style={styles.checkButton}>

                    </TouchableOpacity>
                    <Text style={styles.checkText}>Kız</Text>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.checkButton}>

                    </TouchableOpacity>
                    <Text style={styles.checkText}>Kullanıcı & Üyelik Sözleşmesi' ni okudum, anladım ve kabul ediyorum.</Text>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.checkButton}>

                    </TouchableOpacity>
                    <Text style={styles.checkText}>KVKK Metni’ni ve Aydınlatma Metni’ni okudum, anladım ve kabul ediyorum.</Text>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.checkButton}>

                    </TouchableOpacity>
                    <Text style={styles.checkText}>Kampanya ve tanıtımlar için Email, Telefon ve Sms ile iletişim kurulmasını kabul ediyorum.</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Kayıt Ol</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
export default Signup;

const styles = StyleSheet.create({
    Body:{
        flex:1,
        backgroundColor:'#F5EFE7'
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
        backgroundColor:'#4F709C',
        borderRadius:10,
        width:320,
        height:60,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
    },
    buttonText:{
        color:'white',
        fontSize:19
    },
    inputRow:{
        marginTop:80,
        paddingLeft:32
    },
    checkButton:{
        width:20,
        height:20,
        borderRadius:5,
        borderWidth:2,
        borderColor:'white',
        backgroundColor:'#F5EFE7',
        marginTop:10
    },
    row:{
        flexDirection:'row'
    },
    checkText:{
        marginTop:11,
        marginLeft:5,
        color:'black',
        fontSize:12,
        marginRight:10,
        paddingRight:40
    },
    checkImage:{
        width:22,
        height:22
    }
})