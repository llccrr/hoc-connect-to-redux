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
    myAction, //ES6 Syntax, action available in the props of the component from this.props.myAction
    newActionName: mySecondAction // Here the dispatched action mySecondAction will be available from this.props.newActionName
  }
)(PureDisplayer);
```
