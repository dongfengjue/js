import React, { Component } from 'react';
import Button from 'antd/es/button';
import HorizontalLoginForm from './Form/HorizontalLoginForm';
import ColModal from './Col/ColModal';
import message from 'antd/es/message';
import './App.css';

const showMsg = function(msg: string) {
    if(msg === "666"){
      message.info(msg+"!");
    }else{
      message.info(msg);
    }
    
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
        <HorizontalLoginForm></HorizontalLoginForm>
        <ColModal msg = "father"  click = {showMsg}></ColModal>
      </div>
    );
  }
}

export default App;