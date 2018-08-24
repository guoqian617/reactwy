import React from 'react';
import ReactDOM from 'react-dom';
//ant design的css引入
import 'antd-mobile/dist/antd-mobile.css';
import './wangyiyun/all.css'
//路由引入
import {
    HashRouter as Router,
    Route
} from 'react-router-dom';
//redux引入
import { Provider } from "react-redux";
import store from "./store/store";
// import APP from './App';
//引入主件
import Main from './wangyiyun/main'
import Login from './wangyiyun/login'
import Gedan from './wangyiyun/gedan'
import Sing from './wangyiyun/sing'
import Reg from './wangyiyun/Reg'
import Onesong from './wangyiyun/OneSong'
import Mine from './wangyiyun/mine'
import Zuijin from './wangyiyun/zuijin'
import Zhanghao from './wangyiyun/zhanghao'
ReactDOM.render(
    <div>
        <Provider store={store}>
            <Router>
                <div>
                  <Route path="/main" component={Main} />
                  <Route path="/login" component={Login} />
                  <Route path="/gedan" component={Gedan} />
                  <Route path="/sing" component={Sing} />
                  <Route path="/reg" component={Reg} />
                  <Route path="/onesong" component={Onesong} />
                  <Route path="/mine" component={Mine} />
                  <Route path="/zuijin" component={Zuijin} />
                  <Route path="/zhanghao" component={Zhanghao} />
                </div>
            </Router>
        </Provider>
    </div>
, document.getElementById('root'));
  //<Route path="/weixin" component={Weixin} />
                   
        //   store={store}         // <Route path="/reg" component={Reg} />
                   // <Route path="/list" component={List} />