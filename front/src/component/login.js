import React, { Component } from 'react';
import '../css/login.scss';
import $ from 'jquery';

class Login extends Component{
    checkName(){
        var txt = this.refs.txt.value;
        var patternLoginPhone = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/;
        if(patternLoginPhone.test(txt)){
            // $('.check').css('display','block');
            $('.error').html('');
        }else{
            // $('.check').css('display','none');
            $('.error').html('手机号格式错误');
        }
    }
    checkPassword(){
        var psw = this.refs.psw.value;
        var patternLoginPassword = /^\S{6,16}$/
        if(patternLoginPassword.test(psw)){
            $('.error').html('');
        }else{
            $('.error').html('密码由6到16位组成');
        }

    }
   
    login(){
        var patternLoginPhone = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/;
        var patternLoginPassword = /^\S{6,16}$/
        var txt = this.refs.txt.value;
        var psw = this.refs.psw.value;
        if(patternLoginPhone.test(txt) && patternLoginPassword.test(psw)){
            $.get('http://10.20.152.6:8080/users?name='+txt+'&password='+psw,function(res){
                var res = res;
                $('.error').html(res.msg);
                if(res.code=='0'||res.code=='1'){
                    window.location.href = "/success";
                }
            })
            // window.location.href = "/success"
        }else{
            $('.error').html('用户名密码格式不正确');
        }
    }

    render(){
        return (
            <div>
                <div className="Users">
                    <div className="form">
                        <div className="user-name">
                            <input type="text" placeholder="输入手机号/邮箱" ref="txt" onKeyUp={this.checkName.bind(this)} />
                            <div className="input-bg"></div>
                        </div>
                        <div className="user-psw">
                            <input type="password" placeholder="输入密码/验证码" ref="psw" onKeyUp={this.checkPassword.bind(this)} />
                            <div className="input-bg"></div>
                        </div>
                        <span className="error"></span>
                        <button className="login-btn" onClick={this.login.bind(this)}>登录</button>
                    </div>
                </div>
            </div>
        )
    }
}



export default Login;