import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme)=>({
    root: {
      width: '40%',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop:'100px'
    },
  
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    card:{
      marginLeft: '30px',
    },
    textFieldSpacing: {
      '& > *': {
       margin: theme.spacing(1),
        // width: '25ch',
      }
  },
  
  textFeildWidth:{
    width:'80%',
   
  },

  //table styles
  addButton:{
    float:'right',
    marginTop:'20px',
    marginRight:'20px'
  }
  }));