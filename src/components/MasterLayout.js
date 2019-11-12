import React, { Component } from "react";
import Tabbar from "./tabbar/Tabbar";
/**
 * 主布局
 */
class MasterLayout extends Component {
  render() {
    return (
      <div className="container">
        {this.props.children}
        <Tabbar></Tabbar>
      </div>
    );
  }
}

export default MasterLayout;
