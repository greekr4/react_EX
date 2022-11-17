// import { Component } from 'react';

// class EventPracice extends Component{

// state = {
//     username: '',
//     message: ''
// }



// handleChange = (e) => {
//     this.setState({
//         [e.target.name]: e.target.value
//     });
// }

// handleClick = () =>{
//     alert(this.state.username+':'+this.state.message);
//     this.setState({
//         username: '',
//         message: ''
//     });
// }

// handleKeyPress = (e) =>{
//     if(e.key === 'Enter'){
//         this.handleClick();
//     }
// }


// render(){
//     return(
//         <div><h1>이벤트 연습</h1>
//             <input
//             type="text"
//             name="username"
//             placeholder="username"
//             value={this.state.username}
//             onChange={this.handleChange} />

//             <input
//             type="text"
//             name="message"
//             placeholder="message"
//             value={this.state.message}
//             onChange={this.handleChange}
//             onKeyPress={this.handleKeyPress}
//             />
            


//             <button onClick={this.handleClick}>
//             버튼</button>
//             </div>
        
//     );
// }

// }
//====================================================================================
// import { useState } from "react";

// const EventPracice = () => {
//     const [username,setUsername] = useState('');
//     const [message,setMessage] = useState('');
//     const onChangeUsername = e => setUsername(e.target.value);
//     const onChangeMessage = e => setMessage(e.target.value);
//     const onClick = () => {
//         alert(username+" : " + message);
//         setUsername('');
//         setMessage('');
//     };
//     const onKeyPress = e => {
//         if (e.key === 'Enter'){
//             onClick();
//         }
//     };
//     return(
//         <div>
//             <h1>ㅇㅇ</h1>
//             <input
//             type="text"
//             name="username"
//             placeholder="username"
//             value={username}
//             onChange={onChangeUsername}
//             />
//             <input
//             type="text"
//             name="message"
//             placeholder="message"
//             value={message}
//             onChange={onChangeMessage}
//             onKeyPress={onKeyPress}
//             />
//             <button onClick={onClick}>BTN</button>
//         </div>

//     );
// };

// export default EventPracice;

//================================================================================================



import { useState } from "react";

const EventPracice = () => {
    const [form,setForm] = useState({
        username: '',
        message: ''
    });
    const { username,message } = form;
    const onChange = e =>{
        const nextForm = {  
            ...form,    //form 내용을 복사
            [e.target.name]: e.target.value
        };
        setForm(nextForm);
    };
    const onClick = () => {
        alert(username + " : "+ message);
        setForm({
            username:'',
            message:''

        });
    };
    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    };
    return(
        <div>
            <h1>ㅇㅇ</h1>
            <input
            type="text"
            name="username"
            placeholder="username"
            value={username}
            onChange={onChange}
            />
            <input
            type="text"
            name="message"
            placeholder="message"
            value={message}
            onChange={onChange}
            onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>BTN</button>
        </div>

    );
};

export default EventPracice;
