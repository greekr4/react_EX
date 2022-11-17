// // import MyComponent from "./MyComponent";
// // import Counter from "./Counter";
// // import Say from "./Say";
// //import EventPracice from "./EventPractice";
// //import ValidationSample from "./ValidationSample";
// //import RefSample from "./RefSample";
// import ScrollBox from "./ScrollBox";
// const App = () =>{
// // return<MyComponent name={"value"} favoriteNumber={1}>칠드런</MyComponent>;
// // return<Counter></Counter>
// // return<Say/>
// //return<EventPracice/>
// //return<ValidationSample/>
// //return<RefSample/>
// return<ScrollBox/>
// };


// export default App;

import { Component } from "react";
import ScrollBox from "./ScrollBox";
//import ValidationSample from "./ValidationSample";
import IterationSample from "./IterationSample";
class App extends Component{
    render(){
        return(
            <div>
                <ScrollBox ref={(ref) => this.ScrollBox=ref}/>
                <button onClick={() => this.ScrollBox.scrollToBottom()}>맨밑으로</button>
                <br/>
                <IterationSample/>
            </div>
        );
    }

}
export default App;
