import React, {Component} from "react";
import {Button, FormControl, FormGroup, ControlLabel} from "react-bootstrap";

/**
 * LoginComponent
 *
 * @description:
 * the login component is a component to provide a
 * simple ui to input username and password and call
 * a given handleSubmit prop function with the input
 * of the user.
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
    // get's called when the user clicks the login-button
    handleLogin: React.PropTypes.func.isRequired,
    // text of the register button
    buttonText: React.PropTypes.string,
    // text of the label of the first input-field
    firstLabel: React.PropTypes.string,
    // text of the label of the second input-field
    secondLabel: React.PropTypes.string,
    // placeholder of the first input-field
    firstPlaceholder: React.PropTypes.string,
    // placeholder of the second input-field
    secondPlaceholder: React.PropTypes.string
};

Login.defaultProps = {
    buttonText: 'Login',
    firstLabel: 'E-Mail',
    secondLabel: 'Password',
    firstPlaceholder: 'E-Mail',
    secondPlaceholder: 'Password'
};