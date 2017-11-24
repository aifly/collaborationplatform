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
  DatePicker,
  Cascader
} from 'antd';
const {
  MonthPicker
} = DatePicker;

import 'antd/lib/Row/style/css'
import 'antd/lib/input/style/css'
import 'antd/lib/table/style/css'
import 'antd/lib/select/style/css'
import 'antd/lib/cascader/style/css'
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
      options: [

        {
          value: '虚拟现实',
          label: '虚拟现实',
          children: [{
            value: '头显设备',
            label: '头显设备',
          }, {
            value: '输入设备',
            label: '输入设备'
          }, {
            value: '图像识别',
            label: '图像识别'
          }]
        }, {
          value: '环保领域',
          label: '环保领域',
          children: [{
            value: '水处理',
            label: '水处理',
          }, {
            value: '固废处理',
            label: '固废处理',
          }, {
            value: '大气污染治理',
            label: '大气污染治理',
          }, {
            value: '生态修复',
            label: '生态修复',
          }, {
            value: '污染检测设备',
            label: '污染检测设备',
          }]
        }, {
          value: '集成电路',
          label: '集成电路',
          children: [{
            value: '集成电路材料',
            label: '集成电路材料',
          }, {
            value: '芯片设计',
            label: '芯片设计',
          }, {
            value: '芯片制造',
            label: '芯片制造',
          }, {
            value: '芯片封装和测试',
            label: '芯片封装和测试',
          }, {
            value: '集成电路设备',
            label: '集成电路设备',
          }]
        }, {
          value: '应急产业',
          label: '应急产业',
          children: [{
            value: '监测预警产品',
            label: '预防防护产品',
          }, {
            value: '预防防护产品',
            label: '预防防护产品',
          }, {
            value: '救援处置产品',
            label: '救援处置产品',
          }, {
            value: '应急服务',
            label: '应急服务',
          }]
        }, {
          value: '光电显示行业',
          label: '光电显示行业',
          children: [{
            value: '玻璃基板',
            label: '玻璃基板',
          }, {
            value: '偏光片',
            label: '偏光片',
          }, {
            value: '彩色滤光片',
            label: '彩色滤光片',
          }, {
            value: '背光模组',
            label: '背光模组',
          }, {
            value: '液晶面板',
            label: '液晶面板',
          }, {
            value: '显示应用',
            label: '显示应用',
          }]
        }, {
          value: 'LED/OLED行业',
          label: 'LED/OLED行业',
          children: [{
            value: '发光材料',
            label: '发光材料',
          }, {
            value: '外延材料',
            label: '外延材料',
          }, {
            value: 'LED/OLED器件',
            label: 'LED/OLED器件',
          }, {
            value: 'LED/OLED应用',
            label: 'LED/OLED应用',
          }, ]
        }, {
          value: '光学产业',
          label: '光学产业',
          children: [{
            value: '光学材料',
            label: '光学材料',
          }, {
            value: '光学组件',
            label: '光学组件',
          }, {
            value: '光学器材',
            label: '光学器材',
          }, {
            value: '光学制程设备',
            label: '光学制程设备',
          }]
        }, {
          value: '新能源技术',
          label: '新能源技术',
          children: [{
            value: '风力发电',
            label: '风力发电',
          }, {
            value: '太阳能利用',
            label: '太阳能利用',
          }, {
            value: '页岩气开发',
            label: '页岩气开发',
          }, {
            value: '核能',
            label: '核能',
          }, {
            value: '生物质能发电',
            label: '生物质能发电',
          }]
        }, {
          value: '新能源汽车',
          label: '新能源汽车',
          children: [{
            value: '动力电池',
            label: '动力电池',
          }, {
            value: '驱动电机',
            label: '驱动电机',
          }, {
            value: '电控系统',
            label: '电控系统',
          }, {
            value: '充电站',
            label: '充电站',
          }]
        }, {
          value: '资源循环利用',
          label: '资源循环利用',
          children: [{
            value: '水资源循环利用',
            label: '水资源循环利用',
          }, {
            value: '大宗废物利用',
            label: '大宗废物利用',
          }, {
            value: '再生资源利用',
            label: '再生资源利用',
          }, {
            value: '再制造',
            label: '再制造',
          }]
        }, {
          value: '大数据',
          label: '大数据',
          children: [{
            value: '数据采集',
            label: '数据采集',
          }, {
            value: '数据传输',
            label: '数据传输',
          }, {
            value: '数据存储',
            label: '数据存储',
          }, {
            value: '数据处理',
            label: '数据处理',
          }, {
            value: '数据安全',
            label: '数据安全',
          }, {
            value: '数据应用',
            label: '数据应用',
          }]
        }, {
          value: '云计算',
          label: '云计算',
          children: [{
            value: '电子元器件',
            label: '电子元器件',
          }, {
            value: '硬件设备',
            label: '硬件设备',
          }, {
            value: '基础软件',
            label: '基础软件',
          }, {
            value: '平台与应用软件',
            label: '平台与应用软件',
          }, {
            value: '云集成服务',
            label: '云集成服务',
          }, {
            value: '数据中心及运营服务',
            label: '数据中心及运营服务',
          }]
        }, {
          value: '机器人',
          label: '机器人',
          children: [{
            value: '关键零部件制造',
            label: '关键零部件制造',
          }, {
            value: '机器人集成',
            label: '机器人集成',
          }, {
            value: '机器人应用',
            label: '机器人应用',
          }]
        }, {
          value: '前沿新材料',
          label: '前沿新材料',
          children: [{
            value: '超材料',
            label: '超材料',
          }, {
            value: '超导材料',
            label: '超导材料',
          }, {
            value: '生物材料',
            label: '生物材料',
          }, {
            value: '智能材料',
            label: '智能材料',
          }]
        }, {
          value: '纳米材料',
          label: '纳米材料',
          children: [{
            value: '纳米氧化物',
            label: '纳米氧化物',
          }, {
            value: '纳米金属及合金',
            label: '纳米金属及合金',
          }, {
            value: '非金属纳米',
            label: '非金属纳米',
          }]
        }, {
          value: '高温合金',
          label: '高温合金',
          children: [{
            value: '铸造高温合金',
            label: '铸造高温合金',
          }, {
            value: '金属间化合物',
            label: '金属间化合物',
          }, {
            value: '变形高温合金',
            label: '变形高温合金',
          }, {
            value: '粉末冶金高温合金',
            label: '粉末冶金高温合金',
          }]
        }, {
          value: '功能性膜材料',
          label: '功能性膜材料',
          children: [{
            value: '水处理用膜',
            label: '水处理用膜',
          }, {
            value: '全氟离子膜',
            label: '全氟离子膜',
          }, {
            value: '光学薄膜',
            label: '光学薄膜',
          }, {
            value: '动力电池隔膜',
            label: '动力电池隔膜',
          }]
        }, {
          value: '无机非金属材料',
          label: '无机非金属材料',
          children: [{
            value: '特种玻璃',
            label: '特种玻璃',
          }, {
            value: '先进陶瓷',
            label: '先进陶瓷',
          }, {
            value: '新型建筑材料',
            label: '新型建筑材料',
          }, {
            value: '人工晶体',
            label: '人工晶体',
          }, {
            value: '其他无机非金属材料',
            label: '其他无机非金属材料',
          }]
        }, {
          value: '半导体材料',
          label: '半导体材料',
          children: [{
            value: '硅材料（LED照明）',
            label: '硅材料（LED照明）',
          }, {
            value: '新型半导体材料',
            label: '新型半导体材料',
          }, {
            value: '薄膜光伏材料',
            label: '薄膜光伏材料',
          }]
        }, {
          value: '增材制造',
          label: '增材制造',
          children: [{
            value: '打印原材料',
            label: '打印原材料',
          }, {
            value: '打印零配件',
            label: '打印零配件',
          }, {
            value: '打印设备',
            label: '打印设备',
          }, {
            value: '打印设计与数据',
            label: '打印设计与数据',
          }, {
            value: '行业应用',
            label: '行业应用',
          }]
        }, {
          value: '农业装备',
          label: '农业装备',
          children: [{
            value: '新型高效拖拉机',
            label: '新型高效拖拉机',
          }, {
            value: '变量施肥播种机械',
            label: '变量施肥播种机械',
          }, {
            value: '精量植保机械',
            label: '精量植保机械',
          }, {
            value: '高效能收获机械',
            label: '高效能收获机械',
          }, {
            value: '种子繁育与精细选别机械',
            label: '种子繁育与精细选别机械',
          }, {
            value: '节能保质运贮机械',
            label: '节能保质运贮机械',
          }, {
            value: '畜禽养殖机械',
            label: '畜禽养殖机械',
          }, {
            value: '农产品加工机械',
            label: '农产品加工机械',
          }]
        }, {
          value: '工业节能',
          label: '工业节能',
          children: [{
            value: '高效工业锅炉',
            label: '高效工业锅炉',
          }, {
            value: '电视系统节能',
            label: '电视系统节能',
          }]
        }, {
          value: '建筑节能',
          label: '建筑节能',
          children: [{
            value: '供热供冷技术改造',
            label: '供热供冷技术改造',
          }, {
            value: '节能材料',
            label: '节能材料',
          }]
        }, {
          value: '交通节能',
          label: '交通节能',
          children: [{
            value: '公路节能',
            label: '公路节能',
          }, {
            value: '航空交通节能',
            label: '航空交通节能',
          }, {
            value: '轨道交通节能',
            label: '轨道交通节能',
          }, {
            value: '管道运输节能',
            label: '管道运输节能',
          }, {
            value: '水运节能',
            label: '水运节能',
          }]
        }, {
          value: '医疗健康',
          label: '医疗健康',
          children: [{
            value: '化学药',
            label: '化学药',
          }, {
            value: '生物药',
            label: '生物药',
          }, {
            value: '中药',
            label: '中药',
          }, {
            value: '医疗设备',
            label: '医疗设备',
          }, {
            value: '诊断试剂',
            label: '诊断试剂',
          }]
        }, {
          value: '能源互联网',
          label: '能源互联网',
          children: [{
            value: '公路节能',
            label: '公路节能',
          }, {
            value: '电网并网',
            label: '电网并网',
          }, {
            value: '智能配电',
            label: '智能配电',
          }, {
            value: '电力调度',
            label: '电力调度',
          }, {
            value: '能源发电',
            label: '能源发电',
          }]
        }, {
          value: '信息安全',
          label: '信息安全',
          children: [{
            value: '物理安全',
            label: '物理安全',
          }, {
            value: '主机安全',
            label: '主机安全',
          }, {
            value: '网络安全',
            label: '网络安全',
          }, {
            value: '边界安全',
            label: '边界安全',
          }, {
            value: '应用安全',
            label: '应用安全',
          }]
        }, {
          value: '光伏行业',
          label: '光伏行业',
          children: [{
            value: '原材料',
            label: '原材料',
          }, {
            value: '电池',
            label: '电池',
          }, {
            value: '组件',
            label: '组件',
          }, {
            value: '平衡部件',
            label: '平衡部件',
          }, {
            value: '系统集成',
            label: '系统集成',
          }]
        }, {
          value: '工业无人机',
          label: '工业无人机',
          children: [{
            value: '机体结构设计',
            label: '机体结构设计',
          }, {
            value: '飞行控制',
            label: '飞行控制',
          }, {
            value: '无线通信遥控',
            label: '无线通信遥控',
          }, {
            value: '管道运输节能',
            label: '管道运输节能',
          }, {
            value: '发动机',
            label: '发动机',
          }, {
            value: '无人机应用',
            label: '无人机应用',
          }]
        }, {
          value: '文物保护',
          label: '文物保护',
          children: [{
            value: '文物修复',
            label: '文物修复',
          }, {
            value: '文物复原',
            label: '文物复原',
          }, {
            value: '文物加固',
            label: '文物加固',
          }, {
            value: '文物填充',
            label: '文物填充',
          }, {
            value: '文物保存',
            label: '文物保存',
          }]
        }, {
          value: '公检法领域',
          label: '公检法领域',
          children: [{
            value: '侦察',
            label: '侦察',
          }, {
            value: '检查',
            label: '检查',
          }, {
            value: '审判',
            label: '审判',
          }]
        }, {
          value: '生物农业',
          label: '生物农业',
          children: [{
            value: '生物育种',
            label: '生物育种',
          }, {
            value: '生物饲料及添加剂',
            label: '生物饲料及添加剂',
          }, {
            value: '生物兽药及疫苗',
            label: '生物兽药及疫苗',
          }, {
            value: '管道运输节能',
            label: '管道运输节能',
          }]
        }, {
          value: '安防技术',
          label: '安防技术',
          children: [{
            value: '安检',
            label: '安检',
          }, {
            value: '视频监控',
            label: '视频监控',
          }, {
            value: '消防',
            label: '消防',
          }]
        }, {
          value: '环控技术',
          label: '环控技术',
          children: [{
            value: '环境监控系统',
            label: '环境监控系统',
          }, {
            value: '航空交通节能',
            label: '航空交通节能',
          }, {
            value: '通风与空调系统',
            label: '通风与空调系统',
          }, {
            value: '给排水系统',
            label: '给排水系统',
          }]
        }, {
          value: '车辆技术',
          label: '车辆技术',
          children: [{
            value: '牵引传动技术',
            label: '牵引传动技术',
          }, {
            value: '制动系统',
            label: '制动系统',
          }, {
            value: '车体',
            label: '车体',
          }, {
            value: '转向架',
            label: '转向架',
          }, {
            value: '降噪技术',
            label: '降噪技术',
          }]
        }, {
          value: '牵引供电技术',
          label: '牵引供电技术',
          children: [{
            value: '牵引供变电系统',
            label: '牵引供变电系统',
          }, {
            value: '接触网',
            label: '接触网',
          }, {
            value: '道理监控系统',
            label: '道理监控系统',
          }]
        }, {
          value: '动力电池',
          label: '动力电池',
          children: [{
            value: '关键材料',
            label: '关键材料',
          }, {
            value: '电池制造',
            label: '电池制造',
          }, {
            value: '电芯',
            label: '电芯',
          }, {
            value: '电池组',
            label: '电池组',
          }, {
            value: '系统集成',
            label: '系统集成',
          }]
        }, {
          value: '高档数控机床',
          label: '高档数控机床',
          children: [{
            value: '主要功能部件',
            label: '主要功能部件',
          }, {
            value: '数控系统',
            label: '数控系统',
          }, {
            value: '数控机床整机制造',
            label: '数控机床整机制造',
          }]
        }, {
          value: '智能化仪器',
          label: '智能化仪器',
          children: [{
            value: '新型传感器技术',
            label: '新型传感器技术',
          }, {
            value: '科学分析仪器、检测仪器技术',
            label: '科学分析仪器、检测仪器技术',
          }, {
            value: '精确制造中的测控仪器技术',
            label: '精确制造中的测控仪器技术',
          }]
        }, {
          value: '地理信息产业',
          label: '地理信息产业',
          children: [{
            value: '数据获取与加工',
            label: '数据获取与加工',
          }, {
            value: '数据处理与软件',
            label: '数据处理与软件',
          }, {
            value: 'GIS运营服务',
            label: 'GIS运营服务',
          }]
        }
      ],
      dataSource: [{
        key: 1,
        isCollect: false,
        id: '1JS1725001G01',
        name: '家用口腔检测软件系统许可',
        applicationarea: '医疗健康',
        technicalunit: '中国人民解放军总医院',
        nature: '军方机构',
        saleDate: '2017/10/1',
        saleMoney: 10,
        price: 200,
        detail: '家用口腔检测软件系统应用于家用洗牙机，通过在洗牙机上安装防雾高清摄像头，置于非金属洗牙头的前端。洗牙的时候，洗牙图像通过连线或wifi显示在手机屏幕上，看着手机屏幕自己给自己洗牙。同时手机上的洗牙视频可以有选择地上传至云端，有资质的牙科医生可以看到口腔洗牙的同步录像，提出专业建议或预约下一步治疗方案。',
        status: 0
      }, {
        key: 2,
        isCollect: false,
        id: '1JS1725002G01',
        name: '家用洗牙机委托生产',
        applicationarea: '医疗健康',
        technicalunit: '中国人民解放军总医院',
        nature: '军方机构',
        saleDate: '2017/10/1',
        saleMoney: 20,
        price: 500,
        detail: '家用洗牙机是口腔机器人的手臂末端洗牙小设备，能够将沉积于牙面上的牙菌斑/烟斑和牙结石去除干净，保持口气清新。小巧便携，一个主机，多种洁治头和口腔内摄像头、满足全家口腔保健需求。可以检测儿童口内是否有蛀牙，刷牙是否正确，也可以监测老年人口腔内是否有粘膜病，如口腔平苔藓，白斑等。',
        status: 0
      }, {
        key: 3,
        isCollect: false,
        id: '1JS1723001G01',
        name: '低外流阻小涡流高效率管片一体式热交换器',
        applicationarea: '建筑节能',
        technicalunit: '海军航空工程学院',
        nature: '军方机构',
        saleDate: '2017/10/1',
        saleMoney: 40,
        price: 600,
        detail: '低外流阻小涡流高效率管片一体式热交换器适用于空调散热片，结构独特，散热管的管片之间无接点，管片一体，热阻为零，传热效率高、散热好；翅片采用曲面状增加散热效果，流体与曲面接触立即产生旋转形成紊流，提高散热量；翅片管内部布有均匀的横向拉筋，管内形成数个小平行通路，大大提高了管内的承压，与传统的散热器比，管内可承受压力高出50％；加工过程简单，采用冷弯技术就可完成。',
        status: 0
      }, {
        key: 4,
        isCollect: false,
        id: '1JS1718001G01',
        name: '堵漏灵系列无机高效防水材料制备技术',
        applicationarea: '无机非金属材料',
        technicalunit: '核工业北京地质研究院',
        nature: '军工企业',
        saleDate: '2017/10/1',
        saleMoney: 20,
        price: 400,
        detail: '堵漏灵系列无机高效防水材料制备技术适用于防水材料的制备，具有无毒无味，粘结力强，抗渗性能好，耐高温抗低温，耐候性强等特点。该产品适用于新旧建筑工程和构筑物的堵漏防水和抗渗防潮，还可用于粘贴瓷片、锦砖、马赛克等材料。',
        status: 0
      }, {
        key: 5,
        isCollect: false,
        id: '1JS1718002G01',
        name: '磁性液体密封材料与技术',
        applicationarea: '无机非金属材料',
        technicalunit: '中国兵器科学研究院宁波分院',
        nature: '军工企业',
        saleDate: '2017/10/1',
        saleMoney: 20,
        price: 2000,
        detail: '磁性液体密封材料与技术适用于电子、真空、化工、高精密测试仪器与设备等真空和低压密封领域。在真空和低压密封领域，该技术不但可替代传统机械密封及橡胶密封，而且具有抗偏心振动、结构自适应、自修复、无磨损、易维护等特点。',
        status: 0
      }, {
        key: 6,
        isCollect: false,
        id: '1JS1735001G01',
        name: '多相纳米复合固体润滑膜制备技术',
        applicationarea: '车辆技术',
        technicalunit: '北京理工大学',
        nature: '高校院所',
        saleDate: '2017/10/1',
        saleMoney: 50,
        price: 500,
        detail: '利用本技术产生的TiN-MoS2/Ti可应用于汽车上的缸套、齿轮、轴承（套）等传动件，达到提高传动摩擦副的耐磨寿命、降低能耗、提高传动效率等效果。',
        status: 0
      }, {
        key: 7,
        isCollect: false,
        id: '1JS1716001G01',
        name: '超轻镁锂合金制备技术',
        applicationarea: '高温合金',
        technicalunit: '哈尔滨工程大学',
        nature: '高校院所',
        saleDate: '2017/10/1',
        saleMoney: 20,
        price: 2000,
        detail: '可广泛用于航空、航天、交通、电子产品等需要轻量化的结构件中。项目所涉及的镁锂合金材料在飞机、汽车、摩托车、3C产品等要求轻量化的装备上具有很好的应用前景。',
        status: 0
      }, {
        key: 8,
        isCollect: false,
        id: '1JS1725003G01',
        name: '钛合金人工关节头表面耐磨层的制备方法',
        applicationarea: '医疗健康',
        technicalunit: '南京理工大学',
        nature: '高校院所',
        saleDate: '2017/10/1',
        saleMoney: 50,
        price: 100,
        detail: '可用于制造体内植入物，如人工关节、牙齿等。该技术制备的钛合金关节头表面耐磨层，具有高承载能力、高硬度、高结合强度和良好润湿性及保持良好光洁度的深层梯度膜，既增强自身耐磨性，又改善润滑状态及生物相容性，从而减少摩擦偶件—关节软骨（超高分子量聚乙烯）的磨损。',
        status: 0
      }, {
        key: 9,
        isCollect: false,
        id: '1JS1722001G01',
        name: '高能工业CT',
        applicationarea: '工业节能',
        technicalunit: '中国工程物理研究院四川聚能核技术工程有限公司',
        nature: '军工企业',
        saleDate: '2017/10/15',
        saleMoney: 10,
        price: 800,
        detail: '在航天、航空、兵器、工业无损检测、材料研究、海关、考古等领域得到广泛应用。其检测对象可从几毫米的陶瓷零件到直径2.4米，高度5.1米，重达 47吨的火箭发动机等产品。',
        status: 0
      }, {
        key: 10,
        isCollect: false,
        id: '1JS1703001G01',
        name: 'CCD自动对位平行光曝光机',
        applicationarea: '集成电路',
        technicalunit: '中国工程物理研究院四川聚能核技术工程有限公司',
        nature: '军工企业',
        saleDate: '2017/10/15',
        saleMoney: 30,
        price: 50,
        detail: '印刷电路板(PCB)是电子信息产品的“骨架”，是连接各种元器件、实现中继传输、发挥电子产品整体功能的基础元件，被广泛应用于一般消费性电子产品、信息、通讯、医疗、航空、航天、军事等领域。曝光机是现代制造印刷线路板PCB必不可少的设备。',
        status: 0
      }, {
        key: 11,
        isCollect: false,
        id: '1JS1703002G01',
        name: '基于非对称能量分布控制的电子束焊接技术',
        applicationarea: '集成电路',
        technicalunit: '中国工程物理研究院',
        nature: '军方机构',
        saleDate: '2017/10/15',
        saleMoney: 100,
        price: 30,
        detail: '该技术可以对焊接能量实现精确控制，尤其是对焊缝两侧的热输入量能精确控制，辅以数值模拟等手段实现零件的优质精密焊接。非对称能量分布控制电子束焊接技术主要应用于机械制造行业，对焊接熔点差异大的异种材料和焊缝两侧壁厚差异大的薄壁类结构件有独特优势。',
        status: 0
      }, {
        key: 12,
        isCollect: false,
        id: '1JS1703003G01',
        name: '有源RFID卡非接触式充电器',
        applicationarea: '集成电路',
        technicalunit: '西安电子科技大学',
        nature: '高校院所',
        saleDate: '2017/10/15',
        saleMoney: 100,
        price: 20,
        detail: '本设计及其系列产品可用于有源RFID卡、手机、手提电脑等便携式电气装置非接触式批量充电、无线供电等场合。本充电器电路通过高频电磁场将电能均匀的传递到每一张卡上，从而实现电能的非接触式传输；卡内获得的电能通过充电管理电路对电池进行充电，从而实现锂电池的安全、准确、无人值守充电管理。',
        status: 0
      }, {
        key: 13,
        isCollect: false,
        id: '1JS1704001G01',
        name: '复合材料轻质高强抗爆容器',
        applicationarea: '应急产业',
        technicalunit: '中国工程物理研究院',
        nature: '军方机构',
        saleDate: '2017/10/15',
        saleMoney: 30,
        price: 100,
        detail: '抗爆容器能屏蔽和隔离爆炸冲击波，限制爆轰产物和破片的作用范围，有效保护人员和环境的安全。因此，抗爆容器可以用于装载炸药等危险品，是一种重要的爆炸防护技术。',
        status: 0
      }, {
        key: 14,
        isCollect: false,
        id: '1JS1723002G01',
        name: '水基UV光固化涂料',
        applicationarea: '建筑节能',
        technicalunit: '中国工程物理研究院',
        nature: '军工企业',
        saleDate: '2017/10/15',
        saleMoney: 60,
        price: 200,
        detail: '该涂料可广泛应用于广泛应用汽车、家具、食品包装、家电、印刷等行业，具有广阔市场前景。水性UV固化涂料结合了传统的紫外光固化涂料和水性涂料两者的优点，以水代替有机溶剂和反应性稀释剂，解决了紫外光固化涂料使用过程中的挥发性有机物而导致的环境污染及刺激性问题，是一种环境友好的新型功能涂料。',
        status: 0
      }, {
        key: 15,
        isCollect: false,
        id: '1JS1718003G01',
        name: '高性能金刚石涂层拉丝模',
        applicationarea: '无机非金属材料',
        technicalunit: '中国工程物理研究院',
        nature: '军工企业',
        saleDate: '2017/10/15',
        saleMoney: 40,
        price: 300,
        detail: '适用于各种规格黑色和有色金属线材、棒材、管材拉拔用拉丝模、绞线模等。金刚石涂层拉丝模具是以成型硬质合金模具为基体，经过特殊的表面处理后，用化学气相沉积方法，在模具的工作区域表面沉积纯净多晶金刚石薄膜。',
        status: 0
      }, {
        key: 16,
        isCollect: false,
        id: '1JS1717001G01',
        name: '抗静电气相防锈膜',
        applicationarea: '功能性膜材料',
        technicalunit: '军械工程学院',
        nature: '军方机构',
        saleDate: '2017/10/15',
        saleMoney: 30,
        price: 40,
        detail: '可用于各种材质的电子产品、电器柜等的防锈包装。可适用于各种钢铁、铜、铝、镀铬等多种金属的防锈，对非金属材料如光学器材、橡胶材料、电子元器件等不产生不良影响，相容性好。',
        status: 0
      }, {
        key: 17,
        isCollect: false,
        id: '1JS1718004G01',
        name: '复合型钼酸盐系钢铁用气相缓蚀剂',
        applicationarea: '无机非金属材料',
        technicalunit: '军械工程学院',
        nature: '军方机构',
        saleDate: '2017/10/15',
        saleMoney: 30,
        price: 80,
        detail: '该产品是一种不含亚硝酸盐的钼酸盐系钢铁用气相缓蚀剂，主要由钼酸盐等组成，经加工制成粉剂、片剂或其它类型的防锈产品，与被保护金属共同置于密闭环境中，可有效防止各种钢铁类金属的锈蚀。',
        status: 0
      }, {
        key: 18,
        isCollect: false,
        id: '1JS1702001G01',
        name: '航天热解生活垃圾处理技术',
        applicationarea: '环保领域',
        technicalunit: '中国航天科技集团公司六院北京航天动力研究所 ',
        nature: '军工企业',
        saleDate: '2017/10/15',
        saleMoney: 20,
        price: 1000,
        detail: '该技术产品应用于垃圾资源处理方面，使垃圾中的有机化合物在绝氧或缺氧条件下，利用热能使化合物的化合键断裂，由大分子量的有机物转化成小分子量的可燃气体、液体燃料和焦炭。',
        status: 0
      }, {
        key: 19,
        isCollect: false,
        id: '1JS1703004G01',
        name: '智能移动终端用声表面波滤波器',
        applicationarea: '集成电路',
        technicalunit: '中国电子科技集团公司第二十六研究所 ',
        nature: '军工企业',
        saleDate: '2017/10/15',
        saleMoney: 20,
        price: 1000,
        detail: '该技术产品应用于移动通讯、移动智能终端、声表面波滤波器，是当今智能手机中关键信息处理器件，主要用于在无线信号传播过程中， 滤除不必要频率信号的干扰，是保证通信质量的关键器件。',
        status: 0
      }, {
        key: 20,
        isCollect: false,
        id: '1JS1718005G01',
        name: '复合材料微细杆（Z-pin）增强技术',
        applicationarea: '无机非金属材料',
        technicalunit: '南京航空航天大学',
        nature: '高校院所',
        saleDate: '2017/10/15',
        saleMoney: 200,
        price: 100,
        detail: '该技术产品应用于大型民用飞机机身、机翼等承力结构补强、壁板加筋连接增强、舵面、地板类、整流罩、 内饰等夹层结构增强；民用直升机尾椎夹层结构、轻质抗坠毁结构；民用无人机轻质高强抗坠毁结构；轻量化车身防滚架、复合材料车架连接、安全防护结构；轨道交通轻量化车身、高速车头；石油管道接头连接增强；风电叶片轻质高强结构。',
        status: 0
      }, {
        key: 21,
        isCollect: false,
        id: '1JS1725004G01',
        name: '基于远程医疗的自动腹膜透析系统',
        applicationarea: '医疗健康',
        technicalunit: '中国船舶重工集团公司第七一六研究所 ',
        nature: '军工企业',
        saleDate: '2017/10/15',
        saleMoney: 10,
        price: 700,
        detail: '应用于医疗领域终末期肾脏病患者的自动腹膜透析治疗。 ',
        status: 0
      }, {
        key: 22,
        isCollect: false,
        id: '1JS1717002G01',
        name: '高损伤阈值激光薄膜元件制造及产业化',
        applicationarea: '功能性膜材料',
        technicalunit: '中国科学院上海光学精密机械研究所 ',
        nature: '高校院所',
        saleDate: '2017/10/15',
        saleMoney: 20,
        price: 300,
        detail: '可对高损伤阈值激光薄膜元件制备的全链路进行工艺控制，突破了缺陷探测与控制 技术、全频域波前控制技术和膜层厚度与应力控制技术，制备的薄膜元件可同时满足高损伤阈值、优良光性质量和波面质量的指标要求。 ',
        status: 0
      }, {
        key: 23,
        isCollect: false,
        id: '1JS1705001G01',
        name: '激光照明技术',
        applicationarea: '光电显示行业',
        technicalunit: '中国电子科技集团公司第二十六研究所 ',
        nature: '军工企业',
        saleDate: '2017/10/15',
        saleMoney: 15,
        price: 3000,
        detail: '该技术采用激光二极管(LD)、荧光陶瓷作为核心发光部件，利用波长为445nm ～ 455nm的大功率蓝光LD激发荧光陶瓷，结合光机电一体化设计，很好地实现了高亮度、大范围白光照明。',
        status: 0
      }, {
        key: 24,
        isCollect: false,
        id: '1JS1704002G01',
        name: '综合船桥系统',
        applicationarea: '应急产业',
        technicalunit: '中国船舶重工集团公司第七〇七研究所',
        nature: '军工企业',
        saleDate: '2017/10/15',
        saleMoney: 10,
        price: 2000,
        detail: '该技术产品突破电子海图基础数据跨平台关键技术，解决了海洋地理信息融合应用 与共享难题，研制出具有完全自主知识产权的多源异构海图基础平台。提出了基于专家知识和操舵控制人员成熟经验的仿人控制算法，成功解决了复杂海域、海况航迹航向控制难题，研制出通过了 C 类（最高标准）航迹控制系统认证产品。',
        status: 0
      }, {
        key: 25,
        isCollect: false,
        id: '1JS1727001G01',
        name: '国产化安全可控可编程逻辑控制器',
        applicationarea: '信息安全',
        technicalunit: '中国电子信息产业集团有限公司第六研究所 ',
        nature: '军工企业',
        saleDate: '2017/11/1',
        saleMoney: 30,
        price: 700,
        detail: '安全可控PLC 包括PLC 模块、跨平台逻辑组态软件及监控组态软件三部分。PLC 模块采用国产处理器，基于异构工业网络融合、高可靠与可用性等关键技术研制，性能指标对标国外主流产品，可靠性指标符 合国军标，可实现对国外产品的完全替代。逻辑组态软件与监控组态软件基于IEC61131-3 语言编译、可信安全技术等关键技术开发，可分别在国产操作系统与 Windows 系统实现对 PLC 模块的编程、调试及远程监控等功能。',
        status: 0
      }, {
        key: 26,
        isCollect: false,
        id: '1JS1709001G01',
        name: '便携式智能充电机',
        applicationarea: '新能源汽车',
        technicalunit: '河北宇能电气有限公司 ',
        nature: '企业',
        saleDate: '2017/11/1',
        saleMoney: 100,
        price: 10,
        detail: '万能式充电，充电时间短，充电电池温升低，蓄电池启动能力强，修复传统意义 上报废的硫化电池，有效延长蓄电池的使用寿命，充电操作简单易于控制,重量轻、体积小、便于携带。',
        status: 0
      }, {
        key: 27,
        isCollect: false,
        id: '1JS1709002G01',
        name: '氢燃料电池动力系统',
        applicationarea: '新能源汽车',
        technicalunit: '中国航天科技集团公司六院北京航天动力研究所 ',
        nature: '军工企业',
        saleDate: '2017/11/1',
        saleMoney: 30,
        price: 300,
        detail: '该技术应用于车载动力系统、通信基站备用电源、无人机动力系统、储能电站。工作时相当于一直流电源，其阳极即电源负极，阴极为电源正极。把氢和氧分别供给阴极和阳极，氢通过阴极向外扩散和电解质发生反应后，放出电子通过外部的负载到达阳极。',
        status: 0
      }, {
        key: 28,
        isCollect: false,
        id: '1JS1737001G01',
        name: '柔性晶硅太阳电池制备技术',
        applicationarea: '动力电池',
        technicalunit: '中国电子科技集团公司第四十八研究所',
        nature: '军工企业',
        saleDate: '2017/11/1',
        saleMoney: 80,
        price: 300,
        detail: '可广泛用于 JY 能源系统领域，还可在民用飞艇和无人机、光伏建筑一体化、农业大 棚、太阳能汽车、太阳能帆船、太阳能帐篷以及太阳能背包等领域广泛应用。 技术开发单位开展产业化前期柔性晶硅太阳电池技术和制造工艺的优化和改进，掌 握产业化过程中稳定性高、超薄柔性的高效电池用关键材料和技术，开展高质量比功率的柔性薄硅太阳能电池制备技术和柔性薄硅电池组件封装技术的研究，以超薄硅片切割、非接触式前电极印刷等关键设备为载体，制备了高性价比柔性晶体硅电池组件。',
        status: 0
      }, {
        key: 29,
        isCollect: false,
        id: '1JS1713001G01',
        name: '废墟搜救可变形机器人',
        applicationarea: '机器人',
        technicalunit: '中国科学院沈阳自动化研究所',
        nature: '高校院所',
        saleDate: '2017/11/1',
        saleMoney: 60,
        price: 1200,
        detail: '适用于地震灾后搜救，城市建筑、地铁站等探查作业，管道探查，野外探测等领域。',
        status: 0
      }, {
        key: 30,
        isCollect: false,
        id: '1JS1702002G01',
        name: '现代涂装工场特涂技术',
        applicationarea: '环保领域',
        technicalunit: '江南造船(集团)有限责任公司',
        nature: '企业',
        saleDate: '2017/11/1',
        saleMoney: 50,
        price: 800,
        detail: '现代涂装工场特涂技术可明显地降低涂装工场对周边环境的污染，改善涂装工作环境，具有广泛的推广应用价值。并且改善了舰（船）的防腐性能，可最大限度地延长舰（船）停航修理的间隔，提高海军舰（船）的建造质量，以满足军队提出的要求。',
        status: 0
      }, {
        key: 31,
        isCollect: false,
        id: '1JS1739001G01',
        name: '热成像系统应用技术',
        applicationarea: '智能化仪器',
        technicalunit: '南京理工大学',
        nature: '高校院所',
        saleDate: '2017/11/1',
        saleMoney: 25,
        price: 40,
        detail: '可用的行业有电力部门、消防部门以及人员密集场所用于对发热病人的实时检测等。如消防、救护、温度检测与监控；各种武器平台及通用系统的全天候夜视装置（边防缉私、保卫、跟踪）；车辆全天候驾驶仪（美国卡迪拉克汽车已经装备）；电器设备故障检测（主要用于检测热故障等）以及高压线连接点温度检测等。',
        status: 0
      }, {
        key: 32,
        isCollect: false,
        id: '1JS1739002G01',
        name: '智能化动态激光测距测速技术',
        applicationarea: '智能化仪器',
        technicalunit: '南京理工大学',
        nature: '高校院所',
        saleDate: '2017/11/1',
        saleMoney: 10,
        price: 100,
        detail: '可广泛应用于测量及监控行业，如现代建筑中长度、面积的精确测量；动态液面(水面、油面等)的实时监测；动态位移、动态速度的实时监测（如汽车、直升机自动防撞、汽车超速监测等）。',
        status: 0
      }, {
        key: 33,
        isCollect: false,
        id: '1JS1703005G01',
        name: '微纳流体数字化技术',
        applicationarea: '集成电路',
        technicalunit: '南京理工大学',
        nature: '高校院所',
        saleDate: '2017/11/1',
        saleMoney: 50,
        price: 100,
        detail: '国家安全，如航天用微推力推进器（动量小）、隐身技术（可方便地制出任意织构的表面）、信息安全（丰富信息表达手段）。',
        status: 0
      }, {
        key: 34,
        isCollect: false,
        id: '1JS1725005G01',
        name: '自适应话音增强和噪音消除技术',
        applicationarea: '医疗健康',
        technicalunit: '南京理工大学',
        nature: '高校院所',
        saleDate: '2017/11/1',
        saleMoney: 50,
        price: 50,
        detail: '可用于车载免提通话，家用免提电话，电话会议，网络电话，电脑游戏，课室或演讲厅扩音系统，重病病房通话和呼救系统，车厢演讲系统（司机或导游对乘客讲话），其他包含麦克风和扬声器的通话系统。',
        status: 0
      }, {
        key: 35,
        isCollect: false,
        id: '1JS1740001G01',
        name: '声源识别、定向和定位技术',
        applicationarea: '地理信息产业',
        technicalunit: '南京理工大学',
        nature: '高校院所',
        saleDate: '2017/11/1',
        saleMoney: 100,
        price: 200,
        detail: '可应用于监控摄像头辅助系统（引导摄像头转向异常方向，标定录像带中的异常时刻，异常情况时报警等），室内防盗系统（识别破门破窗等异常声响并录音或报警），办公室夜间防盗系统（识别并定向或定位夜间出现的各类异常声响并录音或报警），交通监控系统，保护区监控系统（如偷猎者方位，非法车辆识别、定位和报警等），视像会议系统中的话者定向，机械异常声响识别和定位，基于麦克风阵列的语音获取系统的话者定向或定位，灾场搜寻系统（机器人载，无人机载，营救人员穿戴）。',
        status: 0
      }, {
        key: 36,
        isCollect: false,
        id: '1JS1714001G01',
        name: '第二代高温超导带材',
        applicationarea: '前沿新材料',
        technicalunit: '上海上创超导科技有限公司',
        nature: '企业',
        saleDate: '2017/11/1',
        saleMoney: 40,
        price: 100,
        detail: '该技术产品可应用于超导电缆、超导限流器、超导变压器、超导电机、超导风力发电、超导 磁悬浮、 限流器、核磁共振、风力发电、重离子加速器等方面。 解决了磁控溅射制备氧化物缓冲层、化学溶液发制备超导层的关键技术难题。',
        status: 0
      }, {
        key: 37,
        isCollect: false,
        id: '1JS1703006G01',
        name: '超低温阀门',
        applicationarea: '集成电路',
        technicalunit: '中国船舶重工集团公司第七一一研究所 ',
        nature: '军工企业',
        saleDate: '2017/11/1',
        saleMoney: 10,
        price: 700,
        detail: '该技术产品适用于对密封性能要求苛刻的场合，例如液氧、液氮、LNG等低温介质，易燃、易爆、 有毒介质及其他对外漏安全性有特殊要求的场合。 技术开发单位成功研发了手动截止阀、气动截止阀、单向阀、溢流阀等超低温阀门， 所研制阀门密封性能好，可实现“零泄漏”，具有可靠性高、使用安全、寿命长等优。',
        status: 0
      }, {
        key: 38,
        isCollect: false,
        id: '1JS1704003G01',
        name: '全地域高机动运载平台技术',
        applicationarea: '应急产业',
        technicalunit: '中国兵器工业集团公司哈尔滨北方防务特种装备股份有限公司 ',
        nature: '军工企业',
        saleDate: '2017/11/1',
        saleMoney: 40,
        price: 50,
        detail: '该技术产品适用于抢险救灾、油田作业、森林消防 、地质勘探、医疗救护 、物资运输、矿产开发、 电力施工、水力施工、治安防暴、管道维护、工程抢险等任务。一种专门适用于硬质路面、软质土壤表面、水面泅渡行驶的特种车辆， 环境适应能力极强。',
        status: 0
      }, {
        key: 39,
        isCollect: false,
        id: '1JS1713002G01',
        name: '测绘 600 型海洋机器人',
        applicationarea: '机器人',
        technicalunit: '中国科学院沈阳自动化研究所',
        nature: '高校院所',
        saleDate: '2017/11/1',
        saleMoney: 10,
        price: 500,
        detail: '该技术产品应用于海底石油管线巡检、海底电缆探查、水下搜救、海洋环境探测等领域。可实现水下目标探查、水下搜救和海洋环境探测，布放下水后对任务水 域开展全覆盖自主探测，并将探测结果通过无线通信设备传送至岸基设备进行结果分析、确认，具有布 放灵活、探测范围广、探测分辨率高、性价比高等特点，非常适合浅海水域（10 ～ 600 米）开展水下探查作业。',
        status: 0
      }, {
        key: 40,
        isCollect: false,
        id: '1JS1709003G01',
        name: '柔性电致变色薄膜器件',
        applicationarea: '新能源汽车',
        technicalunit: '上海洞舟实业有限公司',
        nature: '企业',
        saleDate: '2017/11/1',
        saleMoney: 30,
        price: 1500,
        detail: '该技术产品可以制备成变色玻璃窗、大面积屏幕、防炫镜、灵巧窗等薄膜器件，在汽车舰船窗、飞机机窗、智能建筑玻璃、信息显示、太阳光控制、变色纤维、可控反射镜方面有着广阔的应用前景，在空间飞行器热控及薄膜航天器姿轨控制方面也具有良好的应用前景。',
        status: 0
      }, {
        key: 41,
        isCollect: false,
        id: '1JS1738001G01',
        name: '数字微纳加工设备',
        applicationarea: '高档数控机',
        technicalunit: '中国科学院光电技术研究所',
        nature: '高校院所',
        saleDate: '2017/11/1',
        saleMoney: 15,
        price: 200,
        detail: '表面三维微纳光刻设备具备横向、纵向分辨力高、加工面积大的特点，主要应用于 大面积表面三维微纳结构制造，具体可应用于微透镜阵列、大面积光栅、防伪微结构以及仿生复眼结构等的制作。三维微立体增材制造设备具备纵向加工高度大、能够制作包括中空结构在内的任意三维结构，主要应用于精度要求相对较低（数十微米）的立体三维微结构制造，具体可应用于牙模及其他生物组织、光束整形器件等的制作。',
        status: 0
      }, {
        key: 42,
        isCollect: false,
        id: '1JS1702003G01',
        name: '微波智能病死动物无害化处理设备',
        applicationarea: '环保领域',
        technicalunit: '中国电子科技集团公司第十二研究所',
        nature: '军工企业',
        saleDate: '2017/11/1',
        saleMoney: 30,
        price: 70,
        detail: '病死动物无害化处理、农业废弃物微波无害化处理、粮食存储前杀菌烘干、玉米膨 化转饲料工艺、微波土壤灭菌改良（消除土传病）、废弃物无害化处理、工业废弃物无害化处理、木材、竹制品烘干、精细陶瓷烧结、食品膨化、烘干、消毒、保鲜处理、医疗废弃物无害化处理等。',
        status: 0
      }, {
        key: 43,
        isCollect: false,
        id: '1JS1723003G01',
        name: '智慧工地',
        applicationarea: '建筑节能',
        technicalunit: '中国电子科技集团公司第十五研究所 ',
        nature: '军工企业',
        saleDate: '2017/11/1',
        saleMoney: 50,
        price: 100,
        detail: '',
        status: 0
      }, {
        key: 44,
        isCollect: false,
        id: '1JS1725006G01',
        name: '基于远程医疗的自动腹膜透析系统',
        applicationarea: '医疗健康',
        technicalunit: '中国船舶重工集团公司第七一六研究所',
        nature: '军工企业',
        saleDate: '2017/11/1',
        saleMoney: 70,
        price: 100,
        detail: '',
        status: 0
      }, {
        key: 45,
        isCollect: false,
        id: '1JS1727002G01',
        name: '大功率塑封脉冲半导体激光器',
        applicationarea: '信息安全',
        technicalunit: '中国电子科技集团公司十三所石家庄麦特达电子科技有限公司  ',
        nature: '军工企业',
        saleDate: '2017/11/1',
        saleMoney: 20,
        price: 10,
        detail: '',
        status: 0
      }, {
        key: 46,
        isCollect: false,
        id: '1JS1727003G01',
        name: '光纤声光移频调制器',
        applicationarea: '信息安全',
        technicalunit: '中国电子科技集团公司第二十六研究所  ',
        nature: '军工企业',
        saleDate: '2017/11/1',
        saleMoney: 30,
        price: 150,
        detail: '',
        status: 0
      }, {
        key: 47,
        isCollect: false,
        id: '1JS1727004G01',
        name: '高性能多功能矢量网络分析仪',
        applicationarea: '信息安全',
        technicalunit: '中国电子科技集团公司第四十一研究所  ',
        nature: '军工企业',
        saleDate: '2017/11/1',
        saleMoney: 20,
        price: 1000,
        detail: '',
        status: 0
      }, {
        key: 48,
        isCollect: false,
        id: '1JS1727005G01',
        name: '高性能微通道板型光电倍增管产业化',
        applicationarea: '信息安全',
        technicalunit: '中国兵器工业集团公司北方夜视技术股份有限公司',
        nature: '军工企业',
        saleDate: '2017/11/1',
        saleMoney: 25,
        price: 200,
        detail: '',
        status: 0
      }, {
        key: 49,
        isCollect: false,
        id: '1JS1729001G01',
        name: '发动机喷燃雾化器件尺寸与形位校准装置',
        applicationarea: '工业无人机',
        technicalunit: '哈尔滨工业大学',
        nature: '高校院所',
        saleDate: '2017/11/1',
        saleMoney: 20,
        price: 10,
        detail: '',
        status: 0
      }, {
        key: 50,
        isCollect: false,
        id: '1JS1720001G01',
        name: '3D 打印技术',
        applicationarea: '增材制造',
        technicalunit: '中国科学院福建物质结构研究所',
        nature: '高校院所',
        saleDate: '2017/11/1',
        saleMoney: 50,
        price: 1000,
        detail: '',
        status: 0
      }, {
        key: 51,
        isCollect: false,
        id: '1JS1713003G01',
        name: '直接驱动伺服阀',
        applicationarea: '机器人',
        technicalunit: '中国航空工业集团公司西安飞行自动控制研究所',
        nature: '军工企业',
        saleDate: '2017/11/1',
        saleMoney: 50,
        price: 400,
        detail: '',
        status: 0
      }, {
        key: 52,
        isCollect: false,
        id: '1JS1713004G01',
        name: '双喷嘴挡板伺服阀',
        applicationarea: '机器人',
        technicalunit: '中国航天科工集团公司南京晨光集团有限责任公司',
        nature: '军工企业',
        saleDate: '2017/11/15',
        saleMoney: 10,
        price: 300,
        detail: '',
        status: 0
      }, {
        key: 53,
        isCollect: false,
        id: '1JS1713005G01',
        name: '交流伺服驱动器',
        applicationarea: '机器人',
        technicalunit: '中国兵器工业集团公司第二〇二研究所',
        nature: '军工企业',
        saleDate: '2017/11/15',
        saleMoney: 100,
        price: 20,
        detail: '',
        status: 0
      }, {
        key: 54,
        isCollect: false,
        id: '1JS1713006G01',
        name: '喷气涡流纺纱机',
        applicationarea: '机器人',
        technicalunit: '中国航空工业集团公司陕西华燕航空仪表有限公司',
        nature: '军工企业',
        saleDate: '2017/11/15',
        saleMoney: 150,
        price: 600,
        detail: '',
        status: 0
      }, {
        key: 55,
        isCollect: false,
        id: '1JS1713007G01',
        name: '电磁兼容测试宽带功率放大器',
        applicationarea: '机器人',
        technicalunit: '中国电子科技集团公司第三十八研究所',
        nature: '军工企业',
        saleDate: '2017/11/15',
        saleMoney: 300,
        price: 1000,
        detail: '',
        status: 0
      }, {
        key: 56,
        isCollect: false,
        id: '1JS1704004G01',
        name: '4000 吨级公安边防巡逻船',
        applicationarea: '应急产业',
        technicalunit: '中国船舶重工集团公司黄埔文冲船舶有限公司 ',
        nature: '军工企业',
        saleDate: '2017/11/15',
        saleMoney: 5,
        price: 3000,
        detail: '',
        status: 0
      }, {
        key: 57,
        isCollect: false,
        id: '1JS1702004G01',
        name: '沙漠植被建造机',
        applicationarea: '环保领域',
        technicalunit: '中国兵器工业集团公司江麓机电集团有限公司',
        nature: '军工企业',
        saleDate: '2017/11/15',
        saleMoney: 100,
        price: 2000,
        detail: '',
        status: 0
      }, {
        key: 58,
        isCollect: false,
        id: '1JS1729002G01',
        name: '激光封焊系统',
        applicationarea: '工业无人机',
        technicalunit: '中国电子科技集团公司第四十八研究所',
        nature: '军工企业',
        saleDate: '2017/11/15',
        saleMoney: 10,
        price: 110,
        detail: '',
        status: 0
      }, {
        key: 59,
        isCollect: false,
        id: '1JS1725007G01',
        name: '红外激光探测器',
        applicationarea: '医疗健康',
        technicalunit: '上海科炎光电技术有限公司',
        nature: '企业',
        saleDate: '2017/11/15',
        saleMoney: 50,
        price: 30,
        detail: '',
        status: 0
      }, {
        key: 60,
        isCollect: false,
        id: '1JS1718006G01',
        name: '纤维产业化及织物设计、加工技术',
        applicationarea: '无机非金属材料',
        technicalunit: '中国航天科工集团第六研究院四十六所',
        nature: '军工企业',
        saleDate: '2017/11/15',
        saleMoney: 20,
        price: 60,
        detail: '',
        status: 0
      }, {
        key: 61,
        isCollect: false,
        id: '1JS1719001G01',
        name: '高热导率、耐高温、高压新兴材料—碳化硅 (SiC) 单晶片',
        applicationarea: '半导体材料',
        technicalunit: '北京世纪金光半导体有限公司',
        nature: '企业',
        saleDate: '2017/11/15',
        saleMoney: 30,
        price: 80,
        detail: '',
        status: 0
      }, {
        key: 62,
        isCollect: false,
        id: '1JS1718007G01',
        name: '水下设备防海生物附着及生长的技术',
        applicationarea: '无机非金属材料',
        technicalunit: '中国船舶重工集团公司七五〇试验场',
        nature: '军工企业',
        saleDate: '2017/11/15',
        saleMoney: 50,
        price: 10,
        detail: '',
        status: 0
      }, {
        key: 63,
        isCollect: false,
        id: '1JS1717003G01',
        name: '防腐水性涂料',
        applicationarea: '功能性膜材料',
        technicalunit: '河北晨阳工贸集团有限公司',
        nature: '企业',
        saleDate: '2017/11/15',
        saleMoney: 300,
        price: 1000,
        detail: '',
        status: 0
      }, {
        key: 64,
        isCollect: false,
        id: '1JS1718008G01',
        name: '高性能稀土钴永磁材料',
        applicationarea: '无机非金属材料',
        technicalunit: '中国电子科技集团公司第九研究所',
        nature: '军工企业',
        saleDate: '2017/11/15',
        saleMoney: 50,
        price: 1000,
        detail: '',
        status: 0
      }, {
        key: 65,
        isCollect: false,
        id: '1JS1714002G01',
        name: '超高导热石墨材料',
        applicationarea: '前沿新材料',
        technicalunit: '中国科学院山西煤炭化学研究所',
        nature: '高校院所',
        saleDate: '2017/11/15',
        saleMoney: 10,
        price: 2000,
        detail: '',
        status: 0
      }, {
        key: 66,
        isCollect: false,
        id: '',
        name: '永磁同步风力发电机',
        applicationarea: '船舶',
        technicalunit: '中国船舶重工集团公司山西汾西重工有限责任公司',
        nature: '军工企业',
        saleDate: '2017/11/15',
        saleMoney: 10,
        price: 200,
        detail: '',
        status: 0
      }, {
        key: 67,
        isCollect: false,
        id: '1JS1708001G01',
        name: '高功率轻质金属板氢空气燃料电池模块技术',
        applicationarea: '新能源',
        technicalunit: '上海动力储能电池系统工程技术有限公司',
        nature: '企业',
        saleDate: '2017/11/15',
        saleMoney: 20,
        price: 100,
        detail: '',
        status: 0
      }, {
        key: 68,
        isCollect: false,
        id: '1JS1708002G01',
        name: '环路热管技术',
        applicationarea: '新能源',
        technicalunit: '北京空间飞行器总体设计部 ',
        nature: '军工企业',
        saleDate: '2017/11/15',
        saleMoney: 50,
        price: 300,
        detail: '',
        status: 0
      }, {
        key: 69,
        isCollect: false,
        id: '1JS1704005G01',
        name: '卫星通信低剖面阵列动中通天线',
        applicationarea: '应急产业',
        technicalunit: '中国电子科技集团公司第五十四研究所',
        nature: '军工企业',
        saleDate: '2017/11/15',
        saleMoney: 10,
        price: 2000,
        detail: '',
        status: 0
      }, {
        key: 70,
        isCollect: false,
        id: '1JS1704006G01',
        name: '小微无人机探测雷达',
        applicationarea: '应急产业',
        technicalunit: '四川九洲电器集团有限责任公司',
        nature: '企业',
        saleDate: '2017/11/15',
        saleMoney: 10,
        price: 200,
        detail: '',
        status: 0
      }, {
        key: 71,
        isCollect: false,
        id: '1JS1704007G01',
        name: '危化品泄漏应急处理装置',
        applicationarea: '应急产业',
        technicalunit: '中国航天科技集团公司北京航天试验技术研究所  ',
        nature: '军工企业',
        saleDate: '2017/11/15',
        saleMoney: 20,
        price: 100,
        detail: '',
        status: 0
      }, {
        key: 72,
        isCollect: false,
        id: '1JS1704008G01',
        name: '公共应急救援装备',
        applicationarea: '应急产业',
        technicalunit: '中国兵器工业集团公司江麓机电集团有限公司  ',
        nature: '军工企业',
        saleDate: '2017/11/15',
        saleMoney: 50,
        price: 300,
        detail: '',
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
        title: '所属性质',
        dataIndex: 'nature',
        key: 'nature',
        width: 100
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
        title: '查看详情',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: (record, i, value) => <div onClick={this.showDetail.bind(this,record,i,value)} className={'status-1'}>
        {record.status === 0 ? '查看详情':record.status===1?'查看详情':'查看详情'}
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
                <li className='zmiti-index-search-item'>
                  筛选条件：
                </li>
                <li>
                 <MonthPicker onChange={this.searchByDate.bind(this)} placeholder="每月产品" /></li>
                <li className='zmiti-index-search-item'>
                  <Cascader options={this.state.options} onChange={()=>{}} placeholder="领域分类" />
                </li>
                <li className='zmiti-index-search-item'>
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
                <li className='zmiti-index-search-item'>
                  <Select
                      style={{ width: 100 }}
                      placeholder="特殊技术"
                    >
                      <Option value="1">军用技术</Option>
                      <Option value="2">贸易限制</Option>
                      <Option value="3">领袖专家</Option>
                    </Select>
                </li>
                <li className='zmiti-index-search-item'>
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
             
              columns={columns} dataSource={this.state.dataSource} scroll={{ x: 1600 }}/>
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
        nature: 'r',
        isCollect: false,
        status: i % 3,
        detail: '家用口腔检测软件系统应用于家用洗牙机，通过在洗牙机上安装防雾高清摄像头，置于非金属洗牙头的前端。洗牙的时候，洗牙图像通过连线或wifi显示在手机屏幕上，看着手机屏幕自己给自己洗牙。同时手机上的洗牙视频可以有选择地上传至云端，有资质的牙科医生可以看到口腔洗牙的同步录像，提出专业建议或预约下一步治疗方案。'
      });

    }
    this.defaultDataSource = this.state.dataSource.concat([])

    window.dataSource = [];

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