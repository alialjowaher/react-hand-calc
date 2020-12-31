import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './RadialChart.css';

const DEFAULT_COLOR = '#3880ff';
class RadialChart extends Component {
    state = {}

    componentDidMount() {
        // For initial animation
        setTimeout(() => {
            this.setState({
                setStrokeLength: true
            });
        });
    }

    render() {
        const {
            setStrokeLength
        } = this.state;
        const {
            radius,
            progress,
            strokeWidth,
            dimension,
            color
        } = this.props;
        const circleRadius = Math.min(radius, 55);
        const circumference = 2 * 3.14 * circleRadius;
        const strokeLength = setStrokeLength ? circumference / 7 * progress : 0;

        return ( <
            div className = {
                classNames('radial-chart', {
                    'no-progress': strokeLength === 0
                })
            } >
            <
            svg viewBox = "0 0 180 180"
            width = {
                dimension
            }
            height = {
                dimension
            }
            preserveAspectRatio="none"
            
            textAnchor= {"middle"}
             >
             <text x="50%" y="50%" textAnchor="middle" stroke="#3880ff" fontSize="2.4em" dy=".3em">2</text>
            <
            circle className = "radial-chart-total"
            stroke = {
                color
            }
            strokeWidth = {
                strokeWidth
            }
            fill = "none"
            cx = "90"
            cy = "90"
            r = {
                circleRadius
            }
            /> <
            circle className = "radial-chart-progress"
            stroke = {
                color
            }
            strokeWidth = {
                strokeWidth
            }
            strokeDasharray = {
                `${strokeLength},${circumference}`
            }
            strokeLinecap = "round"
            fill = "none"
            cx = "90"
            cy = "90"
            r = {
                circleRadius
            }
            /> </svg >
            </div>
        );
    }
}

RadialChart.defaultProps = {
    radius: 80,
    progress: 100,
    strokeWidth: 13,
    dimension: 120,
    color: DEFAULT_COLOR
};

RadialChart.propTypes = {
    className: PropTypes.string,
    radius: PropTypes.number,
    strokeWidth: PropTypes.number,
    color: PropTypes.string,
    progress: PropTypes.number,
    dimension: PropTypes.number
};

export default RadialChart;