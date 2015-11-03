/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './LoginPage.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
const mui = require('material-ui');

const {
  Checkbox,
  ClearFix,
  DatePicker,
  Dialog,
  DropDownMenu,
  FlatButton,
  FloatingActionButton,
  LeftNav,
  MenuItem,
  Mixins,
  Paper,
  RadioButton,
  RadioButtonGroup,
  RaisedButton,
  Snackbar,
  Slider,
  Styles,
  Tabs,
  Tab,
  TextField,
  Toggle,
} = mui;

let { Colors } = Styles;

@withStyles(styles)
class LoginPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    const title = '登录';
    this.context.onSetTitle(title);
    let styles = {
      group: {
        width: '100%',
        float: 'left',
        marginBottom: 32,
      },
      textfield: {
        marginTop: 24,
      },
    };
    return (
      <div className="LoginPage">
        <div className="LoginPage-container">
          <h1>{title}</h1>
          <p>...</p>
            <TextField
                  style={styles.textfield}
                  hintText="用户名"
                  underlineFocusStyle={{borderColor: Colors.amber900}}
                  defaultValue="" /><br/>
            <TextField
              hintText="密码"
              floatingLabelText="Password"

              type="password" /><br/>
            <RaisedButton
               style={styles.textfield}
               label="登录" secondary={true} /><br/>
             <FlatButton
               style={styles.textfield}
               linkButton={true}
               href="/register"
               secondary={true}
               onClick={Link.handleClick}
               label="注册" />

        </div>
      </div>
    );
  }

}

export default LoginPage;
