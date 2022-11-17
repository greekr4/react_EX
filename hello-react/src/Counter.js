import { Component } from "react";

class Counter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        number: 0,
        fixednumber: -1
      }; 
    }
    render() {
        const {number} = this.state;
        return(
            <div>
        <h1>{number}</h1>
<button
 onClick={()=> {
    this.setState({number:number+1}
        ,()=>{
            console.log('호출됨');
            console.log(this.state);
        }
        );
 }}
 >+1</button>
            </div>

        );
    }
}

export default Counter;