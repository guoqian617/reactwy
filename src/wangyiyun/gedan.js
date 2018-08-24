import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
// import {Link} from 'react-router-dom';
// import { Icon, Grid } from 'antd-mobile';
import { connect } from "react-redux";
import {IP} from './Ip'
// let IP='http://127.0.0.1:3000';
class Gedan extends Component{
	constructor(p){
		super(p);
		this.state={
			idCheck:'',
			list:[],
			length:'',
			singName:[],
			picture:'',
			touxiang:''
			}
}
render() {
		return (
		<div>
			<div className="headerAll" style={{backgroundColor:"slategray"}}>
				<div className="header">
					<Link to="/main">
					<img className="head" src={`${IP}/images/xiaoyu1.png`} alt=""/>
					</Link>
					<p style={{fontSize:"1rem"}}>歌单</p>
					<img className="head" src={`${IP}/images/shutiao.png`} alt=""/>
				</div>	
				<div style={{display:'flex'}}>	
					<img style={{marginLeft:"1rem"}} src={`${IP}${this.state.picture}`} alt=""/>
					<div style={{marginLeft:"5rem",marginTop:'1rem'}}>
						<p>{this.props.title}</p>
						<img style={{width:'2rem'}} src={`${IP}${this.state.touxiang}`} alt=""/>
						<span>bjhjlkl; ＞</span>
					</div>
				</div>
				<div className="guding">
					<div>
						<img src={`${IP}/images/wenjian.png`} alt="" />
						<p>1234</p>
					</div>
					<div>
						<img src={`${IP}/images/liyan2.png`} alt="" />
						<p>34</p>
					</div>
					<div>
						<img src={`${IP}/images/pinlun.png`} alt="" />
						<p>17</p>
					</div>
					<div>
						<img src={`${IP}/images/xiazai1.png`} alt="" />
						<p>下载</p>
					</div>
				</div>
			</div>
			<div style={{display:"flex", justifyContent: 'space-between'}}>
				<div>
					<img style={{width:"1.4rem",paddingTop:".5rem"}} src={`${IP}/images/bofang.png`} alt="" />
					<span style={{marginLeft:".6rem"}}>播放全部(共6首)</span>
					{/* <span></span> */}
				</div>
				<div style={{marginRight:'1rem'}}>
					<img style={{width:"1rem",paddingTop:".5rem"}} src={`${IP}/images/duoxuan.png`} alt="" />
					<span>多选</span>
				</div>
			</div>
			<ul style={{height:'40rem'}}>
				{
				this.state.list.map((item)=>{
				return <li style={{listStyleType:'decimal'}} key={item._id} onClick={this.singOne.bind(this,item._id)}>
						<Link to="/sing"  style={{display:"flex",justifyContent:' space-between'}}>
							<div style={{marginBottom:'1.6rem'}}>
								<p style={{margin:'0',marginBottom:'.8rem',color:'black'}}>{item.songName}</p>
								<span style={{color:'darkslategray',fontSize:'.8rem'}}>{item.singer}-{item.special}</span>
								{/* <span></span> */}
							</div>
							<div style={{marginRight:"2rem"}}>
							<img style={{width:"1rem"}} src={`${IP}/images/bofang.png`} alt="" />
							<img style={{width:"1rem",marginLeft:'.6rem'}} src={`${IP}/images/dian.png`} alt="" />
							</div>
						</Link>
					</li>
					})
				}
			</ul>
		
		</div>
		)
	}
singOne(id){
	this.props.dispatch({
	type: 'SING',
	singId:id
})
	}
componentWillMount(){
	//联合查询
		axios.post(`${IP}/lianhe`,{
			_id:this.props.idCheck
		}).then((msg)=>{
			// console.log(msg.data);
		this.setState({
				list:msg.data.songs,
				picture:msg.data.picture,
				touxiang:msg.data.touxiang,
				// singName:msg.data.songName,
			})
			this.props.dispatch({
				type: 'SONGS',
				songs:msg.data.songs
			})
		})
		// console.log(this.state.list)
	}
}

//得到songs在singList中的id
function filter(state) {
	// console.log(state)
	return {title:state.liList[1],
			idCheck: state.liList[0]};
  }
export default connect(filter)(Gedan);