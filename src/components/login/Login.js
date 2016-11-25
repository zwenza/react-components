import React, {Component} from "react";
import {Button, FormControl, FormGroup, ControlLabel} from "react-bootstrap";

/**
 * LoginComponent
 * @description: handles username and password
 * @props:
 *  {function}      (mandatory) handleLogin:        get's called when the user clicks the login-button
 *  {value:string}  (optional)  buttonText:         text of the register button
 *  {value:string}  (optional)  firstLabel:         text of the label of the first input-field
 *  {value:string}  (optional)  secondLabel:        text of the label of the second input-field
 *  {value:string}  (optional)  firstPlaceholder:   placeholder of the first input-field
 *  {value:string}  (optional)  secondPlaceholder:  placeholder of the second input-field
 */
export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }
    }

    handleSubmit = () => this.props.handleLogin(this.state.username.value, this.state.password.value);

    render() {
        const {buttonText, firstLabel, secondLabel, firstPlaceholder, secondPlaceholder} = this.props;

        return (
            <div className=".login-form">
                <h3>sign in</h3>
                <FormGroup>
                    <ControlLabel>{firstLabel}</ControlLabel>
                    <FormControl
                        placeholder={firstPlaceholder}
                        inputRef={ref => { this.setState({username: ref}) } }
                    />
                    <ControlLabel>{secondLabel}</ControlLabel>
                    <FormControl
                        placeholder={secondPlaceholder}
                        inputRef={ref => { this.setState({password: ref}) } }
                    />
                    <Button bsStyle="primary"
                            onClick={this.handleSubmit}>
                        { buttonText  }
                    </Button>
                </FormGroup>
            </div>
        );
    }
}

Login.propTypes = {
    handleLogin: React.PropTypes.func.isRequired,
    buttonText: React.PropTypes.string,
    firstLabel: React.PropTypes.string,
    secondLabel: React.PropTypes.string,
    firstPlaceholder: React.PropTypes.string,
    secondPlaceholder: React.PropTypes.string
};

Login.defaultProps = {
    buttonText: 'Login',
    firstLabel: 'E-Mail',
    secondLabel: 'Password',
    firstPlaceholder: 'E-Mail',
    secondPlaceholder: 'Password'
};