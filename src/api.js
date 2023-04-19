import axios from "axios"

export const API = 'https://blog-api-vurmaz-01.herokuapp.com'

export const getFetch = async(url, set, token) => {
    try{
        const { data } = await axios.get(url, {
            headers:{
                Authorization :`Bearer ${token}`
            },
            withCredentials:true
        })
        await set(data)
    }
    catch(error){
        console.log(error)
    }
 
}

export function setCookie(key, value) {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    document.cookie = `${key}=${value}; path=/;  SameSite=none; Secure; max-age=" + 30 * 24 * 60 * 60;`
}
export function eraseCookie(name) {   
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'   
}

export function getCookie(name) {
    return document.cookie
    .split(';')
    .find((row) => row.startsWith(name))
    ?.split('=')[1]
}