import React, {Component} from 'react';
import {Button, FormControl, FormGroup, ControlLabel, Checkbox} from "react-bootstrap";
import _ from 'lodash';

/**
 * CreateComponent
 *
 * @description:
 * the create component is a component to create a new
 * object of the given model prop.
 *
 * the component will automatically analyse the model object
 * and create user-inputs for it's properties.
 *
 * After the user clicked the create-button the handleCreate
 * method will get called with the new model-object.
 */
export default class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            model: Object.assign({},this.props.model)
        };
    }

    handleSubmit = () => {
        this.props.handleCreate(_.mapValues(this.state.model, (value, key) => {
            //TODO clear this boolean workaround
            return typeof this.props.model[key] === 'boolean' ? value.checked : value.value
        }))
    };

    getModelInput = (property) => {
        if(typeof this.state.model[property] === 'number'){
            //TODO add special number validation here
            return <FormControl inputRef={ref => { this.state.model[property] = ref }}/>
        } else if(typeof this.state.model[property] === 'boolean'){
            return <Checkbox inputRef={ref => { this.state.model[property] = ref }}/>
        } else {
            return <FormControl inputRef={ref => { this.state.model[property] = ref }}/>
        }
    };

    modelInputs = () => {
        const modelInputForms = [];
        for(const property in this.props.model){
            modelInputForms.push(
                <div key={property}>
                    <ControlLabel>{property}</ControlLabel>
                    { this.getModelInput(property) }
                </div>
            );
        }
        return modelInputForms;
    };

    render() {
        const { createButtonText } = this.props;

        return(
            <div>
                <h2>Create</h2>
                <FormGroup>
                    { this.modelInputs() }
                    <Button bsStyle="primary"
                            onClick={this.handleSubmit}>
                        { createButtonText }
                    </Button>
                </FormGroup>
            </div>
        );
    }
}

Create.propTypes = {
    // gets called when the user wants to create the object
    handleCreate: React.PropTypes.func.isRequired,
    // model object which should be created
    model: React.PropTypes.object.isRequired,
    // text of the button to create the object
    createButtonText: React.PropTypes.string
};

Create.defaultProps = {
    createButtonText: 'Create'
};