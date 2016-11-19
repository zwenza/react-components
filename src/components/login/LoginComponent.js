import React, {Component} from 'react';
import { InputGroup, Button } from '@blueprintjs/core';

/**
 * LoginComponent
 * @description: handles username and password
 * @props:
 *  {function} handleLogin: get's called when the user clicks the login-button
 */
export default class LoginComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }
    }

    handleUsernameChange = (username) => { this.setState({username: username}) };
    handlePasswordChange = (password) => { this.setState({password: password}) };

    render() {
        const { username, password } = this.state;

        return (
            /* TODO add more styling */
            <div className=".login-form">
                <h3>sign in</h3>
                <InputGroup
                    className=".pt-large"
                    placeholder="email"
                    type="email"
                    onChange={this.handleUsernameChange}
                    value={username.value} />
                <InputGroup
                    className=".pt-large"
                    placeholder="password"
                    type="password"
                    onChange={this.handlePasswordChange}
                    value={password.value} />

                /*TODO handleLogin function call here*/

                <Button
                    className="pt-small pt-intent-primary"
                    text="register" />
            </div>
        );
    }
}