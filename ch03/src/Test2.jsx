import React, { useState } from 'react'
// useState를 이용한 객체의 배열 추가 / 제거
const Test2 = () => {
    const [ names, setNames ] = useState([
        { id:1, text:'김이름'},
        { id:2, text:'박이름'},
        { id:3, text:'윤이름'},
        { id:4, text:'정이름'}
    ]);
    const [ inputText, setInputText ] = useState('');
    const [ nextId, setNextId ] = useState(5); 
    const onChange = (e) => { setInputText(e.target.value); }   // 하나의 객체 생성
    const onClick = (e) => {
        const nextNames = names.concat({
            id : nextId, text : inputText
        });
        setNextId(nextId+1);        // 아이디를 하나 증가
        setNames(nextNames);        // 객체를 배열에 추가
        setInputText('');
     }
    const namesList = names.map((data) => <li>
        <a href='/getData/{data.id}'>{data.id} : {data.text}</a></li>);
    return (
    <div className='App'>
        <input value={inputText} onChange={onChange} />
        <button onClick={onClick}>추가</button>
        <ul>{namesList}</ul>
    </div>
  )
}

export default Test2