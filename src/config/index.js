import React from 'react'

let token;

export const setToken = (access_token) => {
    token = access_token
}

export const getToken = () =>{
    return token;
}

export const clearToken = () =>{
    token = '';
}

export const shadow = {
    shadowColor: "#000",
    shadowOffset:{
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
}

export const avatars = [
    {url:require('../assets/images/avatar/1.png')},
    {url:require('../assets/images/avatar/2.png')},
    {url:require('../assets/images/avatar/3.png')},
    {url:require('../assets/images/avatar/4.png')},
    {url:require('../assets/images/avatar/5.png')},
    {url:require('../assets/images/avatar/6.png')},
    {url:require('../assets/images/avatar/7.png')},
    {url:require('../assets/images/avatar/8.png')},
    {url:require('../assets/images/avatar/9.png')},
    {url:require('../assets/images/avatar/10.png')},
    {url:require('../assets/images/avatar/11.png')},
    {url:require('../assets/images/avatar/12.png')},
    {url:require('../assets/images/avatar/13.png')},
    {url:require('../assets/images/avatar/14.png')}, 
    {url:require('../assets/images/avatar/15.png')},
    {url:require('../assets/images/avatar/16.png')},
    {url:require('../assets/images/avatar/17.png')},
    {url:require('../assets/images/avatar/18.png')},
    {url:require('../assets/images/avatar/19.png')},
    {url:require('../assets/images/avatar/20.png')},
    {url:require('../assets/images/avatar/21.png')},
    {url:require('../assets/images/avatar/22.png')},
    {url:require('../assets/images/avatar/23.png')},
    {url:require('../assets/images/avatar/24.png')},
    {url:require('../assets/images/avatar/25.png')},
    {url:require('../assets/images/avatar/26.png')},
    {url:require('../assets/images/avatar/27.png')},
    {url:require('../assets/images/avatar/28.png')},
    {url:require('../assets/images/avatar/29.png')},
    {url:require('../assets/images/avatar/30.png')},
    {url:require('../assets/images/avatar/31.png')},
    {url:require('../assets/images/avatar/32.png')},
    {url:require('../assets/images/avatar/33.png')},
    {url:require('../assets/images/avatar/34.png')},
    {url:require('../assets/images/avatar/35.png')},
    {url:require('../assets/images/avatar/36.png')},
    {url:require('../assets/images/avatar/37.png')},
    {url:require('../assets/images/avatar/38.png')},
    {url:require('../assets/images/avatar/39.png')},
    {url:require('../assets/images/avatar/40.png')},
]; 