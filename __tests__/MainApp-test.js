import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import MainApp from '../src/MainApp';

test('MainApp SnapShot', () => {
  const snap = renderer.create(
    <MainApp />
  ).toJSON();

  expect(snap).toMatchSnapshot();
});
