import React, { Component } from "react";
import Tabbar from "../../components/tabbar/Tabbar";

import "./Profile.scss";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="profile">
        profile
        {/* <Tabbar></Tabbar> */}
      </div>
    );
  }
}

export default Profile;
