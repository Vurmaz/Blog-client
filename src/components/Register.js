import React, { useState } from "react";
import axios from 'axios'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button'
import { theme } from "../assests/theme";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { API } from "../api";

export default function Register() {
    const [user, setUser] = useState({ username:'', email:'', password:'', passwordConfirm:'' })
    const [errorText, setErrorText] = useState(null)

    const register = async(event) => {
        event.preventDefault()
        try{
            await axios.post(`${API}/auth/register`, user, {
                withCredentials:true
            })
            window.location.href='/auth/login'
        }
        catch(error){
            setErrorText(error.response.data.msg)     
        }
    }
    const changeValues = (event) => {
        const name = event.target.name
        const value = event.target.value
        setUser({ ...user, [name] : value })
    }
    return(
        <>
            <Typography marginTop='2rem' textAlign='center' variant='h3'>Create Account</Typography>
            <Box 
                component='form' 
                onSubmit={register}
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    gap:'1rem',
                    width:'70%',
                    marginInline:'auto',
                    marginTop:'2rem',
                    borderRadius:'8px',
                    paddingBottom:'12rem',
                    [theme.breakpoints.up('sm')]: {
                        width:'500px'
                    }

                }}
            >
                <TextField
                    name="username"
                    label='Username' 
                    color='secondary'
                    className="register-input"
                    value={user.username}
                    onChange={(event) => changeValues(event)}
                    variant='filled'
                />
                <TextField
                    name="email"
                    label='E-mail' 
                    type='email'
                    value={user.email}
                    onChange={(event) => changeValues(event)}
                    variant='filled'
                />
                <TextField
                    name="password"
                    label='Password'
                    type='password'
                    value={user.password}
                    onChange={(event) => changeValues(event)}
                    variant='filled'
                />
                <TextField
                    name="passwordConfirm"
                    label='Confirm Password'
                    type='password'
                    value={user.passwordConfirm}
                    onChange={(event) => changeValues(event)}
                    variant='filled'
                />
                <Button 
                    sx={{
                        width:'70%', 
                        marginInline:'auto',
                    }} 
                    variant="contained" 
                    type='submit'
                >
                    Create Account
                </Button>
                <Box sx={{display:'flex', gap:'0.5rem', alignItems:'center', marginInline:'auto'}}>
                    <Typography variant="subtitle2">Already have an account?</Typography>
                    <Typography variant="subtitle2" component={Link} to='/auth/login'> Sign in here.</Typography> 
                </Box>
                
                {
                    errorText && 
                   <Typography textAlign='center' variant='subtitle1'>{errorText}</Typography>
                }
            </Box>
            <Footer />
        </>
    )
}