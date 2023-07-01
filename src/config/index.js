import React from 'react'

let token;

export const setToken = (access_token) => {
    token = access_token
}

export const getToken = () =>{
    return token;
}