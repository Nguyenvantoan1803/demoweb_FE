import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UserManage.scss'
import {handleUser} from '../../services/userService';
import ModalComponents from './Modal'
class UserManage extends Component {

    constructor(props){
        super(props);
        this.state={
            arrUser:[],
            isOpenModelUser:false
        }
    }
    state = {

    }

    async componentDidMount() {
        let response = await handleUser('ALL');
        if(response && response.errorCode===0){
            this.setState({
                userAll:response.user
            })
        }
    }
    addnewuser=()=>{
        this.setState({
            isOpenModelUser:true,
        })
    }
    toggleUserModel = ()=>{
        this.setState({
            isOpenModelUser: !this.state.isOpenModelUser,
        })
    }


    render() {
        let arrUser=this.state.userAll
        return (
            <div className="user-container">
                <ModalComponents
                show = {this.state.isOpenModelUser}
                open={this.toggleUserModel}
                />
                <div className="title text-center">User list</div>
                <button className='btn-add-user'onClick={()=>{this.addnewuser()}}>
                <i className="fas fa-user-plus"></i>
                </button>
                <div className='table mt-3 mx-1'>
                <table id="customers">
                    <tr>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Phone Numbers</th>
                        <th>Gender</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                    {
                        arrUser && arrUser.map((item,index)=>{
                            return <>
                            <tr>
                            <td>{item.email}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.address}</td>
                            <td>{item.phonenumber}</td>
                            <td>{item.gender}</td>
                            <td>{item.roleId}</td>
                            <td>
                                <button className='btn-edit'><i className="fas fa-pencil-alt"></i></button>
                                <button className='btn-delete'><i class="fas fa-user-times"></i></button>
                            </td>
                        </tr>
                            </>
                        })
                    }
                    </table>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
