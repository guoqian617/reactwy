import React, { Component } from 'react';
import { Tabs, WhiteSpace, SearchBar, Carousel, WingBlank } from 'antd-mobile';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import {idCheck} from "../store/action";
import { connect } from "react-redux";
import {IP} from './Ip'
class Mine extends Component {
    constructor(p){
super(p);
this.state={
songs:[]
}

    }
    render() {
        return (
         <div>
                <div className="sreach">
                    <div className="wenzim" style={{marginLeft:'.2rem'}}>更多</div>
                    <div className="wenzim">我的音乐</div>
                    <img className="picture" src={`${IP}/images/xian.png`} alt="" />
                </div>
                <Link to="/bendi" className="flexOne">
                    <div className="flexOne1">
                        <img style={{width:'1.6rem',height:'1.6rem',marginLeft:'.6rem'}} src={`${IP}/images/bendiyinyue.png`} alt=""/>
                        <span style={{alignSelf: 'center',marginLeft:'1.2rem',color:'black'}}>本地音乐</span>
                    </div>
                    <div>
                        <span style={{color:'gray'}}>{this.state.songs.length}&nbsp;></span>
                    </div>
                </Link>
                <Link to="/zuijin" className="flexOne">
                    <div className="flexOne1">
                        <img style={{width:'1.6rem',height:'1.6rem',marginLeft:'.6rem'}} src={`${IP}/images/zuijinbofang.png`} alt=""/>
                        <span style={{alignSelf: 'center',marginLeft:'1.2rem',color:'black'}}>最近播放</span>
                    </div>
                    <div>
                        <span style={{color:'gray'}}>{this.state.songs.length}&nbsp;></span>
                    </div>
                </Link>
                <Link to="/diantai" className="flexOne">
                    <div className="flexOne1">
                        <img style={{width:'1.6rem',height:'1.6rem',marginLeft:'.6rem'}} src={`${IP}/images/wodediantai.png`} alt=""/>
                        <span style={{alignSelf: 'center',marginLeft:'1.2rem',color:'black'}}>我的电台</span>
                    </div>
                    <div>
                        <span style={{color:'gray'}}>3&nbsp;></span>
                    </div>
                </Link>
                <Link to="/shoucang" className="flexOne">
                    <div className="flexOne1">
                        <img style={{width:'1.6rem',height:'1.6rem',marginLeft:'.6rem'}} src={`${IP}/images/wodeshoucang.png`} alt=""/>
                        <span style={{alignSelf: 'center',marginLeft:'1.2rem',color:'black'}}>我的收藏</span>
                    </div>
                    <div>
                        <span style={{color:'gray'}}>2&nbsp;></span>
                    </div>
                </Link>
                <Link to="gedanchunagjian" style={{color:'gray' ,backgroundColor:'lightgray'}}> <p>> 我创建的歌单（9）</p></Link>
                <Link to="gedanchunagjian" style={{color:'gray',backgroundColor:'lightgray'}}><p>> 我收藏的歌单（2）</p></Link>
        </div>
             )
             }
componentWillMount() {
axios.get(`${IP}/search`,{params:{}}).then((msg)=>{
console.log(msg.data)
this.setState({
    songs:msg.data
})
})
             
}
}

function fliter(state){
    console.log(state)
}
export default connect(fliter)(Mine);