import React from 'react'
import { Typography,Stack } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from '@mui/material/Link';

const rows = [
  {title:"Department change",from:"Marketing",to:"Management",date:"Mar 29, 2024"},
  {title:"Employment type change",from:"Contractor",to:"Permanent",date:"Mar 29, 2024"},
  {title:"Position change",from:"CEO",to:"CTO",date:"Mar 29, 2024"}
  
]

{/* <Typography sx={{fontSize:'13px',fontWeight:'regular',color:'#475467',fontFamily:'Inter',marginBottom:'4px'}}>or drag and drop</Typography>
         */}

const JourneyMyinfo = () => {
  return (
   <>
     <TableContainer >
      <Table sx={{ width:"812px" }} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{fontSize:'13px',fontWeight:'600',color:'#344054',fontFamily:'Inter'}} >
                {row.title}
              </TableCell>
              <TableCell align="left" >
                <Stack direction="row" spacing={2}>
                  <Typography sx={{fontSize:'13px',fontWeight:'regular',color:'#344054',fontFamily:'Inter'}}>From:
                    <Typography display="inline" sx={{fontSize:'13px',fontWeight:'bold',color:'#344054',fontFamily:'Inter',marginLeft:"3px"}}>{row.from}</Typography>
                  </Typography>
                  <Typography sx={{fontSize:'13px',fontWeight:'regular',color:'#344054',fontFamily:'Inter'}}>To:
                    <Typography display="inline" sx={{fontSize:'13px',fontWeight:'bold',color:'#344054',fontFamily:'Inter',marginLeft:"3px"}}>{row.to}</Typography>
                  </Typography>
                </Stack>
                </TableCell>
              <TableCell  align="right" sx={{fontSize:'13px',fontWeight:'regular',color:'#344054',fontFamily:'Inter'}}>{row.date}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   </>
  )
}

export default JourneyMyinfo