import React,{useEffect,useState} from 'react'
import Box from '@mui/material/Box';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { Typography,Stack } from '@mui/material';
import Link from '@mui/material/Link';
import CircularProgress, { circularProgressClasses} from '@mui/material/CircularProgress';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Input from '@mui/material/Input';
import Dropzone from "dropzone";
import axios from 'axios';
import '../App.css';

const rows = [
  {name:"Offer letter",date:"Jan 4, 2022"},
  {name:"Vacation types",date:"Jan 4, 2022"},
  {name:"Offer letter2",date:"Jan 2, 2022"}
]




const DocumentMyinfo = () => {

  const fileInputRef = React.createRef();
  const [progress,setProgress] = useState(0);
  const [dragOver, setDragOver] = useState(false);
  const [currentfile, setCurrentFile] = useState('')
  const [filesize, setFileSize] = useState(0)
  const [filelist, setFileList] = useState([]);
  const [uploaded, setUploaded] = useState(false)

  const handleUpload = async () => {
    if (uploaded) {
      clearFileInput();
      return
    }
    try {
      const response = await axios.post(
        "http://localhost:3000/",
        filelist, 
        {
          onUploadProgress: (progressEvent) => { 
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setProgress(percentCompleted)
          }
        }
      );
      
    }
    catch (error) {
      setUploaded(false)
    }
  }

// Add uploaded file to an Array
  const addFile = (newFile) => {
    setFileList((prevFiles) => [...prevFiles, newFile] ) 
  }

  const formatDate = (inputDate) => {
    const [month, day, year] = inputDate.split('/').map(Number);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const formattedMonth = monthNames[month-1];
    return `${formattedMonth} ${day}, ${year}`;

  }

  // Handle file change event
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if(file) {
      const name = file.name.split('.')[0]
      const size = Math.round(file.size/1000000)
      const date = new Date();
      const newdate = date.toLocaleDateString();
      const uploadedDate = formatDate(newdate)

      setCurrentFile(file.name.split('.')[0])
      setFileSize(size)
      addFile({
        name: name,
        size: size,
        uploadedDate: uploadedDate
      })
    }
    console.log(filelist)
    handleUpload()
  
  }
 // Trigger file input 
  const handleClick = () => {
    fileInputRef.current.click()
  }

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true)
  }
  const handleDragLeave = () => {
    setDragOver(false)
  }

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false)
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      fileInputRef.current.files = files;
      handleFileChange({target:{files}})
    }
  }

// Function to clear file state
const clearFileInput = () => {
  fileInputRef.current.value ="";
  setProgress(0);
}

const handleDelete = (index) => {
  const newFilelist = filelist.filter((_, i) => i !== index);
  // Update the state with the new array
  setFileList(newFilelist);
}
// Function to handle file upload



  return (
   <>
  
  <div 
    onDragOver={handleDragOver}
    onDragLeave={handleDragLeave}
    onDrop={handleDrop} >
  <Box
      height={126}
      width={812}
      my={4}
      display="flex"
      alignItems="center"
      justifyContent={"center"}
      boxShadow={4}
      gap={4}
      p={2}
      sx={{ border: '2px solid #7F56D9',borderRadius:'12px' }}
      
    >
     
      <Stack  
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={1}
        sx={{ height: '100vh' }}
      >
        <CloudUploadOutlinedIcon
          sx={{border:'1px solid #EAECF0',borderRadius:'8px'}}/>
        <Stack direction='row'>

  
        <input
          type="file"
          ref={fileInputRef}
          className="hidden-input"
           accept=".svg, .png, .jpg, .jpeg, .gif"
          onChange={handleFileChange}
        />
        <Link
            onClick={handleClick}
            type='file'
            component="button"
            underline="none"
            sx={{fontSize:'14px',fontWeight:'600',color:'#6941C6',fontFamily:'Inter',marginBottom:'4px',marginRight:'2px'}}
            >
            Click to upload
          </Link>
      
        <Typography sx={{fontSize:'13px',fontWeight:'regular',color:'#475467',fontFamily:'Inter',marginBottom:'4px'}}>or drag and drop</Typography>
        
        </Stack>
        <Typography sx={{fontSize:'12px',fontWeight:'regular',color:'#475467',fontFamily:'Inter',marginBottom:'4px'}}>SVG, PNG, JPG or GIF (max. 800x400px)</Typography>
        
      </Stack>
    </Box>
  </div>
  

    
    <Box
      height={72}
      width={812}
      my={4}
      display="flex"
      alignItems="center"
      justifyContent={"space-between"}
      gap={4}
      p={2}
      
      sx={{ border: '2px solid #EAECF0',borderRadius:'12px', background: `linear-gradient(to right, #F9FAFB ${progress}%, transparent ${progress}%), transparent 100%` }}
    >
      <Stack>
        <Typography sx={{fontSize:'14px',fontWeight:'medium',color:'#344054',fontFamily:'Inter',marginBottom:'4px'}}>{currentfile}</Typography>
        <Typography sx={{fontSize:'13px',fontWeight:'regular',color:'#475467',fontFamily:'Inter',marginBottom:'4px'}}>{filesize}MB – {progress}% uploaded</Typography>
      </Stack>
      <Stack sx={{ position: 'relative' }}>
        <CircularProgress
          variant="determinate"
          sx={{
            color: "#F2F4F7"
          }}
          size={40}
          thickness={4}
          value={100}
        />
        <CircularProgress
          variant="determinate"
          disableShrink
          sx={{
            color: "#7F56D9",
            position: 'absolute',
            left: 0,
            [`& .${circularProgressClasses.circle}`]: {
              strokeLinecap: 'round',
            },
          }}
          value={progress}
          size={40}
          thickness={4}
        
        />
     
      </Stack>
    </Box>
    <TableContainer >
      <Table sx={{ width:"812px" }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{backgroundColor:"#F9FAFB"}}>
            <TableCell sx={{fontSize:'12px',fontWeight:'medium',color:'#475467',fontFamily:'Inter'}}>File name</TableCell>
            <TableCell sx={{fontSize:'12px',fontWeight:'medium',color:'#475467',fontFamily:'Inter'}} align="left">Date uploaded</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filelist.map((file,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{fontSize:'14px',fontWeight:'medium',color:'#101828',fontFamily:'Inter'}} >
                {file.name}
              </TableCell>
              <TableCell align="left" sx={{fontSize:'13px',fontWeight:'regular',color:'#475467',fontFamily:'Inter'}}>{file.uploadedDate}</TableCell>
              <TableCell align="right">
                <Stack direction="row" display="flex" justifyContent="right">
                  <Link
                    component="button"
                    underline="none"
                    onClick={() => handleDelete(index)}
                    sx={{fontSize:'14px',fontWeight:'600',color:'#475467',fontFamily:'Inter',marginBottom:'4px',marginRight:'8px'}}
                    >Delete
                  </Link>
                  <Link
                    component="button"
                    underline="none"
                    onClick={() => {alert("hello");}}
                    sx={{fontSize:'14px',fontWeight:'600',color:'#6941C6',fontFamily:'Inter',marginBottom:'4px',marginRight:'2px'}}
                    >Edit
                  </Link>
                </Stack>
              </TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   </>
  )
}

export default DocumentMyinfo

// https://www.youtube.com/watch?v=edR6Az7shv8