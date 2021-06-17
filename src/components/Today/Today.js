
import React from 'react'
import {useState, useEffect} from 'react'
// 引入组件
import { Button } from 'antd-mobile';
import { TabBar } from 'antd-mobile';

export default function Today(){
    return(
      <div className="today">
          今日的天气真好
          <Button>Start</Button>
      </div>
    )
}