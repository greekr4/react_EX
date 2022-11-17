import { useState } from "react";

const Say = () => {
    const [message,setMessage] = useState('d');
    const onClickEnter = () => setMessage('Hi');
    const onClickLeave = () => setMessage('Bye');
    
    const [color,setColor] = useState('Black')
    return(
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{color: 'blue'}}  onClick={() => setColor('blue')}>blue</button>
            <button style={{color: 'green'}}  onClick={() => setColor('green')}>green</button>
            <button style={{color: 'red'}}  onClick={() => setColor('red')}>red</button>
        </div>

    ); //end return
}; //end say()

export default Say;