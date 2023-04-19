import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { theme } from "../assests/theme";
import { Link } from "react-router-dom";
import { eraseCookie, getCookie } from "../api";

export default function HeaderTexts() {
    const logout = async() => {
        await eraseCookie('username')
        await eraseCookie('token')
        await eraseCookie('id')
        
        await window.location.reload()
    }

    return(
        <>
            {
                getCookie('username')
                ? 
                (
                    <Box 
                        sx={{
                            display:'flex',
                            gap:'2rem',
                            alignItems:'center',
                            justifyContent:'center'
                        }}
                    >       
                        <Typography 
                            className='hover-btn'
                            variant='h6' 
                            component={Link} 
                            to='/create'
                            sx={{            
                                textDecoration:'none'     
                            }}                                                
                        >   Create Post
                        </Typography>                                     
                        <Typography     
                            className='hover-btn'                                        
                            variant='h6' 
                            component={Link} 
                            to='/dashboard'
                            sx={{
                                textDecoration:'none'                                                    
                            }}                                                
                        >   Dashboard
                        </Typography>
                        <Typography     
                            className='hover-btn'                                             
                            variant='h6'
                            onClick={logout}
                            sx={{
                                color:theme.palette.primary.main,
                                cursor:'pointer'
                            }} 
                        >   Logout
                        </Typography>                                                                                     
                    </Box>     
                )
                    
                :   
                    <Box
                        sx={{
                            display:'flex',
                            gap:'1rem',
                            alignItems:'center',
                        }} 
                    >
                        <Typography    
                            className='hover-btn'                                          
                            variant='h6' 
                            component={Link} 
                            to='/auth/register'
                            sx={{
                                textDecoration:'none'
                            }}
                        >   Sign Up
                        </Typography>
                        <Typography       
                            className='hover-btn'                                           
                            variant='h6' 
                            component={Link} 
                            to='/auth/login'
                            sx={{
                                textDecoration:'none'
                            }}
                        >   Sign In
                        </Typography>
                    </Box>
                    
            }
        </>
    )
}