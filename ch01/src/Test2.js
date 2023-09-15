// 기본 템플릿 : "rafce"
// function Test() {        // ES5

// }


// ES6
// 표현식과 내부 스타일링, 인라인 스타일링, 조건 연산자, if 문을 활용하여 컴포넌트 만들기
const Test2 = () => {
    const name = "오태훈";
    const param = undefined;
    const style = {
        backgroundColor: "deeppink",
        color: "white",
        fontSize: "32px",
        fontWeight: "bold",
        padding: 10
    }

  return (
    <div className="App">
        <div className="container">
            <h2 className="title" style={style}>{ name }테스트 연습 페이지</h2>
            <h3 className="item_tit">{ param || <span>테스팅</span> }</h3>
        </div>
    </div>
  )
}

export default Test2