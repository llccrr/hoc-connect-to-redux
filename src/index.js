import { connect } from 'react-redux';
import { get } from 'lodash';

export const setMapStateToProps = subscribedNodes => state => ({
  ...Object.keys(subscribedNodes).reduce(
    (acc, key) => ({
      ...acc,
      [key]: get(state, subscribedNodes[key]),
    }),
    {},
  ),
});

export const setMapDispatchToProps = dispatchObject => dispatch =>
  Object.keys(dispatchObject)
    .map(keys => ({
      [keys]: (...args) => dispatch(dispatchObject[keys](...args)),
    }))
    .reduce((last, curr) => ({ ...last, ...curr }), {});

export const connectToRedux = (
  subscribedKeys = null,
  actionCreators = null,
) => WrappedComponent =>
  connect(
    subscribedKeys ? () => setMapStateToProps(subscribedKeys) : null,
    actionCreators ? () => setMapDispatchToProps(actionCreators) : null,
  )(WrappedComponent);

// TODO: Remove lodash dependency { get }
