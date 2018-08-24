import React, { Component } from 'react';
import {IP} from './Ip'
class Zuijin extends Component {
    constructor(p) {
        super(p);
        this.state = {
        }
    }

render() {
    return (
        <div> 
            <div className="sreach">
            <img className="head" src={`${IP}/images/xiaoyu1.png`} alt=""/>
                    <div className="wenzim">最近播放的歌曲</div>
                    <img className="picture" src={`${IP}/images/xian.png`} alt="" />
            </div>
        </div>
    )
}
}
export default Zuijin;