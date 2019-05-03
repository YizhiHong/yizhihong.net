import React from 'react';
import ScriptLoader from '../../hoc/ScriptLoader'

const scripts = [{"type":"JS",
"url":"https://platform.linkedin.com/badges/js/profile.js"}]

const LinkedIn = (props) => {
    const LinkedInStyle = {
        textAlign: 'center'
    };
    return (
        <React.Fragment>
            <div className="LI-profile-badge"
                style={LinkedInStyle}
                data-version="v1" 
                data-size="medium" 
                data-locale="en_US" 
                data-type="vertical" 
                data-theme="dark" 
                data-vanity="chi-hong">
                <a className="LI-simple-link" 
                    href='https://www.linkedin.com/in/chi-hong?trk=profile-badge'>
                </a>
            </div>
        </React.Fragment>
    )    
}

export default ScriptLoader(LinkedIn,scripts)
// export default LinkedIn