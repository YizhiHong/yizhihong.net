import React, { Component } from "react";

import classes from "./Layout.css";

import Navbar from "../Navbar/Navbar";
import SideDrawer from "../Navbar/SideDrawer/SideDrawer";
import { BrowserRouter } from "react-router-dom";
import ScriptLoader from "../../hoc/ScriptLoader";
import {clearLocalStorage} from "../../hoc/utils"

const scripts = [
  {
    type: "CSS",
    url: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
  }
];

const Menu = [
  { name: "PROFILE", link: "/" },
  { name: "PROJECTS", link: "/projects" },
  { name: "CONTACT", link: "/contact" }
];

class Layout extends Component {
  state = {
    showSideDraw: false
  };

  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  toggleSideDrawer = () => {
    this.setState(prevState => ({ showSideDrawer: !prevState.showSideDrawer }));
  };

  componentWillMount = () => {
    clearLocalStorage()
  }
  render() {
    return (
      <BrowserRouter>
        <Navbar menu={Menu} clicked={this.toggleSideDrawer} />
        <SideDrawer
          menu={Menu}
          closed={this.sideDrawerCloseHandler}
          open={this.state.showSideDrawer}
        />
        <div className={classes.content}>{this.props.children}</div>
      </BrowserRouter>
    );
  }
}

export default ScriptLoader(Layout, scripts);
