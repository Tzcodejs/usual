// reducer存放所有数据
const defaultState = {
    inputValue:'',
    list:[]
}

// state指的是上一次存储的数据，action是用户传过来的一句话
// reducer可以接收state但是不能修改，所以我们只能拷贝
export default (state = defaultState, action) => {
    if(action.type === 'change_input_value'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        // 返回给了store
        return newState
    }
    if(action.type == 'add_todo_item'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    return state;
}