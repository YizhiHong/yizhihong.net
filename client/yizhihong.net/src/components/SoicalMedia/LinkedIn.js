import React from 'react';
import ScriptLoader from '../../hoc/ScriptLoader'

const scripts = [{"type":"JS",
"url":"https://platform.linkedin.com/badges/js/profile.js"}]

const LinkedIn = (props) => {
    return (
        <div className="LI-profile-badge"  
            data-version="v1" 
            data-size="medium" 
            data-locale="en_US" 
            data-type="vertical" 
            data-theme="dark" 
            data-vanity="chi-hong">
            <a className="LI-simple-link" 
                href='https://www.linkedin.com/in/chi-hong?trk=profile-badge'>
                Yizhi Hong</a>
            </div>
    )    
}

export default ScriptLoader(LinkedIn,scripts)