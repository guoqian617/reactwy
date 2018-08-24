import React, { Component } from 'react';
import { InputItem } from 'antd-mobile';
import { Button, WhiteSpace} from 'antd-mobile';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { createForm } from 'rc-form';
import { IP } from './Ip'
class Login extends Component {
  render() {
        return (
            <div>
                <div>
                <Link to="/main" >
                    <img style={{width:'2rem',marginRight:'3rem'}} src={`${IP}/images/xiaoyu1.png`} alt="" />
                </Link>
                    <span style={{marginLeft: '4rem',color:'darkslategray',fontSize: '1.6rem'}}>账号登录</span>
                </div>
                <InputItem
                        ref="uname"
                        placeholder="请输入用户名"
                        // ref={el => this.labelFocusInst = el}
                    ><div onClick={() => this.labelFocusInst.focus()}>用户名</div>
                    </InputItem>
                <InputItem
                    ref="upwd"
                    placeholder="请输入密码"
                    // ref={el => this.labelFocusInst = el}
                ><div onClick={() => this.labelFocusInst.focus()}>密码</div>
                </InputItem>
                <p ref="p" className="none" style={{color:'red',textAlign:'center'}}>账号、密码有误</p>
             <Button onClick={this.login.bind(this)} style={{marginTop: '2rem'}} type="warning">登录</Button>
             <Link to="/reg" >
                  <p>没有账号？点击注册</p>
                </Link>
            </div>
        )
    }
    login() {
        axios.get(`${IP}/login`,{params:{
            uname:this.refs.uname.state.value,
            upwd:this.refs.upwd.state.value
        }}).then((msg)=>{
            console.log(msg.data)
            if(msg.data.length==1){
               window.location="http://127.0.0.1:9999/#/main";  
            }else{
                this.refs.p.className="";
            }
    })
    }
}
export default Login;