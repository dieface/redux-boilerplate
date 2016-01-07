import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import {Glyphicon} from 'react-bootstrap';

export class TimelineView extends Component {
  static propTypes = {
    centered: PropTypes.bool,
    withHeader: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.object
  }

  render() {
    const classes = classNames({
      'rubix-timeline-view': true,
      'rubix-timeline-centered': this.props.centered || false,
      'rubix-timeline-with-header': this.props.withHeader || false,
      'rubix-timeline-normal': !this.props.withHeader
    }, this.props.className);

    const props = {
      ...this.props,
      centered: null,
      withHeader: null,
      className: classes.trim()
    };

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
}

export class TimelineItem extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.object
  }

  render() {
    const props = {
      ...this.props,
      className: classNames('rubix-timeline-item', this.props.className)
    };

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
}

export class TimelineHeader extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.object
  }

  render() {
    const props = {
      ...this.props,
      className: classNames('rubix-timeline-header', this.props.className)
    };

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
}

export class TimelineIcon extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.object
  }

  render() {
    const props = {
      ...this.props,
      className: classNames('rubix-timeline-icon', this.props.className)
    };

    return (
      <Glyphicon {...props} />
    );
  }
}

export class TimelineAvatar extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.object
  }

  render() {
    const props = {
      width: 30,
      height: 30,
      ...this.props,
      className: classNames('rubix-timeline-avatar', this.props.className),
      style: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 100,
        padding: 2,
        position: 'absolute',
        top: 0
      },
    };

    return (
      <img {...props} />
    );
  }
}

export class TimelineTitle extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.object
  }

  render() {
    const props = {
      ...this.props,
      className: classNames('rubix-timeline-title', this.props.className)
    };

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
}

export class TimelineBody extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.object
  }

  render() {
    const props = {
      ...this.props,
      className: classNames('rubix-timeline-body', this.props.className)
    };

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
}
