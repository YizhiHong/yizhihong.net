import React from 'react'
import Classes from './Widget.css'

const Widget = (props) =>{
    return <div className={Classes.widget}> {props.children} </div>
}
export default Widget