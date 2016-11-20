import React, {Component} from 'react';
import { InputGroup, Button } from '@blueprintjs/core';

/**
 * LoginComponent
 * @description: handles username and password
 * @props:
 *  {function}      (mandatory) handleLogin:        get's called when the user clicks the login-button
 *  {value:string}  (optional)  buttonText:         text of the register button
 *  {value:string}  (optional)  textFieldClass:     class name of the text-input fields
 *  {value:string}  (optional)  buttonClass:        class name of the login-button
 *  {value:string}  (optional)  firstPlaceholder:   placeholder of the first input-field
 *  {value:string}  (optional)  secondPlaceholder:  placeholder of the second input-field
 */
export default class LoginComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }
    }

    handleUsernameChange = (event) => { this.setState({username: event.target.value}) };
    handlePasswordChange = (event) => { this.setState({password: event.target.value}) };
    handleSubmit = () => { this.props.handleLogin(this.state.username, this.state.password) };

    render() {
        const { username, password } = this.state;
        const { buttonText, textFieldClass, buttonClass, firstPlaceholder, secondPlaceholder } = this.props;

        return (
            /* TODO add more styling */
            <div className=".login-form">
                <h3>sign in</h3>
                <InputGroup
                    className={textFieldClass ? textFieldClass : ".pt-large"}
                    placeholder="email"
                    type="email"
                    onChange={this.handleUsernameChange}
                    value={username.value} />
                <InputGroup
                    className={textFieldClass ? textFieldClass : ".pt-large"}
                    placeholder="password"
                    type="password"
                    onChange={this.handlePasswordChange}
                    value={password.value} />
                <Button
                    className={buttonClass ? buttonClass : "pt-small pt-intent-primary"}
                    text={buttonText ? buttonText : "login"}
                    onClick={this.handleSubmit}/>
            </div>
        );
    }
}