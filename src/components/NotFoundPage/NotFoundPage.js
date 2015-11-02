/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './NotFoundPage.css';
import Link from '../Link';

@withStyles(styles)
class NotFoundPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
    onPageNotFound: PropTypes.func.isRequired,
  };

  render() {
    const title = '404 找不到网页';
    this.context.onSetTitle(title);
    this.context.onPageNotFound();
    return (
      <div>
        <h1>{title}</h1>
        <h5><a  href="/" onClick={Link.handleClick}>返回首页</a></h5>
        <p></p>
        <p>很抱歉，你想查看的页面不存在.</p>
      </div>
    );
  }

}

export default NotFoundPage;
