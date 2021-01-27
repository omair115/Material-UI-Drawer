import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import  Snackbar  from '../Snackbar';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const DeleteModal = ({ open, close,title,description }) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [openbar,setOpen] = React.useState(false);

 

  const handleSave=()=>{
    setOpen(true);
  }



  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">{title}</h2>
      <p id="simple-modal-description">
       {description}
      </p>
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
      <Button variant="contained" color="secondary" onClick={close} style={{ marginLeft: '20px' }}>
        Cancel
      </Button>
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={close}
      >
        {body}
      </Modal>
      <Snackbar openbar={openbar} severity={"success"} onClose={() => setOpen(false)} message={'User Deleted Successfully'} autoHideDuration={2000}/>
     
    </div>
  );
}

export default DeleteModal