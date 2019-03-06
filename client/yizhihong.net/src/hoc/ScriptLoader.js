import React,{ Component } from 'react'
import Script from 'react-load-script'
import Aux from './hoc';

/**
 * @param {Object} WrappedComponent
 * @param {Array} scripts
 * @param {Boolean} CSS
 * 
 * @return {Object}
 */

const ScriptLoader = (WrappedComponent,scripts) => {
    return class extends Component{
        constructor (){
            super()
            this.src = null
        }
        componentWillMount() {
            this.src = scripts.map((script,index) => {
                switch (script.type) {
                    case "CSS":
                        return (<link key={script.url+index} 
                        rel="stylesheet" 
                        href={script.url} async defer />)
                    default:
                        return (<Script
                            key={script.url + index}
                            url={script.url}
                            onCreate={this.handleScriptCreate.bind(this)}
                            onError={this.handleScriptError.bind(this)}
                            onLoad={this.handleScriptLoad.bind(this)}
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
                <Aux>
                    {this.src.map(el=>el)}
                    <WrappedComponent
                        {...this.props}/>
                </Aux>
            )
        }
    };
  }

export default ScriptLoader