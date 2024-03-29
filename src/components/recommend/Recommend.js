import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";
import * as R from "ramda";
import "./Recommend.scss";
class Recommend extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  appDetail = () => {
    this.props.history.push("/app/detail");
  };
  render() {
    const { t } = this.props;
    return (
      <div className="recommend-container">
        <div className="title">{t("title.recommend")}</div>
        <ul className="app-list">
          {this.props.recommendList.map((item, index) => {
            return (
              <li className="app-item" key={index} onClick={this.appDetail}>
                <img
                  className="app-icon"
                  src={item["im:image"][0].label}
                  alt=""
                />
                <div className="app-name">{item["im:name"].label}</div>
                <div className="app-categray">
                  {item.category.attributes.label}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

// 将state属性映射到props上
const mapStateToProps = state => ({
  recommendList: state.recommendList || []
});

// export default connect(mapStateToProps)(Recommend);

export default R.compose(
  withRouter,
  connect(
    mapStateToProps,
    null
  ),
  withTranslation()
)(Recommend);
