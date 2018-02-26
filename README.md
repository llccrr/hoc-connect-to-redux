## Usage

```js
import { connectToRedux } from "../x";
import { myAction, mySecondAction } from "../redux/actions";
const PureDisplayer = ({ myText, myDeeperText }) => <li>{text}</li>;

export const Displayer = connectToRedux(
  {
    myText: "reducerName.text",
    myDeeperText: "reducerName.deeperText.text"
  },
  {
    myAction, //ES6 Syntax, function available in the props of the component with this.props.myAction
    newActionName: mySecondAction // Here the dispatched function mySecondAction will be available with this.props.newActionName
  }
)(PureDisplayer);
```
