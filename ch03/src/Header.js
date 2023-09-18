import React, { useContext } from "react";
import { AgeContext } from "./AgeContext";
import { NameContext } from "./NameContext";
// 데이터를 받을 곳 : useContext - Header.js
const Header = () => {
    const age = useContext(AgeContext);     // 26
    const user = useContext(NameContext);       // 오태훈
    console.log('user : '+user);
    console.log('age : '+age);
    return (
        <div>
            <p>안녕하세요~! {user}</p>
            <p>저의 나이는 {age}세 입니다.</p>
        </div>
    )
}

export default Header