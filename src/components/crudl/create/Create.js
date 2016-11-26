import React, {Component} from 'react';
import {Button, FormControl, FormGroup, ControlLabel} from "react-bootstrap";
import _ from 'lodash';

export default class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            model: this.props.model
        };
    }

    handleSubmit = () => { this.props.handleCreate(_.mapValues(this.state.model, (input) => { return input.value; })) };

    modelValues = () => {
        const modelLines = [];
        for(const property in this.props.model){
            modelLines.push(
                <div>
                    <ControlLabel>{property}</ControlLabel>
                    <FormControl inputRef={ref => { this.state.model[property] = ref;}}/>
                </div>
            );
        }
        return modelLines;
    };

    render() {
        return(
            <div>
                <h2>Create</h2>
                <FormGroup>
                    { this.modelValues() }
                    <Button bsStyle="primary"
                            onClick={this.handleSubmit}>
                        Create
                    </Button>
                </FormGroup>
            </div>
        );
    }
}

Create.propTypes = {
    handleCreate: React.PropTypes.func.isRequired,
    model: React.PropTypes.object.isRequired
};