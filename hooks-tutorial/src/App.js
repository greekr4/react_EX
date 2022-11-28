import { useState } from "react";
import Counter from "./Counter";
import Info from "./info";
import Average from "./Average";

const App = () => {

const [visible,setVisible] = useState(false);


return(
<div>
<Counter/>

<div>
  <button onClick={() => {
    setVisible(!visible);
  }}>{visible ? '숨기기' : '보이기'}</button>
  {visible && <Info/>}
</div>

<div>
  <Average/>
</div>
</div>

);
};
export default App;