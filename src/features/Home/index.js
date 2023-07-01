import { ScrollView, View,StyleSheet,TouchableOpacity,Text,Image} from "react-native";
import { useEffect } from "react";
import { search } from "../../services/method/user";
import axios from "axios";
import {styles} from './style'
import HomeTab from "../../component/HomeTab";
import ShareCard from "../../component/ShareCard";
const Home = () =>{
    return(
        <View style={styles.Body}>
            <ScrollView>
                <HomeTab />
                <View style={styles.elegateRow}>
                    <Text style={styles.elegateTitle}>En İyi Kafe</Text>
                    <View style={styles.elegaButtonRow}>
                        <TouchableOpacity style={styles.elegateButton}>
                            <Text style={styles.elegateButtonText}>Gonzales</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.elegateButton}>
                            <Text style={styles.elegateButtonText}>Orta Şekerli</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ShareCard/>
        </ScrollView>
    </View>
    )
}

export default Home;