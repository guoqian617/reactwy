import React, { Component } from 'react';
import { InputItem } from 'antd-mobile';
import { Button, WhiteSpace} from 'antd-mobile';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { createForm } from 'rc-form';
import { IP } from './Ip'
class Zhanghao extends Component {
  render() {
        return (
            <div>
                  <div className="sreach">
                    <div className="wenzim"style={{marginLeft:'11rem'}}>账号</div>
                    <img className="picture" src={`${IP}/images/xian.png`} alt="" />
                </div>
                    <div style={{display:'flex'}}>
                        <img style={{width:'5rem',height:' 5rem'}} src={`${IP}/images/gedan2.jpg`} alt=""/>
                        <p style={{padding:'.6rem',border:".01rem solid red",borderRadius:'1rem'}}>签到</p>
                    </div>
                </div>
        )
    }
}
export default Zhanghao;