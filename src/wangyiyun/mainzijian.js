
import React, { Component } from 'react';
import { Tabs, WhiteSpace, SearchBar, Carousel, WingBlank } from 'antd-mobile';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import {idCheck} from "../store/action";
import { connect } from "react-redux";
import {IP} from './Ip'
// import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
// let IP = 'http://127.0.0.1:3000';// let IP='http://192.168.43.231:3000';
class Mainzj extends Component {

  constructor(p) {
    super(p);
    this.state = {
      tabs: [
        { title: '音乐' },
        { title: '视频' },
        { title: '电台' },
      ],
      data: ['lunbo1', 'lunbo2', 'lunbo3', 'lunbo4', 'lunbo5'],
      imgHeight: 176,
      list: [],
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,

    }
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['lunbo1', 'lunbo2', 'lunbo3', 'lunbo4', 'lunbo5'],
      });
    }, 100);
  }
  render() {
    return (
      <div className="main">
        <div className="sreach">
          <img className="picture" src={`${IP}/images/ly.png`} alt="" />
          <div className="input">
            <SearchBar placeholder="搜索音乐" />
          </div>
          <Link to="/onesong" style={{width:'3rem',marginTop: '1rem'}}>
          <span onClick={this.search.bind(this)} >搜索</span>
          </Link>
          <img className="picture" src={`${IP}/images/xian.png`} alt="" />
        </div>

        <WhiteSpace />
        <Tabs style={{height:'14.8rem'}} tabs={this.state.tabs} initialPage={0} animated={false} useOnPan={false}>
          <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#fff' }}>
            <div className="lunbo">
              <WingBlank>
                <Carousel
                  infinite
                  autoplay={true}
                >
                  {this.state.data.map(val => (
                    <a
                      key={val}
                      href="http://www.alipay.com"
                      style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                    >
                      <img className="imgs"
                        src={`${IP}/images/${val}.jpg`}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                        onLoad={() => {
                          // fire window resize event to change height
                          window.dispatchEvent(new Event('resize'));
                          this.setState({ imgHeight: 'auto' });
                        }}
                      />
                    </a>
                  ))}
                </Carousel>
                <div className="sizhang">
          <a ref="#">
            <img className="si" src={`${IP}/images/luyin.png`} alt="" />
            <p>私人FM</p>
          </a>
          <a ref="#">
            <img className="si" src={`${IP}/images/rili.png`} alt="" />
            <p>每日推荐</p>
          </a>
          <a ref="#">
            <img className="si" src={`${IP}/images/ge.png`} alt="" />
            <p>歌单</p>
          </a>
          <a ref="#">
            <img className="si" src={`${IP}/images/paihang.png`} alt="" />
            <p>排行榜</p>
          </a>
        </div>
        <a ref="#">
          <div className="gedan">
            <span className="shu">&nbsp;</span>
            <span className="tuijian">推荐歌单</span>
            <span className="tuijian">&nbsp;&nbsp;></span>
          </div>
        </a>
        <div className="sings">
          {
            this.state.list.map((item) => {
              return <div className="pai3" onClick={this.sendMsg.bind(this, item._id, item.title)} key={item._id}>
                <Link to="/gedan">
                  <img className="pai" src={`${IP}${item.picture}`} alt="" />
                  <p className="ps" >{item.title}</p>
                </Link>
              </div>
            })
          }
        </div>
          
        <a ref="#">
          <div className="gedan">
            <span className="shu">&nbsp;</span>
            <span className="tuijian">最新音乐</span>
            <span className="tuijian">&nbsp;&nbsp;></span>
          </div>
        </a>
        <div className="sings1">
          {
            this.state.list.map((item) => {
              return <div className="pai3" onClick={this.sendMsg.bind(this, item._id, item.titleOne)} key={item._id}>
                <Link to="/gedan">
                  <img className="pai" style={{width:'8rem',height:'9rem'}} src={`${IP}${item.pictureOne}`} alt="" />
                  <p className="ps" >{item.titleOne}</p>
                </Link>
              </div>
            })
          }
        </div>
              </WingBlank>
            </div>
          </div>
        <div className="all">
              <video ref="video" width="100%" height="252" controls hidden >
            <source src={`${IP}/images/HIPHOP1.mp4`} type="video/mp4" />
            </video>
            <div ref="tupian" onClick={this.bofang.bind(this)} ClassName="l">
            <img src={`${IP}/images/timg.jpg`} />
            <img className="kai" style={{width:'5rem'}} src={`${IP}/images/bofang (1).png`}/>
            </div>
        </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
            Content of third tab
        </div>
        </Tabs>
        <WhiteSpace />
      
      </div>
    );
  }
  bofang(e){
    this.refs.video.play();
    this.refs.tupian.className="none";
    this.refs.video.hidden=false;
    // this.state.timeAll=(this.refs.audio.duration/60).toFixed(2).toString();
  }
  search(){
    let inputVal=document.querySelector('input').value;
    axios.get(`${IP}/search`,{params:{songName:inputVal}}).then((msg)=>{
      this.props.dispatch({
        type:'SINGER',
        singer:msg.data
      })
      // console.log(msg.data)
    })
  
  }
  sendMsg(id, titel) {
    // console.log(id,titel)
    this.props.dispatch({
      type: 'TIMEOUT',
      lists: [id, titel]
    })
  }
  componentWillMount() {
    // console.log(111111)
    axios.post(`${IP}/allSing`).then((msg) => {
      // console.log(msg.data)
      this.setState({
        list: msg.data
      })

    })

  }
}

export default connect()(Mainzj);