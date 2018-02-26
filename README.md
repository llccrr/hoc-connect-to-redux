## Usage

```js
import { connectToRedux } from "../x";
import { myAction, mySecondAction } from "../redux/actions";

// To connect a component you can use it this way :

// Example with a component link to the reducer
// Here a Basic React component
const PureDisplayer = ({ myText, myDeeperText }) => <li>{text}</li>;

export const Displayer = connectToRedux({
  myText: "reducerName.text",
  myDeeperText: "reducerName.deeperText.text"
})(PureDisplayer);
// Once connected, you can access to myText and myDeeperText from your component props

// Example if you only want to connect the action
export const Dispatcher = connectToRedux(null, {
  myAction, //ES6 Syntax, action available in the props of the component from this.props.myAction
  newActionName: mySecondAction // Here the dispatched action mySecondAction will be available from this.props.newActionName
})(PureDispatcher);
```
