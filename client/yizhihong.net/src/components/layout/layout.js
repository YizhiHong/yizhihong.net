import React, {Component} from 'react'
import Aux from '../../hoc/hoc';

class Layout  extends Component {
    state = {
        showSideDraw: false
    }

    render () {
        return (
            <Aux>
                {this.props.children}
            </Aux>
        )
    }
}

export default Layout