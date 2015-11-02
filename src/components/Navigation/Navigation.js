/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import styles from './Navigation.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class Navigation extends Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <div className={classNames(this.props.className, 'Navigation')} role="navigation">
        <a className="Navigation-link" href="/about" onClick={Link.handleClick}>关于我们</a>
        <a className="Navigation-link" href="/contact" onClick={Link.handleClick}>联系我们</a>
        <span className="Navigation-spacer"> | </span>
        <a className="Navigation-link" href="/login" onClick={Link.handleClick}>登录</a>
        <span className="Navigation-spacer">or</span>
        <a className="Navigation-link Navigation-link--highlight" href="/register" onClick={Link.handleClick}>注册</a>
      </div>
    );
  }

}

export default Navigation;
