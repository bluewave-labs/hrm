import * as React from 'react';
import Box from '@mui/material/Box';
import { InputLabel, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ToggleButton from './ToggleBtn'
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';

// const commonStyles = {
//   bgcolor: 'background.paper',
//   m: 1,
//   border: 1,
//   width: '5rem',
//   height: '5rem',
// };

// export default function BorderColor() {
//   return (
//     <Box sx={{ display: 'flex', justifyContent: 'center' }}>
//       <Box sx={{ ...commonStyles, borderColor: 'primary.main' }} />
//       <Box sx={{ ...commonStyles, borderColor: 'secondary.main' }} />
//       <Box sx={{ ...commonStyles, borderColor: 'error.main' }} />
//       <Box sx={{ ...commonStyles, borderColor: 'grey.500' }} />
//       <Box sx={{ ...commonStyles, borderColor: 'text.primary' }} />
//     </Box>
//   );
// }


const SideBar = () => {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return (
    <Box
      sx={{
        height:811,
        width:460,
        marginTop:30,
        border: '1px solid #EAECF0',
      }}>
   

    
      
      <Box
        display="flex"
        alignItems="center"
        borderBottom={1}
        justifyContent={'space-between'}
        sx={{px:'20px', borderColor:'#D0D5DD', bgcolor: '#F8F9F8', width: '100' }}
        >
          <Typography 
            sx={{ 
              color:'#101828',
              fontWeight: 600, 
              fontSize:'20px',
              paddingLeft:'30px',
              paddingTop:'17px',
              paddingBottom:'19px',
              fontFamily:'Inter',
               }} >Settings</Typography>
          <IconButton >
            <CloseIcon />
          </IconButton>
      </Box>
     
      <Box pt={2} px={3}>
        <Typography 
          sx={{
            color:'#344054',
            mb:'50px',
            fontSize:'16px',
            fontWeight: 600, 
              }}>Main dashboard - first login tour</Typography>

      <Box mb={'20px'} >
        <Typography
          sx={{
            color:'#344054',
            fontSize:'13px',
            fontWeight: 600, 
              }}>Status</Typography>
        <ToggleButton/>
      </Box>
          <Typography sx={{color:'#344054',fontSize:'13px'}} mb={'10px'}>Tour name</Typography>
          <TextField size='small' sx = {{width:'100%',height:'34px',mb:'30px'}}/>
          <Typography sx={{color:'#344054',fontSize:'13px'}} mb={'10px'}>Description</Typography>
          <TextField size='small' sx = {{width:'100%',mb:'30px' }}/>
          <Typography sx={{color:'#344054',fontSize:'13px'}} mb={'10px'}>Page targeting</Typography>
          <Stack direction={'row'} spacing={2} >
            <FormControl sx={{width:'50%'}}>
            {/* <InputLabel  sx={{ color: '#667085', fontSize: '13px'}}>Equals to</InputLabel> */}
              <Select
                value={age}
                sx = {{width:'100%',height:'40px',fontSize:'13px',color:'#667085'}}
                onChange={handleChange}
                displayEmpty
                size='small'
                inputProps={{ 'aria-label': 'Without label' }}
                
                >
                <MenuItem sx={{color:'#667085',fontSize:'13px'}} disabled value="">Equals to</MenuItem>
                <MenuItem sx={{color:'#667085',fontSize:'13px'}} value={10}>Ten</MenuItem>
                <MenuItem sx={{color:'#667085',fontSize:'13px'}} value={20}>Twenty</MenuItem>
                <MenuItem sx={{color:'#667085',fontSize:'13px'}} value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <TextField sx = {{width:'50%'}} size='small'  label="/"variant="outlined"/>
          </Stack>
          <Typography sx = {{fontSize:'11px',mt:'8px',mb:'29px'}}>Only show when the page URL matches.</Typography>
         
        <Typography sx={{color:'#344054',fontSize:'13px'}} mb={'10px'}>Triggering frequency</Typography>
        <Select
                value={age}
                sx = {{width:'100%',height:'40px',fontSize:'13px',color:'#667085',mb:'30px'}}
                onChange={handleChange}
                displayEmpty
                size='small'
                inputProps={{ 'aria-label': 'Without label' }}
                  >
                <MenuItem disabled value="">Just once</MenuItem>
                <MenuItem sx={{color:'#667085',fontSize:'13px'}} value={10}>Ten</MenuItem>
                <MenuItem sx={{color:'#667085',fontSize:'13px'}} value={20}>Twenty</MenuItem>
                <MenuItem sx={{color:'#667085',fontSize:'13px'}} value={30}>Thirty</MenuItem>
              </Select>
       
     
        <Typography sx={{color:'#344054',fontSize:'13px'}} mb={'10px'}>Theme</Typography>
        <Select
                value={age}
                sx = {{width:'100%',height:'40px',fontSize:'13px',color:'#667085',mb:'30px'}}
                onChange={handleChange}
                displayEmpty
                size='small'
                inputProps={{ 'aria-label': 'Without label' }}
                MenuProps={{
                  anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'left',
                  },
                  transformOrigin: {
                    vertical: 'bottom',
                    horizontal: 'left',
                  },
                }}
                >
                <MenuItem sx={{color:'#667085',fontSize:'13px'}} disabled value="">Default theme</MenuItem>
                <MenuItem sx={{color:'#667085',fontSize:'13px'}} value={10}>Ten</MenuItem>
                <MenuItem sx={{color:'#667085',fontSize:'13px'}} value={20}>Twenty</MenuItem>
                <MenuItem sx={{color:'#667085',fontSize:'13px'}} value={30}>Thirty</MenuItem>
              </Select>
       
      </Box> 
        
     </Box>

  ) 
}

export default SideBar