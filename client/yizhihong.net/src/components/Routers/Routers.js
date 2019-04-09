import React from 'react'
import {Route,Switch} from 'react-router-dom'

import ScriptLoader from '../../hoc/ScriptLoader'
import Profile from '../Profile/Profile'
import Projects from '../Projects/Projects'

const scripts = [{"type":"CSS",
                "url":"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"}]


const Routers = (props) =>{
    return (
        <Switch>
            <Route path='/' exact component={Profile} />
            <Route path='/Project' exact component={Projects} />
        </Switch>
    )
}
export default ScriptLoader(Routers,scripts);