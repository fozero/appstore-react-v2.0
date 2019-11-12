import React, { Component } from 'react';
import './Tabs.scss'
/**
 * tabs组件
 * 入参： tabs列表
 * 出参：当前index索引
 */
class Tabs extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentIndex:0
    };
  }
  change=(index)=>{
    // 触发父组件方法，将当前index传过去
    this.setState({currentIndex:index})
    this.props.onTabClick(index);
  }
  render() {
    return (
      <div className='tabs'>
        {this.props.tabs.map((item,index)=>{
          return (
            <div className={`tab-item ${this.state.currentIndex==index?'actived':''}`} onClick={()=>this.change(index)} key={index}>{item.title}</div>
          )
        })}
      </div>
    );
  }
}

export default Tabs;