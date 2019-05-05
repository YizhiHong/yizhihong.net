import React from 'react'
import Classes from './Experience.css'
import {withTimeParser,withDetailsParser} from '../../../hoc/utils'
import Widget from '../../UI/Widget/Widget'

const experience = (props) => {
    let el = props.data
    withDetailsParser(el.details)
    return (
        <Widget>
            <div className={Classes.title}>
                <h4 className={Classes.name}>{el.name}</h4>
                <h4 className={Classes.date}>
                    {withTimeParser(el.startDate)} - {withTimeParser(el.endDate)}
                </h4>
            </div>
            
            <p>{el.title}</p>
        </Widget>
    )
}

export default experience