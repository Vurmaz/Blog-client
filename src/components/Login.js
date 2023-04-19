import React, { useState } from "react";
import axios from 'axios'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button'
import { Link } from "react-router-dom";
import { theme } from "../assests/theme";
import Footer from "./Footer";
import { API, setCookie } from "../api";

export default function Login({}) {
    const [user, setUser] = useState({ email:'', password:'' })
    const [iserror, setIsError] = useState(false)
    const [errorText, setErrorText] = useState(false)

    const login = async(event) => {
        event.preventDefault()
        try{
            const resp = await axios.post(`${API}/auth/login`, user)
            await setCookie('username', resp.data.username)
            await setCookie('token', resp.data.token)
            await setCookie('id', resp.data.id)
            
            window.location.reload()
            
            
        }
        catch(error){
            await setIsError(true)
            await setErrorText('Invalid email or password')
        }
    }
    const changeValues = (event) => {
        const name = event.target.name
        const value = event.target.value
        setUser({ ...user, [name] : value })        
    }
    
    return(
        <>
            <Typography variant='h3' textAlign='center' marginTop='2rem'>Sign In</Typography>
            <Box 
                component='form'
                onSubmit={login}
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    gap:'2rem',
                    width:'70%',
                    marginInline:'auto',
                    marginTop:'2rem',
                    [theme.breakpoints.up('sm')]: {
                        width:'500px'
                    }
                }}
            >
                <TextField
                    name="email"
                    label='E-mail' 
                    type='email'
                    variant='filled'
                    color='secondary'
                    value={user.email}
                    onChange={(event) => changeValues(event)}
                />
                <TextField
                    name="password"
                    label='Password' 
                    type='password'
                    variant='filled'
                    color='secondary'
                    value={user.password}
                    onChange={(event) => changeValues(event)}
                />
                {
                    errorText &&
                    <Typography color={theme.palette.secondary.main} textAlign='center' variant='subtitle1'>{errorText}</Typography>
                }
                <Button variant="contained" type='submit'>Sign In</Button>
                <Box sx={{display:'flex', gap:'0.5rem', alignItems:'center', marginInline:'auto'}}>
                    <Typography variant="subtitle2">New here?</Typography>
                    <Typography variant="subtitle2" component={Link} to='/auth/register'> Create an account.</Typography> 
                </Box>
                
            </Box>
            <Footer />
        </>
    )
}