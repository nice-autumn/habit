import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import img1 from '../../assets/image/house.svg'
import img2 from '../../assets/image/select-house.svg'
import img3 from '../../assets/image/sun.svg'
import img4 from '../../assets/image/select-sun.svg'
import img5 from '../../assets/image/tomato.svg'
import img6 from '../../assets/image/select-tomato.svg'
import img7 from '../../assets/image/rainbow.svg'
import img8 from '../../assets/image/select-rainbow.svg'
import Today from '../../components/Today/Today'
import All from '../../components/All/All'
import Tomato from '../../components/Tomato/Tomato'
import Mine from '../../components/Mine/Mine'

const tabItems = [
  {
    title: '今日',
    icon: img1,
    select:img2,
    path: '/home/today'
  },
  {
    title: '全部',
    icon: img3,
    select:img4,
    path: '/home/all'
  },
  {
    title: '番茄钟',
    icon: img5,
    select:img6,
    path: '/home/tomato'
  },
  {
    title: '我的',
    icon: img7,
    select:img8,
    path: '/home/mine'
  }
]

export default class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedTab:'redtab',
    };
  }
  
  //渲染tabbar数据
     TabBarItem(){
    return tabItems.map(item => {
      return (
        <Link to="{item.path}">
        <TabBar.Item
            title={item.title}
            key={item.title}
            icon={<div className="icon" style={{
              width: '26px',
              height: '26px',
              backgroundImage: `url(${item.icon})`,
              backgroundSize: '100%,100%',
            }}
            />
            }
            selectedIcon={<div style={{
              width: '30px',
              height: '30px',
              backgroundImage: `url(${item.select})`,
              backgroundSize: '100%,100%'
            }}
            />
            }
            // selected={this.state.selectedTab === item.path}
            // onPress={() => {
            //   this.setState({
            //     selectedTab: item.path,
            //   });
            //    this.props.history.push(item.path)
            // }}
            data-seed="logId"
          >
          </TabBar.Item>
          </Link>
      )
    })
  }
  render(){
    return (
      <div style={{position: 'fixed', height: '100%', width: '100%', top: 0 }}>
         <HashRouter>
          <Switch>
          <Route path='/home/today' components={Today} />
                <Route path='/home/all' components={All} />
                <Route path='/home/tomato' components={Tomato} />
                <Route path='/home/mine' components={Mine} />
            <Redirect from="/" to="/today" exact />
          </Switch>
        </HashRouter>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          {this.TabBarItem()}
        </TabBar>
      </div>
    );
  }
}
