/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './RegisterPage.css';
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
class RegisterPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    const title = '注册一个账号';
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
      <div className="RegisterPage">
        <div className="RegisterPage-container">
          <h1>{title}</h1>
          <p>------</p>
            <TextField
                  style={styles.textfield}
                  hintText="用户名"
                  underlineFocusStyle={{borderColor: Colors.amber900}}
                  defaultValue="" /><br/>
            <TextField
                  style={styles.textfield}
                  hintText="邮箱"
                  underlineFocusStyle={{borderColor: Colors.amber900}}
                  defaultValue="" /><br/>
            <TextField
              hintText="密码"
              floatingLabelText="Password"
              
              type="password" /><br/>
            <RaisedButton
               style={styles.textfield}
               label="注册" />
        </div>
      </div>
    );
  }

}

export default RegisterPage;
