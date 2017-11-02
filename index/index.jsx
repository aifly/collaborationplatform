import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './assets/css/index.css';


import {
  Input,
  Col,
  Row
} from 'antd';

import 'antd/lib/input/style/css'

import {
  PubCom
} from '../components/public/pub.jsx';



class ZmitiIndexApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchCondition: [{
        title: '交易公告',
        index: 0
      }, {
        title: '产品货架',
        index: 1
      }, {
        title: '推广活动',
        index: 2
      }, {
        title: '技术视频',
        index: 3
      }, {
        title: '问题解答',
        index: 4
      }]
    }
    this.viewW = document.documentElement.clientWidth;
    this.viewH = document.documentElement.clientHeight;
  }
  render() {

    return <div className='zmiti-index-main-ui'>
       <h3 className='zmiti-index-notice-title'>关于交易公告</h3>
       <div className='zmiti-index-notice'>
          键入文本这么多的国防知识产权服务，包括国防专利代理、国防专利分析挖掘、国防专利战略等系列内容。由于国防专利具有涉密特性，ICI中心 
       </div>

       <div className='zmiti-index-search-C'>
         <Row>
           <Col span={12}>
              <ul>
            {this.state.searchCondition.map((search,i)=>{
              return <li key={i}>
                  {search.title}
              </li>
            })}
          </ul>
          
           </Col>
           <Col span={12}><Input type='text'/></Col>
         </Row>

       </div>
    </div>

  }



  componentDidMount() {

  }

}

export default PubCom(ZmitiIndexApp);