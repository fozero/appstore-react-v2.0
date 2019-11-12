import React, { Component, PureComponent } from "react";
import { Link,withRouter } from "react-router-dom";
import styled from "styled-components";
import * as R from "ramda";
// import TabItem from "./TabItem";
import "./Tabbar.scss";

import HomeIconInactive from "../../assets/images/ic-home.png";
import HomeIconActive from "../../assets/images/ic-home-active.png";
import FindIconInactive from "../../assets/images/ic-find.png";
import FindIconActive from "../../assets/images/ic-find-active.png";
import MineIconInactive from "../../assets/images/ic-mine.png";
import MineIconActive from "../../assets/images/ic-mine-active.png";

const HomeIcon = ({ active }) => {
  return active ? <img src={HomeIconActive} /> : <img src={HomeIconInactive} />;
};
const FindIcon = ({ active }) => {
  return active ? <img src={FindIconActive} /> : <img src={FindIconInactive} />;
};
const MineIcon = ({ active }) => {
  return active ? <img src={MineIconActive} /> : <img src={MineIconInactive} />;
};

const menuItems = ["home", "find", "mine"];
const routesConfig = {
  home: {
    title: "首页",
    menuIcon: HomeIcon,
    menuTitle: "首页",
    link: {
      href: "/"
    }
  },
  find: {
    title: "列表",
    menuIcon: FindIcon,
    menuTitle: "列表",
    link: {
      href: "/find"
    }
  },
  mine: {
    title: "我的",
    menuIcon: MineIcon,
    menuTitle: "我的",
    link: {
      href: "/profile"
    }
  }
};

const BottomNavigationContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  background: #fff;
  border-top: 1px solid #eee;
`;

const BottomNav = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  flex: 1;
  justify-content: space-around;
`;

const LinkText = styled.span`
  margin-top: 4px;
  font-size: 10px;
  color: ${({ active }) => (active ? "#FFA500" : "#5d5d5d")};
`;

const StyledCol = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  > a {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;
    text-decoration: none;
  }
  img {
    width: 28px;
  }
`;
const StyledA = styled.a`
  &:active {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

class Tabbar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeBtnIndex: -1
    };
  }

  handleLinkClick = (index) => {
    this.setState({
      activeBtnIndex: index
    });
    // this.props.history.push("/profile");
  };
  // handleButtonFocus = index => {
  //   this.setState({ activeBtnIndex: index });
  // };
  // handleButtonBlur = index => {
  //   this.setState({ activeBtnIndex: index });
  // };

  componentDidMount(){
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('this.props.location.pathname',prevProps);
  }



  render() {
    const { pathname } = this.props.location
    return (
      <BottomNavigationContainer>
        <BottomNav>
          {menuItems.map((menuItem, index) => {
            const menuItemConfig = routesConfig[menuItem];
            const href = R.pathOr("", ["link", "href"], menuItemConfig);
            let isActiveLink = R.equals(href, pathname)
            return (
              <StyledCol key={index}>
                <Link
                  to={href}
                  onClick={() => this.handleLinkClick(index)}
                  // onTouchStart={() => this.handleButtonFocus(index)}
                  // onTouchEnd={() => this.handleButtonBlur(index)}
                >
                  <menuItemConfig.menuIcon
                    active={R.or(
                      isActiveLink,
                      this.state.activeBtnIndex === index
                    )}
                  />
                  <LinkText active={R.or(
                          isActiveLink,
                          this.state.activeBtnIndex === index
                        )}>
                    {menuItemConfig.menuTitle}
                  </LinkText>
                </Link>
              </StyledCol>
            );
          })}
        </BottomNav>
      </BottomNavigationContainer>
    );
  }
}

export default withRouter(Tabbar);
