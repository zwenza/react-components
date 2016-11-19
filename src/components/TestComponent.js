import React, { Component } from 'react';
import { Button, Alert } from '@blueprintjs/core';

export default class TestComponent extends React.Component{
    constructor(){
        super();

        this.state = {
            showAlert: false
        };

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleOpen() {
        this.setState({
            showAlert: true
        });
    }

    handleClose() {
        this.setState({
            showAlert: false
        })
    }

    render() {
        return (
            <div>
                <Button
                    onClick={this.handleOpen}
                    className="pt-small"
                    text="open dialog"
                />
                <Alert
                    isOpen={this.state.showAlert}
                    confirmButtonText="close"
                    onConfirm={this.handleClose}
                >
                    <p>
                        a <b>testdialog</b> !
                    </p>
                </Alert>
            </div>
        )
    }
}