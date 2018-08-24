import React, { Component } from 'react';
// import { Upload, message,Icon } from 'antd';
import { Link } from 'react-router-dom';
import {IP} from './Ip'
import { InputItem } from 'antd-mobile';
import { Button, WhiteSpace} from 'antd-mobile';
import axios from 'axios';
class Reg extends Component {
  constructor(p) {
        super(p);
        this.state = {
           
          
        }
    }
render() {
        return (
            <div>
                <div>
                <Link to="/login" >
                    <img style={{width:'2rem',marginRight:'3rem'}} src={`${IP}/images/xiaoyu1.png`} alt="" />
                </Link>
                    <span style={{marginLeft: '4rem',color:'darkslategray',fontSize: '1.6rem'}}>账号注册</span>
                </div>
                <InputItem
                        // name="uname"
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
 <Button style={{marginTop: '2rem'}} type="warning" onClick={this.Reg.bind(this)}>注册</Button>
             <Link to="/login" >
                  <p>已有账号？点击登录</p>
                </Link>
            </div>
        )
    }
    Reg() {
        axios.get(`${IP}/reg`,{params:{
            uname:this.refs.uname.state.value,
            upwd:this.refs.upwd.state.value
        }}).then((msg)=>{
            window.location="http://127.0.0.1:9999/#/login"
        })
    }
}
export default Reg;