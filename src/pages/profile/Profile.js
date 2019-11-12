import React, { Component } from "react";
// import { connect } from 'react-redux';
// import Tabbar from "../../components/tabbar/Tabbar";
// import MasterLayout from "../../components/MasterLayout";
import Tabbar from "../../components/tabbar/Tabbar";
import Tabs from '../../components/tabs/Tabs'

import "./Profile.scss";

const tabs = [{
  title:'tab1'
},{
  title:'tab2'
}]
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount(){
    console.log('----init----')
  }

  componentDidUpdate(){
    console.log('----update----')
  }

  render() {
    return (
      <div className="profile">
          <div className='header'>
            <img className='avatar' src={require('../../assets/images/kerry.jpeg')} alt=""/>
            <div className='nickname'>阿健</div>
          </div>
          <div className='content'>
            <Tabs tabs={tabs} onTabClick={(index)=>{
              // console.log('curindex',index)
              // 这里去处理加载对应的tab内容
            }}>
            </Tabs>
          </div>
          <Tabbar></Tabbar>
        </div>
    );
  }
}
export default Profile;