import React, {Component} from 'react'
import Aux from '../../hoc/hoc'

import classes from './Layout.css'

import Navbar from '../Navbar/Navbar'

class Layout  extends Component {
    state = {
        showSideDraw: false
    }

    render () {
        return (
            <Aux>
                <Navbar></Navbar>
                <div className={classes.content}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}


export default Layout