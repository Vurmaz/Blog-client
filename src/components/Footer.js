import React from "react";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { theme } from "../assests/theme";
import { Link } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
    return(
        <CssBaseline>
        <footer>
            <Box sx={{
                bgcolor:'transparent',
                position:'absolute',
                width:'100%',
                bottom:'0',
                height:'8rem',
                left:'0',
                top:'auto',
                borderTop:'1px solid black'
            }}>
                <Box sx={{display:'flex', gap:'1rem', padding:'1rem', justifyContent:'center', marginTop:'1rem'}}>
                    <Typography
                         sx={{
                            textDecoration:'none',
                            transition:'text-decoration 500ms ease',
                            '&:hover':{textDecoration:'underline'}
                        }} 
                        component={Link} 
                        to='/auth/register'
                    >   Sign Up
                    </Typography>
                    <Typography 
                        sx={{
                            textDecoration:'none',
                            transition:'text-decoration 500ms ease',
                            '&:hover':{textDecoration:'underline'}
                        }} 
                        component={Link} 
                        to='/auth/login'
                    >   Sign In
                    </Typography>
                    <Typography 
                        sx={{
                            textDecoration:'none',
                            transition:'text-decoration 500ms ease',
                            '&:hover':{textDecoration:'underline'}
                        }} 
                        component={Link} 
                        to='/'
                    >   Home
                    </Typography>  
                    <Typography 
                        sx={{
                            textDecoration:'none',
                            transition:'text-decoration 500ms ease',
                            '&:hover':{textDecoration:'underline'}
                        }} 
                        component={Link} 
                        to='/dashboard'
                    >   Dashboard
                    </Typography>                            
                    
                </Box>
                <Box sx={{display:'flex', justifyContent:'center', padding:'1rem', alignItems:'center', gap:'1rem'}}>
                    <Typography variant='h6'>Create By Vurmaz</Typography>
                    <a href="https://github.com/Vurmaz">
                        <GitHubIcon 
                            sx={{
                                fontSize:'2.5rem',
                                transition:'color 500ms ease',
                                '&:hover':{
                                    color:theme.palette.secondary.main
                                }
                            }}
                        />
                    </a>    
                </Box> 
            </Box>










            {/* <Box sx={{ flexGrow:1, position:'absolute', bottom:0}}>
                <AppBar 
                    sx={{
                        bgcolor:theme.palette.third.main,
                    }}
                >
                    <Toolbar sx={{display:'flex', justifyContent:'center', gap:'1rem', flexDirection:'column'}}>
                        <Box sx={{display:'flex', gap:'1rem', padding:'0.5rem'}}>
                            <Typography component={Link} to='/auth/register'>Sign Up</Typography>
                            <Typography component={Link} to='/auth/login'>Sign In</Typography>
                            <Typography component={Link} to='/'>Home</Typography>  
                            <Typography component={Link} to='/dashboard'>Dashboard</Typography>                            
                            <Typography component={Link} to='/create'>Create Post</Typography>  
                        </Box>
                        <Box sx={{display:'flex', justifyContent:'center', padding:'0.5rem'}}>
                            <Typography>Create By Vurmaz</Typography>
                            <a href="">
                                <GitHubIcon 
                                    sx={{
                                        fontSize:'2rem'
                                    }}
                                />
                            </a>    
                        </Box>                                                
                    </Toolbar>
                </AppBar>
            </Box> */}
        </footer>
            
        </CssBaseline>
    )
}