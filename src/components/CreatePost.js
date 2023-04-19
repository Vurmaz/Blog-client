import React, { useState, useEffect, useRef } from "react";
import { getFetch } from "../api";
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box'
import Button from "@mui/material/Button";
import { theme } from "../assests/theme";
import Typography from "@mui/material/Typography";
import { Editor } from '@tinymce/tinymce-react';
import axios from "axios";
import Footer from "./Footer";
import { API, getCookie } from "../api";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
    const [post, setPost] = useState({title:'', content:'', authorId:getCookie(' id'), author:getCookie('username') })
    const [apiKey, setApikey] = useState(null)
    const [errorText, setErrorText] = useState(null)
    const editorRef = useRef(null)
    const navigate = useNavigate()

    useEffect(() => {
        getFetch(`${API}/dashboard/get`, setApikey, getCookie(' token'))
    }, [])

    const changeValues = (event) => {
        const name = event.target.name
        const value = event.target.value
        setPost({ ...post, [name] : value })        
    }
    
    const submitForm = async(event) => {
        event.preventDefault()
        try{
            const resp = await axios.post(`${API}/dashboard`, post, {headers:{Authorization:`Bearer ${getCookie(' token')}`}})
            await navigate('/dashboard')
        }
        catch(err){
            setErrorText(err.response.data.msg)
        }
    }

    return(
        <>
            <Box 
                component='form'
                onSubmit={submitForm}
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    width:'90%',
                    marginInline:'auto',
                    gap:'2rem',
                    marginTop:'4rem',
                    paddingBottom:'12rem',
                    [theme.breakpoints.up('sm')]:{
                        maxWidth:'50%'
                    }

                }}
            >
                <Typography variant='h4' marginInline='auto' color='primary'>Create a New Post</Typography>
                <hr width='100%' color={theme.palette.primary.main}/>
                <TextField 
                    name='title'
                    label='Title'
                    variant='filled'
                    value={post.title}
                    onChange={(event) => changeValues(event)}                                                    
                />
                <Editor
                    
                    apiKey={apiKey?.api}
                    value={post.content}
                    onEditorChange={(newValue, editor) => setPost({...post, content:newValue}) }
                    onInit={(evt, editor) => editorRef.current = editor}
                    initialValue="Please write your content here."
                    init={{
                        forced_root_block : "",
                        deprecation_warnings: false,
                        height: 500,
                        menubar: false,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                    toolbar: 'undo redo | formatselect | ' +
                        'bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                    />
                <Button 
                    type='submit'
                    sx={{
                        color:theme.palette.secondary.main,
                        background:'transparent',
                        border:`1px solid ${theme.palette.secondary.main}`,
                        width:'70%',
                        marginInline:'auto',
                        transition:'all 700ms ease',
                        '&:hover':{
                            color:'white',
                            background:theme.palette.secondary.main,
                            
                        }
                    }}
                >   POST
                </Button>
                {
                    errorText && <Typography marginInline='auto' variant="subtitle2">{errorText}</Typography>
                }
            </Box>
            <Footer />
        </>
    )
}