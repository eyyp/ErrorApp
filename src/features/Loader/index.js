import { View,Text,ActivityIndicator, Image} from "react-native";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store/actions";

const Loader = (props) =>{

    const dispatch = useDispatch();

    const shareCampusReducer = useSelector(state =>state.ShareCampus);
    const {shareCampus} = shareCampusReducer;

    const categoryReducer = useSelector(state=>state.Category);
    const {category, categoryStatus} = categoryReducer;

    const elegantReducer = useSelector(state=>state.Elegant);
    const {elegant,elegantStatus} = elegantReducer;

    const campusReducer = useSelector(state =>state.Campus);
    const {selectCampus} = campusReducer;

    useEffect(()=>{
        dispatch(actions.Category())
    },[])

    useEffect(()=>{
        dispatch(actions.Elegant(selectCampus))
    },[category])

    useEffect(()=>{
        dispatch(actions.ShareCampus(selectCampus))
    },[elegant])

    useEffect(()=>{
        props.navigation.navigate("Tab");
    },[shareCampus])

    return(
        <View style={{flex:1,backgroundColor:'#F5EFE7'}}>
            <Image 
            source={require('../../assets/images/cap2.png')}
                style={{width:150,height:200,alignSelf:'center',marginTop:40}}
            />
            <ActivityIndicator 
                size="large"
                style={{marginTop:110}}
            />
        </View>
    )
}

export default Loader;