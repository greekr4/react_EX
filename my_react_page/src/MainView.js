import {useState} from 'react'

const MainView = () => {
    const style = {
        color: "black",
        backgroundColor: "pink",
        width:"100%",
        height:"700px"
      }

      const inputStyle = {

      }
      const style2 = {
        margin: "auto",
        width: "100px"
      }

      const [id,setId] = useState('');
      const [nickname,setNickname] = useState('');

      const OnchangeId = e => {
        setId(e.target.value);
      }
      const OnChangeNickname = e =>{
        setNickname(e.target.value);
      }

      const OnclickId = e => {
        setId(e.target.value);
      }

    return(
        <div style={style}>
            <div style={style2}>
            <input onChange={OnchangeId}></input>
            <input onChange={OnChangeNickname}></input>
            </div>
            <h1>{id}</h1>
        </div>
    );
}

export default MainView;