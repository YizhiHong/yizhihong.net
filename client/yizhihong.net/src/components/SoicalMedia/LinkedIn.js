import React from "react";

class LinkedIn extends React.Component {
  state = {
    loaded: false
  };
  componentDidMount() {
    let el = document.createElement("script");
    el.type = "text/javascript";
    el.src = "https://platform.linkedin.com/badges/js/profile.js";
    el.id = "linked_badge";
    el.async = 1;
    el.defer = 1;
    document.head.appendChild(el);
    this.setState({ loaded: true });
  }

  componentWillUnmount() {
    document.getElementById("linked_badge").remove();
  }

  render() {
    const LinkedInStyle = {
      textAlign: "center",
      marginTop: "10px"
    };
    const prefixStyle = {
      width: "150px",
      height: "280px",
      display: "block",
      margin: "0 Auto"
    };
    return (
      <React.Fragment>
        {this.state.loaded ? (
          <div
            className="LI-profile-badge"
            style={LinkedInStyle}
            data-version="v1"
            data-size="medium"
            data-locale="en_US"
            data-type="vertical"
            data-theme="dark"
            data-vanity="chi-hong"
          >
          <a
            className="LI-simple-link"
            href="https://www.linkedin.com/in/chi-hong?trk=profile-badge"
          />
          </div>
        ) : (
          <div style={prefixStyle} />
        )}
      </React.Fragment>
    );
  }
}

export default LinkedIn;
