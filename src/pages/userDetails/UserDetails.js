import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import Modal from '../../components/Modals/DeleteUserModal';
import ModalAdd from '../../components/Modals/AddNewUser'
import ModalEdit from '../../components/Modals/EditUserModal'
import {connect} from 'react-redux';
import {viewUser} from '../../redux/users/action'
import Loader from '../../components/Loader/loader'


class GenericTables extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            openAddModal: false,
            openEditModal: false
        }
    }
  componentDidMount(){
       this.props.viewnewUser()
  }
    handleChange = (event) => {
        this.setState({ page: event.target.value })
    }
    handleDelete = () => {
        this.setState({ open: !this.state.open })

    }
    handleClose = () => {
        this.setState({ open: !this.state.open })
    }
    handleAdd = () => {
        this.setState({ openAddModal: !this.state.openAddModal })
    }

    handleCloseAddModal = () => {
        this.setState({ openAddModal: !this.state.openAddModal })
    }
    handleEdituser = () => {
        this.setState({ openEditModal: !this.state.openEditModal })
    }
    handleCloseEditModal = () => {
         this.setState({ openEditModal: !this.state.openEditModal })
    }

    render() {

        return (
          
            <div>
                {this.props.loading === true ? <Loader/>:
                 <TableContainer component={Paper}>
                    <Button variant="contained" color="primary"
                        align="right" onClick={() => this.handleAdd()}
                        style={{ float: 'right', marginTop: '20px', marginRight: '20px' }}>
                        ADD NEW USER</Button>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ fontWeight: 'bold' }}>NAME</TableCell>
                                <TableCell align="right" style={{ fontWeight: 'bold' }}>USERNAME</TableCell>
                                <TableCell align="right" style={{ fontWeight: 'bold' }}>E-MAIL</TableCell>
                                <TableCell align="right" style={{ fontWeight: 'bold' }}>SUITE</TableCell>
                                <TableCell align="right" style={{ fontWeight: 'bold' }}>WEBSITE</TableCell>
                                <TableCell align="right" style={{ fontWeight: 'bold' }}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {this.props.viewUser.map((row, index) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                   <TableCell align="right">{row.username}</TableCell>
                                    <TableCell align="right">{row.email}</TableCell>
                                    <TableCell align="right">{row.address.suite}</TableCell>
                                    <TableCell align="right">{row.website}</TableCell> 
                                    <TableCell align="right">
                                        <DeleteIcon variant="contained" color="secondary"
                                            onClick={() => this.handleDelete(index)} />
                                        <span style={{ marginLeft: '20px' }} />
                                        <EditIcon variant="contained" color="primary"
                                            onClick={() => this.handleEdituser()} />
                                    </TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </TableContainer> 
            }
                <Modal
                    open={this.state.open}
                    close={this.handleClose}
                    title={'Delete User'}
                    description={'Do You Want To Delete The User Permanently'}

                >
                </Modal>

                <ModalAdd
                    open={this.state.openAddModal}
                    close={this.handleCloseAddModal}
                    title={'Add New User'}
                />

                <ModalEdit
                    open={this.state.openEditModal}
                    close={this.handleCloseEditModal}
                    title={'Edit User'}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
      viewUser:state.user.viewUser,
      loading:state.user.loading
    }
  };
  
   const mapDispatchToProps =(dispatch)=> {
    return {
        viewnewUser:()=>{dispatch(viewUser())},
        }
   };
  

export default  connect(mapStateToProps,mapDispatchToProps)(GenericTables);