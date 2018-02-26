## Usage
```
yarn add hoc-redux-connector
```
```
npm install --save hoc-redux-connector
```

To subscribe the component to the store you can use it this way :
```js
import { connectToRedux } from 'hoc-redux-connector';

// Here a Basic React component
const PureDisplayer = ({ myDeeperText, ...props }) => (
    <ul>
        <li>{props.myText}</li>
        <li>{myDeeperText}</li>
    </ul>
);

export const Displayer = connectToRedux({
  myText: 'reducerName.text',
  myDeeperText: 'reducerName.deeperText.text'
})(PureDisplayer);
// Once connected, you can access to myText and myDeeperText from your component props
```
To connect actions to a component you can use it this way :
```js
import { myAction, mySecondAction } from 'path_to_your_actions';

const PureDispatcher = (props) => (
    <Button onClick={(string) => props.newActionName(string)}/>
);

export const Dispatcher = connectToRedux(null, {
  myAction, //ES6 Syntax, the action will be available in the props of the component from this.props.myAction()
  newActionName: mySecondAction // Here the dispatched action mySecondAction will be available from this.props.newActionName()
})(PureDispatcher);
// Note that each function inside the object is assumed to be a Redux action creator
```

