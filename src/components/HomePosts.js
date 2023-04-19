
import React, { useEffect, useState } from "react"
import { getFetch } from "../api"
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import { format } from 'date-fns'
import { theme } from "../assests/theme"
import { useNavigate } from "react-router-dom"
import { API } from "../api"


export default function HomePosts() {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()
    
    const getFirstParagraph = (post) => {
        if(post.length > 300){
            return (post.split('', 250).join('') + '...')
        }
        return post
    }
    const navigatePost = (event) => {
        const postId = (event.target.parentNode.getAttribute('data-id'))
        navigate(`/${postId}`)
    }

    useEffect(() => {
        getFetch(`${API}/home`, setPosts)
    }, [])

    return(
        <Grid container spacing={1}>
            <Typography margin='5rem auto' variant='h3'>LATEST POSTS</Typography>
            <Box
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    gap:'1rem',
                    marginBottom:'3rem',
                    paddingBottom:'12rem'
                }}
            >
                {
                    posts?.map((post) => {                        
                        return(
                            <Grid key={post._id} item xs={12}> 
                            <Card                                 
                                onClick={navigatePost}
                                data-id = {post._id}
                                sx={{ 
                                    width:'80%', 
                                    background:'transparent',
                                    marginInline:'auto',
                                    boxShadow:'none',
                                    border:`2px solid ${theme.palette.secondary.main}`,
                                    cursor:'pointer',
                                    transition:'box-shadow 300ms ease',
                                    '&:hover':{
                                        boxShadow:'0px 0px 4px 0px rgba(0,0,0,0.75)'
                                    },
                                    [theme.breakpoints.up('sm')]:{
                                        width:'60%'
                                    }
                                }}
                            >
                                    <CardContent>
                                        <Typography sx={{pointerEvents:'none'}} variant="h5">{post.title}</Typography>
                                        <Typography sx={{pointerEvents:'none'}} variant='subtitle1'>By {post.author}</Typography>
                                        <Typography sx={{pointerEvents:'none'}} variant='subtitle2'>{format(new Date(post.createdAt), 'dd/MM/yyyy')}</Typography>
                                        <Box 
                                        sx={{ 
                                            overflowWrap:'anywhere',
                                            width:'90%',
                                            marginTop:'0.5rem',
                                            maxHeight:'6rem',
                                            overflow:'hidden',
                                            pointerEvents:'none'
                                        }}>
                                        <Typography sx={{pointerEvents:'none'}} overflow='hidden' paragraph>{getFirstParagraph(post.content)}</Typography>
                                    </Box>
                                    </CardContent>
                                </Card>     
                            </Grid>
                            
                        )
                    })
                }
            </Box>
        </Grid>
    )
}