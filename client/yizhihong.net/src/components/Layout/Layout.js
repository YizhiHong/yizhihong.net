import React, {Component} from 'react'

import classes from './Layout.css'

import Navbar from '../Navbar/Navbar'
import SideDrawer from '../Navbar/SideDrawer/SideDrawer'
import {BrowserRouter} from 'react-router-dom'
import ScriptLoader from '../../hoc/ScriptLoader'

const scripts = [{"type":"CSS",
                "url":"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"}]

const Menu = [
    {"name": "Profile", "link":"/"},
    {"name": "Projects", "link":"/projects"},
    {"name": "Contact", "link":"/contact"}
]

class Layout  extends Component {
    state = {
        showSideDraw: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer:false});
    }

    toggleSideDrawer = () =>{
        this.setState((prevState) => (
            {showSideDrawer:!prevState.showSideDrawer}
        ));
    }

    render () {
        return (
            <BrowserRouter>
                <Navbar menu={Menu} 
                        clicked={this.toggleSideDrawer}></Navbar>
                <SideDrawer 
                    menu= {Menu}
                    closed={this.sideDrawerCloseHandler} 
                    open={this.state.showSideDrawer}/>
                <div className={classes.content}>
                    {this.props.children}
                </div>
            </BrowserRouter>
        )
    }
}


export default ScriptLoader(Layout,scripts)