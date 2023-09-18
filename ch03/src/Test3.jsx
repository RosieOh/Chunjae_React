import React, { useRef, useState } from 'react'

// useRef = 자체가 객체
// useRef : setter가 없으며, 자체가 객체이며, 해당 데이터는 current 속성을 활용하며 자체적으로 rendering이 안된다.
// useState : field, setter가 병립되며, 하나의 값만 저장하고, 전달됨. 자체적으로 Rendering로 가능.
const Test3 = () => {
    const korScore = useRef(0);      // 차이점 : setter가 없다.
    const [ engScore, setEngScore ] = useState(0);
    const onUseRef = (e) => {                   // ref 하나로는 데이터를 렌더링 방식으로 뿌려줄 수 없다.
        korScore.current+=10;
        console.log("국어 :"+korScore.current);
    }
    const onUseState = (e) => {      // 렌더링을 하고자 할 때는 useState 활용 - state : 현상태로 refresh로 해주는 역할
        setEngScore(engScore+10);
        console.log("영어 : "+engScore);
    }
    return (
        <div className='App'>
            <button onClick={onUseRef}>useRef</button>
            <button onClick={onUseState}>useState</button>
            <h2>{`국어 : ${korScore.current}` }</h2> 
            <h2>{`영어 : ${engScore}` }</h2>
        </div>
    )
}

export default Test3