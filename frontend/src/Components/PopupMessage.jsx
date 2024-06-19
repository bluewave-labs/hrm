import React from 'react'
import { Stack,Typography,TextField,Box, } from '@mui/material'
import Grid from '@mui/material/Grid';

import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DeleteIcon from '@mui/icons-material/Delete';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Button from '@mui/material/Button';


const PopupMessage = () => {
  return (
    <>
       <Box  disableGutters
             sx={{
              width: 812,
              height:108,
              marginLeft: 30,
              marginTop: 24,
              marginBottom: 24,
              padding:'20px',
              border: '1px solid #EAECF0',
              fontFamily:'Inter',
              flexGrow:1
            }}>
        <Grid container>
        <Grid item xs={1}>
          <InfoOutlinedIcon/>
        </Grid>
        <Grid item xs={11}>
          <Stack>
            <Box sx={{ display: 'flex', justifyContent:'space-between'}}>
              <Typography sx={{fontSize:'13px',fontWeight:'600',color:'#344054',fontFamily:'Inter'}}>We’ve just released a new feature</Typography>
              <CloseIcon sx={{color:'#98A2B3'}}/>
            </Box>
            <Typography sx={{fontSize:'13px',fontWeight:'regular',color:'#475467',fontFamily:'Inter'}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.</Typography>
            <Stack disableGutters direction='row' sx={{paddingLeft:0,marginLeft:0}}>
              <Button sx={{paddingLeft:0,textTransform: 'capitalize',fontSize:'13px',fontFamily:'Inter', color: '#475467',fontWeight:'600'}} s variant="text">Dismiss</Button>
              <Button sx={{textTransform: 'capitalize',fontSize:'13px',fontFamly:'Inter', color:'#6941C6', fontWeight:'600'}}variant="text">View changes</Button>
            </Stack>
          </Stack>
        
        </Grid>
        </Grid>      
                   
       
      </Box>
    </>
   
    
  )
}

export default PopupMessage