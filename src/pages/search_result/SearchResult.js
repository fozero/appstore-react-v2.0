import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from "redux";
import Search from '../../components/search/Search';
import SearchList from '../../components/search_list/SearchList';
import './SearchResult.scss';
import $api from '../../api/index.js';
// import { saveSearchList, removeSearchList } from '../../store/action'
import { actionCreators } from '../../store/action'
class SearchResult extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchList:[]
    }
  }
  // 搜索app
  appSearch(keyword) {
    $api.lookUp({}).then((response) => {
      this.setState({
        searchList: response.results
      })
      // dispatch action
      this.props.saveSearchList(this.state.searchList);
    }).catch(err => {
      console.log(err);
    })
  }

  componentDidMount(){
    this.manualFocusInst.focus();
  }

  onFoucs() {
  }

  onCancel(){
    this.props.history.push("/");
    // 删除历史结果
    this.props.removeSearchList();
  }


  render() {
    return (
      <div className='searchResult-container'>
        <Search appSearch={this.appSearch.bind(this)} ref={(ref)=>this.manualFocusInst = ref} onCancel={this.onCancel.bind(this)} onFoucs={this.onFoucs.bind(this)} showCancelBtn={true}></Search>
        <SearchList></SearchList>
      </div>
    );
  }
}

// 将state 映射到展示组件的 props 中
const mapStateToProps = (state) => ({
  searchList: state.searchList
})


/**
 * 使用redux-action之前
 */
// const mapDispatchToProps = (dispatch) => ({
  // 分发由action creators创建的actions
//   saveSearchList: searchList => dispatch(saveSearchList(searchList)),
//   removeSearchList: () => dispatch(removeSearchList())
// })


/**
 * 使用redux-action之后
 */
// createActions会返回一个对象，对象针对每个action类型都有一个值为action工厂的属性，属性名为action类型的值去掉下划线后的驼峰命名
const mapDispatchToProps = {
  saveSearchList:actionCreators.saveSearchList,
  removeSearchList:actionCreators.removeSearchList
}


// 通过connect生成容器组件
export default connect(mapStateToProps,mapDispatchToProps)(SearchResult);