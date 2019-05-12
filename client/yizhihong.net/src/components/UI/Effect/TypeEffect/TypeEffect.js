import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import cx from 'classnames';

// import Cursor from './Cursor';

 class TypeEffect extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      displayText: ""
    };
  }

  componentDidMount() {
    this.startTyping();
  }

  componentWillUnmount() {
    this._timeout && clearTimeout(this._timeout);
  }

  startTyping() {
    this._timeout = setTimeout(() => {
      this.type();
    }, this.props.typingDelay);
  }

  // getRawText() {
  //   const { text } = this.props;
  //   return typeof text === "string" ? [text] : [...text];
  // }

  type() {
    let { displayText } = this.state;
    let text = this.props.text
    if(text.length > displayText.length) {
      displayText = text.substr(0, displayText.length+1);
      this.setState({ displayText }, () => {
        this._timeout = setTimeout(() => {
          this.type();
        }, this.props.speed);
      });
    } else if(this.props.isErase){
      this._timeout = setTimeout(() => {
        this.erase();
      }, this.props.eraseDelay);
    }
  }

  erase() {
    let { index, displayText } = this.state;
    if (displayText.length === 0) {
      const textArray = this.getRawText();
      index = (index+1) === textArray.length ? 0 : index+1;
      this.setState({ index }, () => {
        this.startTyping();
      });
    } else {
      displayText = displayText.substr(-displayText.length, (displayText.length-1));
      this.setState({ displayText }, () => {
        this._timeout = setTimeout(() => {
          this.erase();
        }, this.props.speed);
      });
    }
  }

  render() {
    const {
      speed,
      typingDelay,
      eraseDelay,
      staticText,
      text,
      className,
      isErase,
      // cursor,
      // cursorClassName,
      ...otherProps
    } = this.props;
    const { displayText } = this.state;
    // const classes = cx(className, 'lfm__typing_effect');
    return (
      <div {...otherProps} className="">
        {staticText ?
          <span className="">
            {staticText}&nbsp;
          </span> : null}

        <span className="">{displayText}</span>

        {/* <Cursor
          cursor={cursor}
          cursorClassName={cursorClassName}
        /> */}
      </div>
    );
  }
}

TypeEffect.defaultProps = {
  speed: 30,
  eraseDelay: 5000,
  typingDelay: 0,
  isErase:false
};

TypeEffect.propTypes = {
  speed: PropTypes.number.isRequired,
  typingDelay: PropTypes.number.isRequired,
  eraseDelay: PropTypes.number.isRequired,
  staticText: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
  className: PropTypes.string,
  isErase: PropTypes.bool
  // cursor: PropTypes.string,
  // cursorClassName: PropTypes.string
};

export default TypeEffect