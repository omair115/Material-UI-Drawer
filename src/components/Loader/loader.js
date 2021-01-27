import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';



class Loader extends Component {
    render() {
    
       const {myloading} = this.props
       console.log(myloading)
       if (!myloading) return null
        return (
            <div style={{backgroundColor:'grey', opacity:'0.5', position:'fixed', width:'100%', height:'100%', zIndex:2000}}>
            <CircularProgress color="inherit" style={{  position: 'relative',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,}}/>
            </div>      
        )
    }
}


const mapStateToProps = (state) => {
    return {
     myloading:state.user.loading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};




export default connect(mapStateToProps, mapDispatchToProps)(Loader)