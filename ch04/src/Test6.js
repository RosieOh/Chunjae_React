//yarn add immer
//불연성을 활용한 비동기식 구현
import React, { useRef, useCallback, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Common.scss';
import './Test6.scss';
import { produce } from 'immer';

const Test6 = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', username: '' });
  const [data, setData] = useState({ array: [],uselessValue: null });

  // input 수정을 위한 함수
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setForm( produce(draft => { draft[name] = value; }));
  }, []);

  // form 등록을 위한 함수
  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const info = { id: nextId.current, name: form.name, username: form.username };
      // array 에 새 항목 등록
      setData(
        produce(draft => { draft.array.push(info); })
      );
      // form 초기화
      setForm({ name: '', username: '' });
      nextId.current += 1;
    }, [form.name, form.username]
  );

  // 항목을 삭제하는 함수
  const onRemove = useCallback(
    id => {
      setData(
        produce(draft => {
          draft.array.splice(draft.array.findIndex(info => info.id === id), 1);
        })
      );
    },[]
  );

  return (
    <div className='Test6 container'>
      <h2>아이디/이름 항목 추가</h2>  
      <form onSubmit={onSubmit}>
        <input name="username" placeholder="아이디" value={form.username}
          onChange={onChange} className="form-control"/>
        <input name="name" placeholder="이름" value={form.name} onChange={onChange} className="form-control"
        />
        <button type="submit" className='btn btn-primary'>등록</button>
      </form>
      <div className='list-wrap'>
        <h2>추가된 항목</h2>
        <ul className='list-group'>
          {data.array.map(info => (
            <li key={info.id} onClick={() => onRemove(info.id)} className='list-group-item'>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Test6