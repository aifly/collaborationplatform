import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';


import {
  Input,
  Col,
  Row,
  Table,
  Select,
  DatePicker
} from 'antd';
const {
  MonthPicker
} = DatePicker;

import 'antd/lib/Row/style/css'
import 'antd/lib/input/style/css'
import 'antd/lib/table/style/css'
import 'antd/lib/select/style/css'
import 'antd/lib/date-picker/style/css'

const Option = Select.Option;

import IScroll from 'iscroll';

window.IScroll = IScroll;

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
        isCollect: false,
        id: 'NJ-209842343',
        name: '键入文本这么多的国防知识产权服务，包括国防专利代涉密特性，ICI中心',
        applicationarea: '应用领域',
        technicalunit: '国防专利分析挖掘、国，包括国防专利代理、国防专利分析挖掘、国',
        saleDate: '2017-11-04',
        deliveryDate: '2018-11-04',
        detail: '键入文本这么多的国防知识产权服务，包括国防专利代涉密特性，ICI中心键入文本这么多的国防知识产权服务，包括国防专利代涉密特性，ICI中心',
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
        title: '产品编号',
        width: 100,
        dataIndex: '',
        key: 'id',
        fixed: 'left',
        render: (record) => <div className='zmiti-name'>
           {record.id}
      </div>,
      }, {
        title: '产品名称',
        dataIndex: 'name',
        key: 'name',
        fixed: false
      }, {
        title: '应用领域',
        dataIndex: 'applicationarea',
        key: 'applicationarea',
        width: 100,

      }, {
        title: '技术单位',
        dataIndex: 'technicalunit',
        key: 'technicalunit',

      }, {
        title: '发售时间',
        dataIndex: 'saleDate',
        key: 'saleDate',
        width: 100
      }, {
        title: '交易份额',
        dataIndex: 'saleMoney',
        key: 'saleMoney',
        width: 100
      }, {
        title: '交易单价',
        dataIndex: 'price',
        key: 'price',
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
        render: (record, i, value) => <div onClick={this.showDetail.bind(this,record,i,value)} className={'status-'+record.status}>
        {record.status === 0 ? '未处理':record.status===1?'正在处理':'已完成'}
      </div>,
      }
    ]

    return <div className='zmiti-index-main-ui'>
       <h3 className='zmiti-index-notice-title'>关于产品货架</h3>
       <div className='zmiti-index-notice'>
          “交易所挂牌的产品类型，为技术买家与服务机构购买挂牌交易技术产品提供指导。”
       </div>

       <div className='zmiti-index-search-C'>
         <Row>
           <Col span={16}>
              <ul>
                <li>
                  筛选条件：
                </li>
                <li>
                 <MonthPicker onChange={this.searchByDate.bind(this)} placeholder="每月产品" /></li>
                <li><Input placeholder='领域分类'/></li>
                <li>
                  <Select
                      onChange={this.searchByUnit.bind(this)}
                      style={{ width: 100 }}
                      placeholder="技术单位"
                    >
                      <Option value="军工">军方机构</Option>
                      <Option value="军方单位">军工企业</Option>
                      <Option value="国有企业">国有企业</Option>
                      <Option value="企业">企业</Option>
                      <Option value="院所">高校院所</Option>
                    </Select>
                </li>
                <li>
                  <Select
                      style={{ width: 100 }}
                      placeholder="特殊技术"
                    >
                      <Option value="1">军用技术</Option>
                      <Option value="2">贸易限制</Option>
                      <Option value="3">领袖专家</Option>
                    </Select>
                </li>
                <li>
                  <Select
                      style={{ width: 100 }}
                      placeholder="价格区间"
                    >
                      <Option value="4">5-50万元</Option>
                      <Option value="5">50-200万元</Option>
                      <Option value="6">200-500万元</Option>
                      <Option value="7">500-2000万元</Option>
                      <Option value="8">2000万元以上</Option>
                    </Select>
                </li>
              </ul>
           </Col>
           <Col span={2}></Col>
           <Col span={6}>
            <Input placeholder='请输入名称查询' onChange={this.searchByName.bind(this)} className='zmiti-search-input' type='text'/>
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


  searchByDate(date, dateString) {

    this.state.dataSource = this.defaultDataSource.filter((item, i) => {
      return item.saleDate.indexOf(dateString) > -1;
    })



    this.forceUpdate();

  }

  searchByName(e) {


    this.state.dataSource = this.defaultDataSource.filter((item, i) => {

      return item.name.indexOf(e.target.value) > -1;
    })

    this.forceUpdate();
  }

  searchByUnit(e) {

    this.state.dataSource = this.defaultDataSource.filter((item, i) => {
      return item.technicalunit.indexOf(e) > -1;
    })

    this.forceUpdate();

  }


  tableMouseover() {
    $('.iScrollIndicator').css({
      opacity: 1
    })
  }

  showDetail(record, i, value) {
    ZmitiUtil.showDetail(record.name, record.detail, record.isCollect, value);
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

  }



  componentDidMount() {
    for (var i = 0; i < 100; i++) {
      var m = i % 12 + 1;
      this.state.dataSource.push({
        key: i + 2,
        id: 'NJ-20984234' + i,
        name: '家用牙齿清洁机',
        applicationarea: '应用领域',
        technicalunit: i % 3 === 0 ? '国有企业' : '军方单位',
        saleDate: '2017-' + (m < 10 ? '0' + m : m) + '-04',
        deliveryDate: '2018-11-04',
        isCollect: false,
        status: i % 3,
        detail: '家用牙齿清洁机家用牙齿清洁机家用牙齿清洁机家用牙齿清洁机家用牙齿清洁机家用牙齿清洁机家用牙齿清洁机家用牙齿清洁机'
      });

      this.defaultDataSource = this.state.dataSource.concat([])

      window.dataSource = [];
    }

    window.obserable.on('collect', data => {
      this.state.dataSource[data.index].isCollect = data.isCollect;
      if (data.isCollect) {
        window.dataSource.push(this.state.dataSource[data.index]);
      } else {
        window.dataSource.forEach(function(item, i) {
          if (item.key === this.state.dataSource[data.index].key) {
            window.dataSource.splice(i, 1);
          }
        }.bind(this))
      }
      this.forceUpdate();
    });

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