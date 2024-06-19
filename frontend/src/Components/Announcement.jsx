import React from 'react'
import Box from '@mui/material/Box';
import { Typography,TextField,Button,Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const Announcement = () => {


  const OutlinedButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#D0D5DD'),
    borderColor:"#D0D5DD",
    backgroundColor: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#D0D5DD',
    },
  }));

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
              height: 160,
              width: 768,
              marginLeft: 30,
              marginTop: 30,
              border: '1px solid #EAECF0',
              pt: '20px',
              px: '20px',
              fontFamily:'Inter'
            }}>
        <Stack spacing={2}>
          <Typography sx={{fontSize:'16px',fontWeight:'600',color:'#101828',fontFamily:'Inter'}}>We’ve just released a new update!</Typography>
          <Typography sx={{fontSize:'13px',fontWeight:'regular',color:'#475467',fontFamily:'Inter'}}>Check out the all new dashboard view. Pages and now load faster.</Typography>
          <Stack spacing={2} direction="row">
            <OutlinedButton sx={{ textTransform: 'capitalize',fontSize:'13px',fontFamily:'Inter',fontWeight:'regular' }} variant="outlined">Dismiss</OutlinedButton>
            <ColorButton sx={{ textTransform: 'capitalize', fontSize:'13px',fontFamily:'Inter',fontWeight:'regular' }} variant="contained">Changelog</ColorButton>
          </Stack>
        </Stack>
       
      </Box>
    </>
  )
}

export default Announcement