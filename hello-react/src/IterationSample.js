import { useState } from "react";

const IterationSample = () =>{
    const [names,setNames] = useState([
        {id : 1, text:'text1'},
        {id : 2, text:'text2'},
        {id : 3, text:'text3'},
        {id : 4, text:'text4'}
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5); //새로운 항목 추가할 떄 사용
    const namesList = names.map(name => (
    <li
    key={name.id}
    onDoubleClick={() => onRemove(name.id)}>
        {name.text}</li>));
    const onChange = e => setInputText(e.target.value);
    const onClick = () =>{
        const nextNames = names.concat({
                id: nextId,
                text: inputText
        });
        setNextId(nextId + 1); //nextID 값에 1 더하기
        setNames(nextNames); //names 값을 업데이트
        setInputText(''); // 인풋텍스트 초기화...
    };

    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    };



    return (
    <>
    <input value={inputText} onChange={onChange} />
    <button onClick={onClick}>추가</button>
    <ul>{namesList}</ul>
    </>
    
    );
};

export default IterationSample;