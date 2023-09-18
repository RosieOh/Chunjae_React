import React, { useState } from 'react'
// useState를 이용한 객체의 배열 추가 / 제거
// useref = 필드만 기입 가능, setter을 이용해서 값을 바꿀 수 없음.
// rendering data는 useState 활용 권장
// 값을 계속 저장하기 위해서는 useref 활용
const Test2 = () => {
    const [ names, setNames ] = useState([
        { id:1, text:'김이름'},
        { id:2, text:'박이름'},
        { id:3, text:'윤이름'},
        { id:4, text:'정이름'}
    ]);
    const [ inputText, setInputText ] = useState('');
    const [ nextId, setNextId ] = useState(5); 
    const onChange = (e) => { setInputText(e.target.value); } 
    const onClick = (e) => {
        const nextNames = names.concat({         // 하나의 객체 생성
            id : nextId, text : inputText
        });
        setNextId(nextId+1);        // 아이디를 하나 증가
        setNames(nextNames);        // 객체를 배열에 추가
        setInputText('');
     }
     // 리액트의 todoList
     const onRemove = (id) => {
        const nextNames = names.filter(data => data.id !== id);
        setNames(nextNames);
     }
    const namesList = names.map((data) => <li key={data.id} onDoubleClick={() =>
            onRemove(data.id)}> : {data.text}</li>);
    return (
    <div className='App'>
        <input value={inputText} onChange={onChange} />
        <button onClick={onClick}>추가</button>
        <ul className='ilist'>{namesList}</ul>
    </div>
  )
}

export default Test2