import { useCallback, useState } from 'react';
import { MdAlarm } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInert = ({ onInsert }) => {
    const [value,setValue] = useState('');
    
    const onChange = useCallback(e => {
        setValue(e.target.value);
    },[]);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');
            //새로고침 방지
            e.preventDefault();
        },
        [onInsert, value],
    );

    return(
        <form className='TodoInsert' onSubmit={onSubmit}>
            <input placeholder='할 일 입력'
                    value={value}
                    onChange={onChange}
            />
            <button type='submit'>
                <MdAlarm/>
            </button>
        </form>

    );
};

export default TodoInert;