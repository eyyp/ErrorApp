import Constants from "./Constants";
import axios from "axios";
const api = (path, params, methodP, token ) => {
    const headersOptions = {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...(token && { "Authorization": `Bearer ${token}`})
    }

    const options = {
        headers:headersOptions,
        method: methodP,
        ...(params && { data: params}),
    }
    return axios(Constants.BASE_URL + path, options).
    then(res =>res).
    catch(error => console.log(path,error))
}   
export default api;