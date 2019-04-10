import React,{lazy,Suspense} from 'react'
import {Route,Switch} from 'react-router-dom'
import Loader from '../UI/Loader/Loader'

const Profile = lazy(() => import('../Profile/Profile'))
const Projects = lazy(() => import('../Projects/Projects'))

const Routers = (props) =>{
    return (
        <Switch>
            <Route path='/' exact render={() => 
                <Suspense fallback={<Loader></Loader>}>
                    <Profile />
                </Suspense>} 
            />

            <Route path='/Project' exact render={() => 
                <Suspense fallback={<Loader></Loader>}>
                    <Projects />
                </Suspense>} 
            />
            {/* <Route path='/Contact' exact component={Projects} /> */}
        </Switch>
    )
}
export default Routers;