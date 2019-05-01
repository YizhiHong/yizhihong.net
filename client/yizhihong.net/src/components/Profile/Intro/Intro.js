import React from 'react'
import classes from './Intro.css'

const intro = (props) => {
    return (
        <pre className={classes.pre}><code>{props.intro}</code></pre>
    )
}

export default intro
