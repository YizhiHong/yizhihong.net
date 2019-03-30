import React, {Component} from 'react'
import Aux from '../../hoc/hoc'

import classes from './Layout.css'

import Navbar from '../Navbar/Navbar'
import SideDrawer from '../Navbar/SideDrawer/SideDrawer'

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
            <Aux>
                <Navbar clicked={this.toggleSideDrawer}></Navbar>
                <SideDrawer 
                    closed={this.sideDrawerCloseHandler} 
                    open={this.state.showSideDrawer}/>
                <div className={classes.content}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}


export default Layout