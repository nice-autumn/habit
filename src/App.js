import './App.css';
import 'antd-mobile/dist/antd-mobile.css';
import  Bot from "./views/Bot/Bot"
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import React from 'react';


class App extends React.Component{
  render(){
    return(
      <div className="App">
            <Bot />
       </div>
    )
  }
}

export default App;
