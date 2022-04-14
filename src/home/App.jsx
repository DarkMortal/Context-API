import { useState } from 'react';
import { TextField,Container } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import itachi from "./Itachi.jpg"

const style1={
  margin:"auto",
  textAlign:"center",
  fontFamily:"sand-serif"
},
container={
  margin:"auto",
  textAlign:"center",
  padding: "15px",
  backgroundColor:"transparent"
},
style2={
  display:"block",
  margin:"auto",
  height:"300px",
  width:"300px",
  borderRadius:"10px"
};

function App() {
  const [open, setOpen] = useState(false);
  const [text,changeText]=useState("Please enter your name");

  const handleClickOpen = () => {
    let txt=document.getElementById("outlined-basic").value;
    if(txt==="") changeText("Please enter your name");
    else changeText("Hello "+txt+", nice to meet you");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <>
      <h1 style={style1}><u>This page is made using React Matreial-UI</u></h1>
      <Container maxWidth="sm" style={container}>
      <TextField id="outlined-basic" label="Enter your name" variant="outlined" />
      <br/><br/>
      <Button variant="contained" onClick={handleClickOpen}>
        Say Hello
      </Button>
      <br/><br/>
      <img src={itachi} style={style2}></img>
      <br/><br/>
      <Pagination count={10} color="primary" shape="rounded" style={{justifyContent:"center",display:'flex'}}/>
      </Container>
      <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Hello from React Material-UI"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
    </>
  );
}

export default App;
