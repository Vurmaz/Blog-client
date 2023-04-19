import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import HeaderTexts from "./HeaderTexts";
import HeaderButton from "./HeaderButton";
import { theme } from "../assests/theme";
import { Link } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Header({ cookies, removeCookie }) {

    const matches = useMediaQuery('(min-width:600px)')

    
    return(
        <CssBaseline>
            <Box sx={{ flexGrow:1 }}>
                <AppBar position="static" sx={{boxShadow:'none'}}> 
                    <Toolbar sx={{ height:'8rem', background:theme.palette.third.main }}>
                        <Grid container spacing={1}>
                            <Grid item xs={4}>
                                <Typography 
                                    component={Link} 
                                    to='/' 
                                    variant="h2"
                                    sx={{
                                        color:theme.palette.primary.main,
                                        textDecoration:'none',
                                        '&:active':{
                                            color:theme.palette.primary.main
                                        }
                                    }}
                                >   BLOGGY
                                </Typography>
                            </Grid>
                            <Grid container spacing={1} item xs={8} sx={{justifyContent:'flex-end'}}>  
                            {
                                !matches ? <HeaderButton cookies={cookies} removeCookie={removeCookie} /> : <HeaderTexts cookies={cookies} removeCookie={removeCookie} />
                            }                              
                                
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Box>
        </CssBaseline>
    )
}