import React, { Component } from 'react';
import axios from 'axios';
import { Slider, WingBlank } from 'antd-mobile';
import { Link } from 'react-router-dom';
// import { Icon, Grid } from 'antd-mobile';
import { connect } from "react-redux";
import {IP} from './Ip'
import {
    HashRouter as Router,
    Route
  } from 'react-router-dom';
  import Mainzj from './mainzijian';
class Sing extends Component {
    constructor(p) {
        super(p);
        this.state = {
            id: '',
            singer: "",
            song: "",
            arr: [],
            number: 0,
            time:0,
            timeAll:''
        }
    }
    render() {
        return (
            <div className="sing">
                <div className="singHead" style={{ paddingTop: '1rem' }}>
                    <Link to="/gedan">
                        <img className="head" src={`${IP}/images/xiaoyu2.png`} alt="" />
                    </Link>
                    <div style={{ color: 'grey' }}>
                        <span>{this.state.song}</span>
                        <p style={{ margin: '.1rem' }}>{this.state.singer}</p>
                    </div>
                    <img className="head" src={`${IP}/images/fen.png`} alt="" />
                </div>
                <div className="sing">
                    <img ref="tuimg" id="tuimg" className="tuimg" src={`${IP}/images/justin.jpg`} alt="" />
                <audio onLoadedData={this.onloadeddata.bind(this)} ref="audio" hidden src={`${IP}${this.state.id}`} preload="metadata" controls autoPlay />
                 
         {/* <WhiteSpace size="lg" /> */}
                    <WingBlank size="lg" style={{position:'relative'}}>
                        <span className="left">{this.state.time.toFixed(2)} </span>  
                        <Slider
                            ref="jindu"
                            style={{ marginLeft: 30, marginRight: 30, marginTop: "3rem" }}
                            defaultValue={26}
                            min={0}
                            max={this.state.timeAll.replace(':','.')-0}
                            defaultValue={0}
                            step={0.01}
                            value={this.state.time}
                        // onChange={this.log('change')}
                        // onAfterChange={this.log('afterChange')}
                        />
                        <span className="right">{this.state.timeAll}</span>
                    </WingBlank>
                    {/* <WhiteSpace size="lg" /> */}
                    
                    <div className="bofang">
                        <img style={{ width: '1.6rem', height: '1.6rem', marginTop: '.3rem' }} src={`${IP}/images/shui1.png`} alt="" />
                        <img onClick={this.upOne.bind(this)} src={`${IP}/images/shang1.png`} alt="" />
                        <img ref="chuxian" className="" onClick={this.stop.bind(this)} src={`${IP}/images/ting5.png`} alt="" />
                        <img ref="yincang" onClick={this.player.bind(this)} className="yincang" src={`${IP}/images/ting1.png`} alt="" />
                        <img onClick={this.nextOne.bind(this)} src={`${IP}/images/xia1.png`} alt="" />
                        <img src={`${IP}/images/zhan.png`} alt="" />
                    </div>
                </div>
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
       <Link to="/login" className="back">
          <img className="back1" src={`${IP}/images/zhanghao4-1.png`} alt=""/>
          <p className="wenzi" id="wenzi4">账号</p>
       </Link>
         </div>
  </div>
            </div>
        )
    }
    //上一首
    upOne() {
        this.state.number--;
        if (this.state.number === -1) {
            this.state.number = this.state.arr.length - 1;
        }
        axios.post(`${IP}/sing`, { _id: this.state.arr[this.state.number] }).then((msg) => {
            this.setState({
                singer: msg.data.singer,
                id: msg.data.audio,
                song: msg.data.songName
            })
        })
    }
onloadeddata(){
        //音频/视频的长度
this.state.timeAll=(this.refs.audio.duration/60).toFixed(2).toString();
      this.setState({
          timeAll:this.state.timeAll.replace('.',':')
      })
     
    setInterval(()=>{
    
    this.setState({
        time: this.refs.audio.currentTime/60
})
 },600)

}
    //下一首
    nextOne() {
        if(this.refs.yincang.className === "chuxian"){
            // console.log(3333333)
            this.refs.audio.pause();
        }
        // this.refs.tuimg.className = '';
        this.state.number++;
        if (this.state.number === this.state.arr.length) {
            this.state.number = 0;
        }
        axios.post(`${IP}/sing`, { _id: this.state.arr[this.state.number] }).then((msg) => {
            this.setState({
                singer: msg.data.singer,
                id: msg.data.audio,
                song: msg.data.songName
            })
        })

    }

    //暂停
    stop(e) {
        e.target.className = "yincang";
        this.refs.yincang.className = "chuxian";
        this.refs.audio.pause();
        this.refs.tuimg.className = '';
    }
    //播放
    player(e) {
        e.target.className = "yincang";
        this.refs.chuxian.className = "chuxian";
        this.refs.audio.play();
        this.refs.tuimg.className = 'tuimg';
      
    }
 componentWillMount() {
        axios.post(`${IP}/sing`, { _id: this.props.id }).then((msg) => {
            this.setState({
                singer: msg.data.singer,
                id: msg.data.audio,
                song: msg.data.songName
            })
        })
       for (let item of this.props.songs) {
            this.state.arr.push(item._id);
        }
        this.setState({
            number: this.state.arr.indexOf(this.props.id)
        })
      
    }
    componentDidMount(){
       
        // console.log(22222222)
//   if(this.refs.jindu.value==this.state.timeAll.replace(':','.')-0){
//             // console.log(11111)
//             this.refs.audio.pause();
//            this.nextOne();
//        }
    }
}

function filter(state) {
    // console.log(state)
    return { id: state.sing, songs: state.songs }
}
export default connect(filter)(Sing);