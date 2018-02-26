## Usage

To connect the state to a component you can use it this way :
```js
import { connectToRedux } from '../x';
import { myAction, mySecondAction } from '../redux/actions';

// Example with a component link to the reducer
// Here a Basic React component
const PureDisplayer = ({ myText, myDeeperText }) => (
    <ul>
        <li>{myText}</li>
        <li>{myDeeperText}</li>
    </ul>
);

export const Displayer = connectToRedux({
  myText: "reducerName.text",
  myDeeperText: "reducerName.deeperText.text"
})(PureDisplayer);
// Once connected, you can access to myText and myDeeperText from your component props
```
To connect actions to a component you can use it this way :
```js
const PureDispatcher = ({ newActionName }) => (
    <Button onClick={(string) => newActionName(string)}/>
);

export const Dispatcher = connectToRedux(null, {
  myAction, //ES6 Syntax, action available in the props of the component from this.props.myAction()
  newActionName: mySecondAction // Here the dispatched action mySecondAction will be available from this.props.newActionName()
})(PureDispatcher);
```

