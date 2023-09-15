import React, { useState } from 'react';

const Test3 = () => {
    const [form, setForm] = useState({
        userid: '',
        password: '',
        message: '', // 메시지 상태 추가
    });

    const { userid, password, message } = form;

    const onChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const onClick = () => {
        if (userid === 'admin' && password === '1234') {
            setForm({
                userid: '',
                password: '',
                message: '로그인 환영합니다.',
            });
        } else {
            setForm({
                ...form,
                message: '아이디 또는 비밀번호가 일치하지 않습니다.',
            });
        }
    };

    const onReset = () => {
        setForm({
            userid: '',
            password: '',
            message: '', // 초기화 버튼을 누를 때 메시지도 초기화
        });
    };

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            onClick();
        }
    };

    return (
        <div className='App'>
            <h1>로그인 폼</h1>
            <form>
                <label htmlFor='id'>아이디</label>
                <input
                    type='text'
                    name='userid'
                    placeholder='아이디 입력'
                    value={userid}
                    onChange={onChange}
                    autoFocus
                />
                <br />
                <label htmlFor='pw'>비밀번호</label>
                <input
                    type='password'
                    name='password'
                    placeholder='패스워드 입력'
                    value={password}
                    onChange={onChange}
                />
                <button type='button' onClick={onClick}>
                    로그인
                </button>
                <button type='button' onClick={onReset}>
                    취소
                </button>
            </form>
            {message && <p>{message}</p>} {/* 메시지가 있을 때만 출력 */}
        </div>
    );
};

export default Test3;
