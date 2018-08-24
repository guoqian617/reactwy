import React, { Component } from 'react';
import { Tabs, WhiteSpace, SearchBar, Carousel, WingBlank } from 'antd-mobile';
import { connect } from "react-redux";
import {IP} from './Ip'
class Onesong extends Component {
    constructor(p) {
      super(p);
      this.state = {
        tabs :[
            { title: '单曲' },
            { title: '歌手' },
            { title: '专辑' },
            { title: '歌单' },
            { title: '视频' }
          ]
      }
    }
    render() {
        return (
            <div>
        <div style={{padding: '1rem 0 0 1rem',backgroundColor:'hotpink'}}>
            <SearchBar style={{width:'22rem',borderRadius:'24rem'}}  placeholder="搜索音乐" />
          </div>
          <WhiteSpace />
    <Tabs tabs={this.state.tabs} initialPage={0} animated={false} useOnPan={true}>
      <div style={{backgroundColor: '#fff' }}>
        <div style={{margin:'0.8rem 0 1rem 0.5rem',color:'grey'}}>最佳匹配</div>
        <div>
            {
               this.props.pictures.map((item,index)=>{
                   if(index==0){
                    return <div key={index}  className="gez">
                        <img style={{width: '4rem',height:'4rem' }} src={`${IP}`+item}/>
                        <span class="zhuan">歌手：{this.props.singer[index].singer}</span>
                        </div>
                   }
                   if(index==1){
                    return <div key={index} className="gez">
                                    <img style={{width: '4rem',height:'4rem' }} src={`${IP}`+item}/>
                                <div class="zhuan">
                                <div>专辑：{this.props.singer[index].special}</div>
                                    <span style={{fontSize:'.6rem'}}>{this.props.singer[index].singer}</span>
                                </div>
                        </div>
                   }
                   if(index>1){
                       return <div key={index} className="gez1"  >
                                <div>
                                    <div style={{marginLeft:'.5rem'}}>{this.props.singer[index].songName}</div>
                                    <div style={{fontSize:'.6rem',color:'darkgray',marginLeft:'.5rem'}}>{this.props.singer[index].singer}/{this.props.singer[index].special}-{this.props.singer[index].songName}</div>
                                </div>
                                <div class="zhuan">...</div>
                       </div>
                   }
                  
               })
            }
            
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
       歌手
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
        专辑
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
        歌单
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
        视频
      </div>
    </Tabs>
    <WhiteSpace />

            </div>
        )
    }
}
function filter(state){
console.log(state.singer)
let pictures=[];
state.singer.map((item)=>{
    pictures.push(item.picture)
})
console.log(pictures)
return {singer:state.singer,
    pictures
}
}
export default connect(filter)(Onesong);