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
            /* TODO add more styling */
            <div className=".login-form">
                <h3>sign in</h3>
                <FormGroup>
                    <ControlLabel>{ firstLabel ? firstLabel : 'E-Mail' }</ControlLabel>
                    <FormControl
                        placeholder={firstPlaceholder ? firstPlaceholder : "E-Mail"}
                        inputRef={ref => { this.setState({username: ref}) } }
                    />
                    <ControlLabel>{ secondLabel ? secondLabel : 'Password' }</ControlLabel>
                    <FormControl
                        placeholder={secondPlaceholder ? secondPlaceholder : "Password"}
                        inputRef={ref => { this.setState({password: ref}) } }
                    />
                    <Button bsStyle="primary"
                            onClick={this.handleSubmit}>
                        { buttonText ? buttonText : "login" }
                    </Button>
                </FormGroup>
            </div>
        );
    }
}