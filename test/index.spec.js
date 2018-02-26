import { setMapStateToProps } from '../src/index';

const stateMock = {
  firstReducer: {
    text: 'Bonjour',
    deeperObject: {
      text: 'DeeperBonjour',
    },
  },
  secondReducer: {
    text: 'Aurevoir',
  },
};

test('Unit test setMapStateToProps', () => {
  const inputMock = {
    text: 'firstReducer.text',
    theDeeperText: 'firstReducer.deeperObject.text',
  };

  const outputMock = {
    text: 'Bonjour',
    theDeeperText: 'DeeperBonjour',
  };
  expect(setMapStateToProps(inputMock)(stateMock)).toEqual(outputMock);
});


