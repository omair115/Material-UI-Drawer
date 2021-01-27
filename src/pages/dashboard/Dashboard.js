import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Pie } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { Radar } from 'react-chartjs-2';
import {Data} from './Config'
import {Data1} from './Config'
import {Options1} from './Config'
import {Data2} from './Config'
import {Options2} from './Config'
import {Data3} from './Config'
import {Options3} from './Config'
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:'100px',
    width: '70%',
    display: 'block',
    marginRight: 'auto',
    marginLeft: 'auto'

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));

const AutoGrid=()=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Grid container spacing={3} >

        <Grid item  xs={12} sm={12} md={12} lg={4}>
          <Paper className={classes.paper}>    
          <h2 style={{ textAlign:'center' }}>Status Of The Users</h2>
           <Pie data={Data} />
        </Paper>
        </Grid>


        <Grid item  xs={12} sm={12} md={12}  lg={4}>
          <Paper className={classes.paper}>
            <h2 style={{textAlign:'center' }}>Activities Of Users</h2>
            <Line data={Data1} options={Options1} />
          </Paper>
        </Grid>


        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Paper className={classes.paper}>
         <h2 style={{textAlign:'center' }}>Status Of The Users</h2>
         <Pie data={Data}/>
          </Paper>
        </Grid>
      </Grid>


      <Grid container spacing={3} >

        <Grid item  xs={12} sm={12} md={12} lg={6}>
          <Paper className={classes.paper}>
          <h2 style={{textAlign:'center' }}>InActive Users</h2>
          <Bar data={Data2} options={Options2}/> 
          </Paper>
        </Grid>

        <Grid item  xs={12} sm={12} md={12} lg={6} >
          <Paper className={classes.paper} >
          <h2 style={{textAlign:'center' }}>Active Users</h2>
          <Radar data={Data3} options={Options3}  />
          </Paper>
        </Grid>
        
      </Grid>

 </div>
    
  );
}

export default AutoGrid