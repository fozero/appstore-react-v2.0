import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Tabbar from "../../components/tabbar/Tabbar";
import { actionCreators } from "../../store/action";

import "./AppDetail.scss";
// 使用styled-components框架
const Container = styled.div``;

class AppDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appInfo: {}
    };
  }

  componentDidMount() {
    this.props.getAppInfo();
  }

  render() {
    const appInfo = this.props.appInfo || {};
    const screenshotUrls = appInfo.screenshotUrls || [];
    return (
      <div className="appinfo-container">
        <div className="header">
          <img className="app-icon" src={appInfo.artworkUrl100} alt="" />
          <div className="app-info">
            <div className="app-name">{appInfo.trackName}</div>
            <div className="app-summary">{appInfo.primaryGenreName}</div>
          </div>
        </div>
        <div>{appInfo.description}</div>
        <div className="img-list">
          {screenshotUrls.map((item, index) => {
            return <img className="img-item" src={item} alt="" key={index} />;
          })}
        </div>
        <div>{appInfo.releaseNotes}</div>
        <div>{appInfo.currentVersionReleaseDate}</div>
        <div>{appInfo.sellerName}</div>
      </div>
    );
  }
}

// 将state 映射到展示组件的 props 中
const mapStateToProps = state => ({
  appInfo: state.appInfo
});

const mapDispatchToProps = {
  getAppInfo: actionCreators.getAppInfo
};

// 通过connect生成容器组件
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppDetail);
