import './Group.css';
import React, { Component, PropTypes } from 'react';

export default class Group extends Component {
  static propTypes = {
    style: PropTypes.object,
    title: PropTypes.node,
    description: PropTypes.node
  };
  static defaultProps = {
    style: {},
    title: '',
    description: ''
  };
  render() {
    const { style, title, description } = this.props;

    return (
      <div className="Group" style={style}>
        {title && <h3 className="Group__title">{title}</h3>}
        <div className="Group__content">
          {this.props.children}
        </div>
        {description && <div className="Group__description">{description}</div>}
      </div>
    );
  }
}