import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import './Login.scss';
import '../../styles/common.scss';
import * as actions from "../../store/actions";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:'',
            password:'',
            isShowPassword:false
        }
    }
    handleOnchangInputusername = (event)=>{
        this.setState({
            username:event.target.value,
        })
    }
    handleOnchangInputpassword = (event)=>{
        this.setState({
            password: event.target.value
        })
    }
    handleLogin = ()=>{
        console.log('username'+ this.state.username);
        console.log('password'+ this.state.password)
    }
    showPassword =()=>{
        this.setState({
            isShowPassword : !this.state.isShowPassword,
        })
    }


    render() {
        return (
           <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-login'>Login</div>
                        <div className='col-12 form-group login-input'>
                            <label>Username: </label>
                            <input type='text' className='form-control'placeholder='Enter your username'  value={this.state.username} onChange = {(event)=>this.handleOnchangInputusername(event)} />
                        </div>
                        <div className='col-12 form-group  login-input'>
                        <label>Password: </label>
                            <div className='input-password'>
                            <input type={this.state.isShowPassword ?'text':'password'} className='form-control' placeholder='Enter your password' value={this.state.password} onChange={(event)=>this.handleOnchangInputpassword(event)}/>
                            <span onClick={()=>this.showPassword()}>
                            <i className={this.state.isShowPassword?'far fa-eye':'far fa-eye-slash'}></i>
                            </span>
                           
                            </div>

                        </div>
                       <div className='col-12 mt-4'>
                            <button className='btn-login btn-text-login' onClick={()=>{this.handleLogin()}}>Login</button>
                       </div>
                        <div className='col-12'>
                            <span className='forgot-password'>Forgot your password?</span>
                        </div>
                        <div className='col-12 text-center mt-5'>
                            <span className='text-orther-login'>Or Login with:</span>
                          
                        </div>
                        <div className='col-12 social-login'>
                            <i className='fab fa-google-plus-g google'></i>
                           <i className='fab fa-facebook-f facebook'></i>
                        </div>
                    </div>
                </div>

           </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        lang: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
