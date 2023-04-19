import React, { useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { theme } from "../assests/theme";
import { Link } from "react-router-dom";
import axios from "axios";
import MenuIcon from '@mui/icons-material/Menu';
import { API, eraseCookie, getCookie } from "../api";

export default function HeaderButton() {
    const [isOpen, setIsOpen] = useState(false)
    
    const logout = async() => {
        await eraseCookie('username')
        await eraseCookie('token')
        await eraseCookie('id')
        
        await window.location.reload()
    }


    return(
        <>
            <Button  onClick={()=>setIsOpen(!isOpen)}><MenuIcon fontSize="large" /></Button>
            {
                isOpen ?  
                <Box 
                    className="animation"
                    sx={{
                        position:'absolute',
                        display:'flex', 
                        flexDirection:'column',
                        justifyContent:'flex-start',
                        paddingTop:'1.5rem',
                        top:'0',
                        right:0,
                        width:'18rem',
                        height:'100vh',                        
                        zIndex:'5',
                        backgroundColor:theme.palette.primary.main,
                        gap:'2rem'
                    }}
                >
                {
                    getCookie('username') ?
                    <>
                        <Button 
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <CloseIcon 
                                sx={{
                                    color:'white',
                                    transition:'color 300ms ease',
                                    '&:hover':{
                                        color:'#FFDCAE'
                                    }
                                }} 
                                fontSize="large" />
                        </Button>
                        <hr width='100%'/>
                        <Typography 
                            component={Link} 
                            to='/create' 
                            textAlign='center'
                            variant='h4' 
                            onClick={() => setIsOpen(!isOpen)}
                            sx={{
                                color:'white',
                                textDecoration:'none',
                                transition:'color 300ms ease',
                                '&:hover':{
                                    color:'#FFDCAE'
                                }
                            }}
                        >   Create Post
                        </Typography>
                        <Typography 
                            component={Link} 
                            to='/dashboard' 
                            textAlign='center' 
                            variant='h4' 
                            onClick={() => setIsOpen(!isOpen)}
                            sx={{
                                color:'white',
                                textDecoration:'none',
                                transition:'color 300ms ease',
                                '&:hover':{
                                    color:'#FFDCAE'
                                }
                            }}
                            
                        >  Dashboard
                        </Typography>
                        <Typography 
                            textAlign='center'
                            variant='h4' 
                            onClick={logout}
                            sx={{
                                color:'white',
                                textDecoration:'none',
                                cursor:'pointer',
                                transition:'color 300ms ease',
                                '&:hover':{
                                    color:'#FFDCAE'
                                }
                            }}
                        >   Log Out
                        </Typography> 
                    </>
                    : 
                    <>
                        <Button 
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <CloseIcon sx={{color:'white'}} fontSize="large" />
                        </Button>
                        <hr width='100%'/> 
                        <Typography 
                            component={Link} 
                            to='/auth/register' 
                            textAlign='center'                              
                            variant='h4'
                            onClick={() => setIsOpen(!isOpen)}
                            sx={{
                                color:'white',
                                textDecoration:'none'
                            }}
                        >   Sign Up
                        </Typography>
                        <Typography 
                            component={Link} 
                            to='/auth/login' 
                            textAlign='center'                              
                            variant='h4'
                            onClick={() => setIsOpen(!isOpen)}
                            sx={{
                                color:'white',
                                textDecoration:'none'
                            }}
                        >   Sign In
                        </Typography> 
                    </>
                    
                }
                    
                </Box>

                
                : null
            }


        </>
    )
}