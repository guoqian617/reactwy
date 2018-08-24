import React, { Component } from 'react';
// import { TabBar,Tabs, WhiteSpace,SearchBar, Carousel, WingBlank } from 'antd-mobile';
// import axios from 'axios';
import { Link } from 'react-router-dom';
// import {idCheck} from "../store/action";
// import { connect } from "react-redux";
// import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import Mainzj from './mainzijian';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import {IP} from './Ip'
// import Gedan from './gedan'
// let IP='http://127.0.0.1:3000';

class Main extends Component {

  // constructor(p){
  //   super(p);
  //   this.state={
  //     tabs :[
  //       { title: '音乐' },
  //       { title: '视频' },
  //       { title: '电台' },
  //     ],
  //     data: ['lunbo1', 'lunbo2', 'lunbo3', 'lunbo4', 'lunbo5'],
  //     imgHeight: 176,
  //     list:[],
  //     selectedTab: 'redTab',
  //     hidden: false,
  //     fullScreen: false,
      
  //   }
  // }
  // componentDidMount() {
  //   // simulate img loading
  //   setTimeout(() => {
  //     this.setState({
  //       data: ['lunbo1', 'lunbo2', 'lunbo3', 'lunbo4', 'lunbo5'],
  //     });
  //   }, 100);
  // }
  render() {
   return (
    <div>
      <Router>
            <div>
              <Route path="/main" component={Mainzj} />
              {/* <Route path="/main/Gedan" component={Gedan} /> */}
            </div>
        </Router>
        <div className="footer">
       <Link to="/main" className="backll">
          <img ref="img1" className="back1" id="back1"  src={`${IP}/images/faxian1.png`} alt=""/>
          <p className="wenzi" id="wenzi1">发现音乐</p>
       </Link>
       <Link to="/mine" className="back">
          <img className="back1" src={`${IP}/images/title2-1.png`} alt=""/>
          <p className="wenzi">我的音乐</p>
       </Link>
       <Link to="/friend" className="backpp">
          <img className="back1" src={`${IP}/images/pengyou3-1.png`} alt=""/>
          <p className="wenzi" id="wenzi3">朋友</p>
       </Link>
       <Link to="/zhanghao" className="back">
          <img className="back1" src={`${IP}/images/zhanghao4-1.png`} alt=""/>
          <p className="wenzi" id="wenzi4">账号</p>
       </Link>
         </div>
  </div>
//       <div className="main">
//       <div className="sreach">
//       <img className="picture" src={`${IP}/images/yuyin.png`} alt=""/>
//        <div className="input">
//      <SearchBar placeholder="搜索音乐" />
//      </div>
//        <img className="picture" src={`${IP}/images/shuxhang.png`} alt=""/>
//        </div>
      
//  <WhiteSpace />
//     <Tabs style=" height:14.8rem;" tabs={this.state.tabs} initialPage={0} animated={false} useOnPan={false}>
//       <div style={{ display: 'flex', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
//      <div className="lunbo">
//       <WingBlank>
//         <Carousel
//          infinite
//           // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
//           // afterChange={index => console.log('slide to', index)}
//           autoplay={true}
//         >
//           {this.state.data.map(val => (
//             <a
//               key={val}
//               href="http://www.alipay.com"
//               style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
//             >
//               <img className="imgs"
//                 src={`${IP}/images/${val}.jpg`}
//                 alt=""
//                 style={{ width: '100%', verticalAlign: 'top' }}
//                 onLoad={() => {
//                   // fire window resize event to change height
//                   window.dispatchEvent(new Event('resize'));
//                   this.setState({ imgHeight: 'auto'});
//                 }}
//               />
//             </a>
//           ))}
//         </Carousel>
//       </WingBlank>
//       </div>
//       </div>
//       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
//         Content of second tab
//       </div>
//       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
//         Content of third tab
//       </div>
//     </Tabs>
//     <WhiteSpace />
//    <div className="sizhang">
//     <a ref="#">
//       <img className="si" src={`${IP}/images/luyin.png`}  alt=""/>
//     <p>私人FM</p>
//     </a>
//     <a ref="#">
//     <img className="si" src={`${IP}/images/rili.png`}  alt=""/>
//     <p>每日推荐</p>
//     </a>
//     <a ref="#">
//     <img className="si" src={`${IP}/images/ge.png`}  alt=""/>
//     <p>歌单</p>
//     </a>
//     <a ref="#">
//     <img className="si" src={`${IP}/images/paihang.png`}  alt=""/>
//     <p>排行榜</p>
//     </a>
//      </div>
//      <a ref="#">
//      <div  className="gedan">
//         <span className="shu">&nbsp;</span>
//         <span className="tuijian">推荐歌单</span>
//         <span className="tuijian">&nbsp;&nbsp;></span>
//         </div>
//      </a>
//      <div className="sings">
//      {
//        this.state.list.map((item)=>{
//         return <div className="pai3"  onClick={this.sendMsg.bind(this)}   key={item._id}>
//                 <Link ref="idCheck" to="/gedan" val={item.songs} val1={item.title}>
//                   <img  className="pai" src={`${IP}${item.picture}`} alt=""/>
//                   <p className="ps" >{item.title}</p>
//                 </Link>
//               </div>
//        })
//      }
     
      //  </div>
    
    // </div>
    
  
  // sendMsg(){
  //  this.props.dispatch({
  //     type: 'TIMEOut',
  //     lists:[this.refs.idCheck.props.val,this.refs.idCheck.props.val1]
  // })
  // }
  // componentWillMount() {
  //   axios.post(`${IP}/allSing`).then((msg)=>{
  //     this.setState({
  //       list:msg.data
  //     })
    
  // })
   )
  }
}

export default Main;