import React, { Component } from "react";
import Tabbar from "../../components/tabbar/Tabbar";
import Swiper from "../../components/swiper/Swiper";
import MasterLayout from "../../components/MasterLayout";

import "./Find.scss";
class Find extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="find">
          <Swiper />
          <Tabbar></Tabbar>
        </div>
    );
  }
}

export default Find;
