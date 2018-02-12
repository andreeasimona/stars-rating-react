import React, { Component } from "react";
import PropTypes from 'prop-types';

const constants = {
    numberStars: 5,
    rated: 0,
    size: "medium"
};

const stringConstants = {
    errorRated: 'The rated star cannot be smaller then 1',
    errorNumberStars: 'The rated star cannot be smaller then 0 and bigger then the star numbers',
    medium: "medium",
    small: "small",
    big: "big"
};
class Star extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign(constants, props);
    }

    setChecked = index => {
        return parseInt(index) === parseInt(this.state.rated)
            ? "star-input checked"
            : "star-input";
    };
    renderStar = () => {
        var htmlStars = [];
        var classWraper = 'stars-wrapper ' + this.state.size;
        for (var index = this.state.numberStars; index > 0; index--) {
            var input = this.createInput("star_" + index, index);
            var label = this.createLabel("star_" + index, "label_" + index);
            htmlStars.push(input, label);
        }
        return <div className={classWraper}>{htmlStars}</div>;
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

Star.propTypes = {
    size: PropTypes.string,
    size: PropTypes.oneOf([
        stringConstants.small, stringConstants.medium, stringConstants.big
    ]),
    numberStars: PropTypes.number,
    numberStars: function (props, propName) {
        if (props[propName] < 1) {
            return new Error(stringConstants.errorRated);
        }
    },
    rated: PropTypes.number,
    rated: function (props, propName) {
        if (props[propName] < 0 || props[propName] > props.numberStars) {
            return new Error(stringConstants.errorNumberStars);
        }
    }
}

export default Star;
