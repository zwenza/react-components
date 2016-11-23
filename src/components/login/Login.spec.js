import React from 'react';
import {shallow, mount} from 'enzyme';
import Login from './Login';
import {Button, FormControl} from "react-bootstrap";

describe('<Login />', () => {
    it('renders without crashing', () => {
        const login = shallow(
            <Login />
        );
    });

    it('calls the handleLogin function', () => {
        var handleSubmit = jest.fn();

        const login = shallow(
            <Login handleLogin={handleSubmit}/>
        );

        expect(handleSubmit).not.toBeCalled();
        login.find(Button).simulate("click");
        expect(handleSubmit).toBeCalled();
    });

    it('calls the handleLogin function with correct values', () => {
        var handleSubmit = jest.fn();

        const login = shallow(
            <Login handleLogin={handleSubmit}/>
        );

        // mock user-input data
        login.setState({
            username: {value: 'test@test.at'},
            password: {value: 'testtesttest'}
        });

        expect(handleSubmit).not.toBeCalled();
        login.find(Button).simulate("click");
        expect(handleSubmit).toBeCalledWith('test@test.at', 'testtesttest');
    });

    it('changes first placeholder text', () => {
        const login = shallow(
            <Login firstPlaceholder="test"/>
        );

        expect(login.find(FormControl).get(0).props.placeholder).toEqual("test");
    });

    it('changes second placeholder text', () => {
        const login = shallow(
            <Login secondPlaceholder="test"/>
        );

        expect(login.find(FormControl).get(1).props.placeholder).toEqual("test");
    });
});