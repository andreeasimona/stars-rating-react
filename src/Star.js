import React, { Component } from "react";
const constants = {
    numberStars: 5,
    starClass: "star-input "
};
class Star extends Component {
  constructor(props) {
        super(props);
        this.state = {
            numberStars:
                props.numberStars !== undefined
                ? props.numberStars
                : constants.numberStars,
            size: props.size !== undefined ? props.size : "",
            rated: 2
        };
  }

  setChecked = index => {
    return parseInt(index) === this.state.rated
        ? "star-input checked"
        : "star-input";
  };
  renderStar = () => {
    var htmlStars = [];
    for (var index = this.state.numberStars; index > 0; index--) {
        var input = this.createInput("star_" + index, index);
        var label = this.createLabel("star_" + index, "label_" + index);
        htmlStars.push(input, label);
    }
    return <div className="stars-wrapper big">{htmlStars}</div>;
  };

  createInput = (idStar, index) => {
    return (
        <input
            type="checkbox"
            id={idStar}
            value={index}
            key={idStar}
            onClick={e => this.handleClick(e)}
            className={this.setChecked(index)}
        />
    );
  };

  createLabel = (idStar, labelStar) => {
    return <label htmlFor={idStar} key={labelStar} className="star-label" />;
  };

  handleClick = e => {
    this.setState({ rated: parseInt(e.target.value) });
  };

  render() {
    return <div>{this.renderStar()}</div>;
  }
}

export default Star;
