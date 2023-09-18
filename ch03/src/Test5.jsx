// useContext : 상위 컴포넌트와 하위 컴포넌트 사이에서 데이터를 전달할 경우 활용
import React from 'react'
import { AgeContext } from './AgeContext';
import { NameContext } from './NameContext'; 
import Header from './Header.js';

const Test5 = () => {
  return (
    <AgeContext.Provider value='26'>
        <NameContext.Provider value='오태훈'>
            <div>
                <Header />
            </div>
        </NameContext.Provider>
    </AgeContext.Provider>
  )
}

export default Test5