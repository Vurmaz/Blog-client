import React, { useEffect, useState } from "react"
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

export default function Intro() {
    const img = 'https://images.pexels.com/photos/51343/old-letters-old-letter-handwriting-51343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    
    return(
        <>
            <Grid 
                container 
                spacing={1}
                sx={{
                    marginTop:'2rem',
                    padding:'2rem',
                }}
            >
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
                        src={img}    
                    />
                </Grid>
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
                    <Typography textAlign='center' variant='h5'>Consectetur, adipisci velit.</Typography>
                    <Typography padding='1rem' variant='p'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</Typography>
                </Grid>
            </Grid>
        </>
    )
}