import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Snackbar from '../Snackbar';
import TextField from '@material-ui/core/TextField';
import Slide from '@material-ui/core/Slide';
import { hideLoader, showLoader } from '../../redux/general/actions';
import {connect} from 'react-redux'
import Loader from '../Loader/loader';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
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

const AddNewUserModal = ({ open, close, title }) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [openbar, setOpen] = React.useState(false);



  const handleSave = () => {
    console.log('im in save')
    //console.log('props dipatch',this.props)
   
   
   setOpen(true);
  }



  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">{title}</h2>
      <TextField id="outlined-basic" label="Name" variant="outlined" style={{ marginBottom: '10px' }} />
      <TextField id="outlined-basic" label="Email" variant="outlined" style={{ marginBottom: '10px' }} />
      <TextField id="outlined-basic" label="Designation" variant="outlined" style={{ marginBottom: '10px' }} />
      <div >
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
      <span style={{paddingLeft:'10px'}}/>
      <Button variant="contained" color="secondary" onClick={close}>
        Cancel
      </Button>
     </div>
    </div>
  );

  return (
    <div>
      <Loader/>
      <Modal
        open={open}
        onClose={close}
        TransitionComponent={Transition}

      >
        {body}
      </Modal>
      <Snackbar openbar={openbar} severity={"success"} onClose={() => setOpen(false)} message={'User Added Successfully'} autoHideDuration={2000} />

    </div>
  );
}

const mapStateToProps = (state) => {
  return{
   
  }
};

 const mapDispatchToProps =(dispatch)=> {
  return {
     newshowLoader:()=>{dispatch(showLoader())},
     newhideLoader:()=>{dispatch(hideLoader())}
      }
 };

export default connect(mapStateToProps,mapDispatchToProps)(AddNewUserModal)