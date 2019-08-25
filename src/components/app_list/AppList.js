import React, { Component } from "react";
import LazyLoad from "react-lazy-load";
import { withRouter } from "react-router-dom";

import "./AppList.scss";
class AppList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  appDetail = () => {
    this.props.history.push("/app/detail");
  };
  render() {
    return (
      <div className="appList-container">
        <ul className="list">
          {this.props.list.map((item, index) => {
            return (
              <li className="list-item" key={index} onClick={this.appDetail}>
                <div className="app-index">{index + 1}</div>
                <div className="app-img">
                  <LazyLoad offsetVertical={100}>
                    <img
                      className="app-icon"
                      src={item["im:image"][0].label}
                      alt=""
                    />
                  </LazyLoad>
                </div>
                <div className="app-info">
                  <div className="app-name">{item["im:name"].label}</div>
                  <div className="app-categray">
                    {item.category.attributes.label}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default withRouter(AppList);
