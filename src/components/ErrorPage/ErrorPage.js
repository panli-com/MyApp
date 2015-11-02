/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './ErrorPage.css';

@withStyles(styles)
class ErrorPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
    onPageNotFound: PropTypes.func.isRequired,
  };

  render() {
    const title = 'Error page';
    this.context.onSetTitle(title);
    return (
      <div>
        <h1>{title}</h1>
        <p>对不起，页面发生了错误有人要扣工资了.</p>
      </div>
    );
  }

}

export default ErrorPage;
