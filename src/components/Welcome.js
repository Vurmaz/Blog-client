import React from "react"
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

export default function Welcome() {
    const img1 = 'https://images.pexels.com/photos/161366/book-book-pages-book-cover-font-161366.jpeg?auto=compress&cs=tinysrgb&w=600'
    return(
        <>
            <Grid 
                container
                spacing={1}
                sx={{
                    padding:'2rem',
                    marginTop:'2rem'
                }}
            >
                <Grid 
                    item 
                    xs={12} 
                    sm={6} 
                    sx={{
                        display:'flex', 
                        gap:'1rem', 
                        flexDirection:'column', 
                        justifyContent:'center',
                        alignItems:'center'
                    }}
                >
                    <Typography textAlign='center' variant='h5'>Neque porro quisquam est qui</Typography>
                    <Typography padding='1rem' variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box 
                        component='img'
                        sx={{
                            width:'100%',
                            minHeight:'300px',
                            maxHeight:'380px',
                            objectFit:'cover',
                            backgroundSize:'cover',
                            backgroundRepeat:'no-repeat',
                            backgroundPosition:'center center',
                            maxHeight:'420px',
                            borderRadius:'8px'                            
                        }}
                        src={img1}    
                    />
                </Grid>
            </Grid>
        </>
    )
}