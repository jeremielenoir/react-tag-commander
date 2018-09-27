import React from "react";
import { TC_Wrapper, withTracker } from "../lib/index";

console.log('TC_Wrapper 1er console log', TC_Wrapper);

const wrapper = TC_Wrapper.getInstance();

console.log('TC_Wrapper',wrapper)
console.log('withTracker log', withTracker)

const App = () => (
  <div>
    <h1>Hello React</h1>
  </div>
);

export default App;