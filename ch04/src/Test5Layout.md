ch04 - Sass를 이용한 일정 관리 앱 만들기(yarn add sass classnames react-icons 설치 필요)
Test5.js
    components 디렉토리 내부에
    TodoTemplate.js - TodoTemplate.scss
        TodoInsert.js -TodoInsert.scss
        TodoList.js - TodoList.scss
            TodoListItem.js - TodoListItem.scss




TodoTemplate.js - TodoTemplate.scss
    div.TodoTemplate
        div.app-title
        div.content
            children

TodoInsert.js -TodoInsert.scss
    form
        input
        button
            MdAdd

TodoList.js - TodoList.scss
    div.TodoList
        TodoListItem.js

TodoListItem.js - TodoListItem.scss
    div.TodoListItem
        div.cn
            MdCheckBox : MdCheckBoxOutlineBlank
            div.text
        div.remove
            MdRemoveCircleOutline