import React,{ Component , Fragment} from 'react'
import Script from 'react-load-script'

/**
 * @param {Object} WrappedComponent
 * @param {Array} scripts
 * 
 * @return {Object}
 */

const ScriptLoader = (WrappedComponent,scripts) => {
    return class extends Component{
        constructor (){
            super()
            this.src = null
        }

        state = {
            scriptLoaded: false,
            scriptError: false
        }

        shouldComponentUpdate(){
            return true
        }
        
        componentWillMount() {
            this.src = scripts.map((script,index) => {
                switch (script.type) {
                    case "CSS":
                        return (<link key={script.url+"_"+index} 
                        rel="stylesheet" 
                        href={script.url} async defer />)
                    default:
                        return (<Script
                            key={script.url+"_"+index}
                            url={script.url}
                            onCreate={this.handleScriptCreate.bind(this)}
                            onError={this.handleScriptError.bind(this)}
                            onLoad={this.handleScriptLoad.bind(this)}
                            async defer
                        />)
                }
            })
        }

        handleScriptCreate() {
            this.setState({ scriptLoaded: false })
        }
       
        handleScriptError() {
            this.setState({ scriptError: true })
        }
        
        handleScriptLoad() {
            this.setState({ scriptLoaded: true })
        }

        render() {
            return (
                <Fragment>
                    {this.src.map(el=>el)}
                    <WrappedComponent
                        {...this.props}/>
                </Fragment>
            )
        }
    };
  }

export default ScriptLoader