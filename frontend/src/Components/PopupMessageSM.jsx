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


const PopupMessageSM = () => {
  return (
    <>
       <Box  disableGutters
             sx={{
              width: 343,
              marginLeft: 30,
              marginTop: 24,
              marginBottom: 24,
              paddingTop:'16px',
              paddingBottom:'16px',
              paddingRight:'16px',
              border: '1px solid #EAECF0',
              fontFamily:'Inter',
             
            }} >
        <Grid container>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={11}>
          <Stack>
            <Box sx={{ display: 'flex', justifyContent:'space-between'}}>
              <Stack>
              <Typography sx={{fontSize:'13px',fontWeight:'600',color:'#344054',fontFamily:'Inter',marginBottom:'4px'}}>We’ve just released a new feature</Typography>
              <Typography sx={{fontSize:'13px',fontWeight:'regular',color:'#475467',fontFamily:'Inter',marginBottom:'4px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.</Typography>
              <Stack disableGutters direction='row'>
              <Button sx={{textTransform: 'capitalize',color: '#475467',fontWeight:'bold',pl:0,fontSize:'13px',fontFamily:'Inter' }} s variant="text">Dismiss</Button>
              <Button sx={{textTransform: 'capitalize', color:'#6941C6', fontWeight:'bold',fontSize:'13px',fontFamily:'Inter'}}variant="text">View changes</Button>
              </Stack>
              </Stack>
              <CloseIcon sx={{color:'#98A2B3'}}/>
            </Box>
           
          </Stack>
        
        </Grid>
        </Grid>      
                   
       
      </Box>
    </>
  )
}

export default PopupMessageSM