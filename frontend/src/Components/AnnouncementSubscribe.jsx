import React from 'react'
import Box from '@mui/material/Box';
import { Typography,TextField,Button,Stack } from '@mui/material';
import { styled } from '@mui/material/styles';



const AnnouncementSubscribe = () => {
  // const OutlinedButton = styled(Button)(({ theme }) => ({
  //   color: theme.palette.getContrastText('#D0D5DD'),
  //   borderColor:"#D0D5DD",
  //   backgroundColor: '#FFFFFF',
  //   '&:hover': {
  //     backgroundColor: '#D0D5DD',
  //   },
  // }));

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#7F56D9'),
    backgroundColor: '#7F56D9',
    '&:hover': {
      backgroundColor: '#7F56D9',
    },
  }));
  

  return (
    <>
      <Box  disableGutters
            sx={{
              width: 768,
              marginLeft: 30,
              marginTop: 24,
              marginBottom: 24,
              padding:'24px',
              border: '1px solid #EAECF0',
              fontFamily:'Inter'
            }}
            >
            
        <Stack spacing={2}>
          <Typography sx={{fontSize:'18px',fontWeight:'600',color:'#101828',fontFamily:'Inter'}}>We’ve just released a new update!</Typography>
          <Typography sx={{fontSize:'13px',fontWeight:'regular',color:'#475467',fontFamily:'Inter'}}>Check out the all new dashboard view. Pages and now load faster.</Typography>
          <Typography sx={{fontSize:'13px',fontWeight:'600',color:'#344054',fontFamily:'Inter'}}>Subscribe to updates</Typography>
          <Stack spacing={2} direction="row">
            <TextField placeholder='olivia@untitledui.com' size='small' sx = {{width:'40%',mb:'30px'}}/>
            <ColorButton sx={{ textTransform: 'capitalize',fontSize:'13px',fontFamily:'Inter',fontWeight:'regular' }} variant="contained">Subscribe</ColorButton>
          </Stack>
        </Stack>
       
      </Box>
    </>
  )
    
}

export default AnnouncementSubscribe