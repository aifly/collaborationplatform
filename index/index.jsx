import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';


import {
  Input,
  Col,
  Row,
  Table
} from 'antd';

import 'antd/lib/Row/style/css'
import 'antd/lib/input/style/css'
import 'antd/lib/table/style/css'

import IScroll from 'iscroll'

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
      }],
      pageSize: 10,
      dataSource: [{
        key: 1,
        id: 'NJ-209842343',
        name: '键入文本这么多的国防知识产权服务，包括国防专利代涉密特性，ICI中心',
        applicationarea: '应用领域',
        technicalunit: '国防专利分析挖掘、国，包括国防专利代理、国防专利分析挖掘、国',
        saleDate: '2017-11-04',
        deliveryDate: '2018-11-04',
        status: 0
      }]
    }
    this.viewW = document.documentElement.clientWidth;
    this.viewH = document.documentElement.clientHeight;
  }
  render() {


    const columns = [

      {
        title: '',
        key: 'ico',
        fixed: 'left',
        width: 38,
        render: (record) => <div className='zmiti-ico'>
           <img src={'./assets/images/ico'+(record.status+1)+'.png'}/>
      </div>,
      }, {
        title: '标的编号',
        width: 100,
        dataIndex: 'id',
        key: 'id',
        fixed: 'left'
      }, {
        title: '标的名称',
        dataIndex: 'name',
        key: 'name',
        fixed: false
      }, {
        title: '应用领域',
        dataIndex: 'applicationarea',
        key: 'applicationarea',
        width: 100
      }, {
        title: '技术单位',
        dataIndex: 'technicalunit',
        key: 'technicalunit'
      }, {
        title: '发售时间',
        dataIndex: 'saleDate',
        key: 'saleDate',
        width: 100
      }, {
        title: '交付时间',
        dataIndex: 'deliveryDate',
        key: 'deliveryDate',
        width: 100
      }, {
        title: '查看详情',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: (record) => <div className={'status-'+record.status}>
        {record.status === 0 ? '未处理':record.status===1?'正在处理':'已完成'}
      </div>,
      }
    ]

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
           <Col span={6}></Col>
           <Col span={6}>
            <Input type='text'/>
          </Col>
         </Row>

       </div>

       <section onMouseOver={this.tableMouseover.bind(this)} onMouseOut={this.tableMouseout.bind(this)}>
         <Table  pagination={{
            size:'middle',
            pageSize:
            this.state.pageSize,
            total:this.state.dataSource.length,
            showSizeChanger:true,
            showQuickJumper:true,
            onShowSizeChange:this.onShowSizeChange.bind(this),
            itemRender:this.itemRender.bind(this)
             }} size='middle'
             
              columns={columns} dataSource={this.state.dataSource} scroll={{ x: 1500 }}/>
       </section>
    </div>

  }


  tableMouseover() {
    $('.iScrollIndicator').css({
      opacity: 1
    })
  }

  tableMouseout() {
    $('.iScrollIndicator').css({
      opacity: 0
    })
  }

  itemRender(current, type, originalElement) {
    if (type === 'prev') {
      return <a>上一页</a>;
    } else if (type === 'next') {
      return <a>下一页</a>;
    }
    return originalElement;
  }

  onShowSizeChange(current, pageSize) {
    this.setState({
      pageSize
    })
    console.log(current, pageSize)
  }



  componentDidMount() {
    for (var i = 0; i < 200; i++) {
      this.state.dataSource.push({
        key: i + 2,
        id: 'NJ-20984234' + i,
        name: '家用牙齿清洁机',
        applicationarea: '应用领域',
        technicalunit: '技术单位',
        saleDate: '2017-11-04',
        deliveryDate: '2018-11-04',
        status: i % 3
      });
    }

    this.forceUpdate();


    this.scroll = new IScroll($('.ant-table-scroll .ant-table-body')[0], {
      scrollbars: true,
      scrollX: true,
      mouseWheel: true,
      interactiveScrollbars: true, //允许用户拖动滚动条
    })
  }

}

export default PubCom(ZmitiIndexApp);