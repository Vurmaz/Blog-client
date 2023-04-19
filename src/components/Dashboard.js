import axios from "axios"
import React, { useEffect, useState } from "react"
import { getFetch } from "../api"
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Button from "@mui/material/Button"
import { format } from 'date-fns'
import { theme } from "../assests/theme"
import { Link } from "react-router-dom";
import Footer from "./Footer"
import { API, getCookie } from "../api"
import { useNavigate } from "react-router-dom"

export default function Dashboard() {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()

    const deletePost = async(event) => {
        const dataId = event.target.parentNode.parentNode.getAttribute('data-id')
        try{
            await axios.delete(`${API}/dashboard/${dataId}`, {
                headers:{
                    Authorization:`Bearer ${getCookie(' token')}`
                }
            })            
            window.location.href = '/dashboard'
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        getFetch(`${API}/dashboard/user/${getCookie(' id')}`, setPosts, getCookie(' token'))
    }, [])
    
    return(
        <>
        
            <Typography 
                marginTop='2rem' 
                display='flex' 
                justifyContent='center' 
                variant='h3'              
            >   DASHBOARD
            </Typography>
            {
                posts?.post?.length == 0 &&
                <Box 
                    sx={{
                        display:'flex', 
                        justifyContent:'center',
                        flexDirection:'column',
                        marginTop:'2rem',
                        gap:'2rem',
                        marginInline:'auto',
                        width:'50%'
                        
                    }}
                > 
                    <Typography textAlign='center' variant='h6'>Your dashboard is empty</Typography>
                    <Button component={Link} to='/create' color="secondary" variant="outlined">Create post</Button>
                </Box>
            }
            
            <Grid container spacing={3} marginTop='2rem'  paddingBottom='12rem' > 
            
            
              {
                posts.post?.map((post) => {
                return(
                    <Grid item xs={12} key={post._id}>  
                        <Card 
                            data-id={post._id}
                            variant="elevation"
                            sx={{
                                maxWidth:'90%',
                                display:'flex',
                                flexDirection:'column',
                                marginInline:'auto',
                                backgroundColor:theme.palette.third.main,
                                border:`2px solid ${theme.palette.secondary.main}`,
                                
                                [theme.breakpoints.up('sm')]:{
                                    maxWidth:'75%'
                                },
                                [theme.breakpoints.up('md')]:{
                                    maxWidth:'65%'
                                },
                                transition:'box-shadow 300ms ease',
                                cursor:'pointer',
                                '&:hover':{
                                    
                                }

                            }}>
                            <CardContent>
                                <Typography variant='h3'>{post.title}</Typography>
                                <Typography variant='p'>By {post.author}</Typography>
                                <Typography variant="subtitle2">{format(new Date(post.createdAt), 'dd/MM/yyyy')}</Typography>
                                <Box 
                                    sx={{ 
                                        overflowWrap:'anywhere',
                                        width:'90%',
                                        marginTop:'0.5rem',
                                        maxHeight:'9.2rem',
                                        overflow:'hidden'
                                    }}>
                                    <Typography overflow='hidden' paragraph>{post.content}</Typography>
                                </Box>
                                <Typography 
                                    variant="p"
                                    component={Link} 
                                    to={`/${post._id}`}
                                    sx={{
                                        transition:'all 500ms ease',
                                        '&:hover':{
                                            color:theme.palette.secondary.main,
                                            textDecoration:'none'
                                        }
                                    }}
                                >   View More</Typography>
                                <Typography 
                                    onClick={deletePost}
                                    sx={{
                                        marginTop:'1rem',
                                        color:theme.palette.secondary.main,
                                        '&:hover':{
                                            textDecoration:'underline'
                                        }
                                    }}
                                >   DELETE
                                </Typography>                          
                            </CardContent>
                        </Card>
                    </Grid >  
                ) 
                })

                }  
            </Grid>
            

        <Footer />
        </>
    )
}