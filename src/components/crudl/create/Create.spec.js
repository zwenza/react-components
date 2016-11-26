import React from 'react';
import {shallow, mount} from 'enzyme';
import Create from './Create';

describe('<Create />', () => {
    it('renders without crashing', () => {
        const create = shallow(
            <Create />
        );
    });
});