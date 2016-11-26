import React from 'react';
import {shallow, mount} from 'enzyme';
import Create from './Create';
import {Button} from "react-bootstrap";

describe('<Create />', () => {
    it('renders without crashing', () => {
        const create = shallow(
            <Create handleCreate={() => {}} model={{}}/>
        );
    });

    it('returns correct new object on create', () => {
        const handleCreate = jest.fn();
        const modelObject = {
            username: '',
            password: ''
        };

        const create = shallow(
            <Create handleCreate={handleCreate} model={modelObject}/>
        );

        // mock user-input data
        create.setState({
            model: {
                username: {value: 'test@test.at'},
                password: {value: 'test'}
            }
        });

        expect(handleCreate).not.toBeCalled();
        create.find(Button).simulate("click");
        expect(handleCreate).toBeCalledWith({
            username: 'test@test.at',
            password: 'test'
        });
    });

    it('returns a boolean value if specified in model', () => {
        const handleCreate = jest.fn();
        const modelObject = {
            receiveNewsletter: false,
            checkedAGBs: false
        };

        const create = shallow(
            <Create handleCreate={handleCreate} model={modelObject}/>
        );

        // mock user-input data
        create.setState({
            model: {
                receiveNewsletter: { checked: false },
                checkedAGBs: { checked: true }
            }
        });

        expect(handleCreate).not.toBeCalled();
        create.find(Button).simulate("click");
        expect(handleCreate).toBeCalledWith({
            receiveNewsletter: false,
            checkedAGBs: true
        });
    })
});