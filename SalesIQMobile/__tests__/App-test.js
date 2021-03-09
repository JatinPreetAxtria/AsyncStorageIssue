/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import {addnumber} from '../js/util/Utility'

// test('add numbers',() => 
// {
//     expect(addnumber(1,2)).toEqual(3);
// }
// )

it('renders correctly', () => {
  renderer.create(<App />);
});
