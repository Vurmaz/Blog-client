import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../api";
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from "@mui/material/TextField";
import { theme } from "../assests/theme";
import { format } from "date-fns";
import axios from "axios";
import Footer from './Footer'
import { API, getCookie } from '../api'

export default function Post() {
    const [post, setPost] = useState([])
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState({ name:'', comment:'' })
    const [commentError, setCommentError] = useState(null)
    const id = useParams()
    const date = post.post ? format(new Date(post?.post?.createdAt), 'dd/MM/yyyy') : undefined
    
    const postComment = async(event) => {
        event.preventDefault()
        try{
            await axios.post(`${API}/dashboard/${getCookie(' id')}/${id.postId}`, newComment, {
                headers:{
                    Authorization:`Bearer ${getCookie(' token')}`    
                }
            })
            await window.location.reload()
        }
        catch(err){
            setCommentError(err.response.data.msg)
        }
    }
    const changeValues = (event) => {
        const name = event.target.name
        const value = event.target.value
        setNewComment({ ...newComment, [name] : value })        
    }
    useEffect(() => {
        getFetch(`${API}/dashboard/${id.postId}`, setPost, getCookie(' token'))
        getFetch(`${API}/dashboard/${getCookie(' id')}/${id.postId}`, setComments, getCookie(' token'))
    }, [])
    
    return(
        <>
            <Box 
                sx={{ 
                    marginTop:'2rem',
                    paddingBottom:'14rem',
                    width:'90%',
                    marginInline:'auto',
                    paddingInline:'2rem',
                    textAlign:'center',
                    [theme.breakpoints.up('sm')]:{width:'70%'}
                }}>
                <Typography sx={{display:'flex', justifyContent:'center', overflowWrap:'anywhere'}} variant='h2'>{post?.post?.title}</Typography>
                <Typography variant="h5">Posted By : {post?.post?.author}</Typography>
                <Typography marginBottom='1rem' variant="subtitle2">Published at : {date}</Typography>
                <hr color={theme.palette.secondary.main}/>
                <Box sx={{marginTop:'2rem', marginBottom:'5rem', minHeight:'12rem'}}> 
                    <Typography 
                        variant="p"
                        sx={{
                            overflowWrap:'anywhere',
                            
                        }}
                    >   {post?.post?.content}
                    </Typography>
                                  
                </Box>
                
                    {
                        comments.comments?.length > 0
                        ?
                        comments?.comments?.map((comment) => {                            
                            return(
                                <Box 
                                    sx={{ 
                                        marginTop:'3rem',
                                        display:'flex',
                                        flexDirection:'column',
                                        gap:'1rem',
                                        borderInline:'2px solid black',
                                        width:'50%',
                                        marginInline:'auto',
                                        marginBottom:'4rem'

                                    }} 
                                    key={comment._id}>
                                    <Typography padding='1rem' borderBottom='1px solid' variant="p">By {comment.name}</Typography>
                                    <Typography padding='1rem' variant='p'>{comment.comment}</Typography>

                                </Box>
                            )

                        })
                        :
                        null
                    } 
                    <hr color="black"/>
                    <Box 
                        component='form'
                        onSubmit={postComment}
                        sx={{
                            
                            display:'flex',
                            flexDirection:'column',
                            marginTop:'3rem',
                            width:'70%',
                            marginInline:'auto',
                            
                        }}
                    >
                        <TextField
                            name='name'
                            label='Name'
                            variant='filled'
                            value={newComment.name}
                            onChange={(event) => changeValues(event)}


                        />
                        <TextField
                            name='comment'
                            label='Comment'
                            variant='filled'
                            value={newComment.comment}
                            onChange={(event) => changeValues(event)}


                        />

                        <Button 
                            type='submit'
                            sx={{
                                color:theme.palette.secondary.main,
                                border:`1px solid ${theme.palette.secondary.main}`,
                                transition:'all 700ms ease',
                                '&:hover':{
                                    color:'white',
                                    backgroundColor:theme.palette.secondary.main
                                }
                            }}
                        >   Comment
                        </Button>
                        {commentError ? <Typography marginTop='1rem' variant='subitle2'>{commentError}</Typography> : null}
                    </Box>     
            </Box>
            <Footer />
        </>
    )
}