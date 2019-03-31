import React, { Component } from 'react';
import 'antd/dist/antd.css';

// import TodoItem from './TodoItem';
import store from './store';
import { getInputCahngeAction, getAddItemAction, getDeleteItemAction, initListAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'
import axios from 'axios'

class TodoList extends Component {

    // 定义数据
    // constructor自动执行,优于其他代码执行
    constructor(props) {
        super(props);
        this.state = store.getState();

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this)
        store.subscribe(this.handleStoreChange)
    }

    // render函数渲染dom
    render() {
        return (
            <TodoListUI 
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
            />
        )
    }

    componentDidMount(){
        axios.get('/list.json').then((res) => {
            const data = res.data
            const action = initListAction(data)
            store.dispatch(action)
        })
    }

    // 事件函数
    handleInputChange(e) {
        const action = getInputCahngeAction(e.target.value)
        store.dispatch(action)
        // react为每个组件提供了一个方法 改变数据
        this.setState({
            inputValue: e.target.value
        })

    }

    handleStoreChange(){
        // 重新取一次数据，再替换
        this.setState(store.getState())
    }

    // 按钮点击事件
    handleBtnClick() {
        const action = getAddItemAction()
        store.dispatch(action)
    }

    handleItemDelete(index) {
        const action = getDeleteItemAction(index)
        store.dispatch(action)
        // immutable
        // state不允许我们做任何改变，应该在拷贝中去修改
        // const list = [...this.state.list];
        // // 删除数组中的某一项
        // list.splice(index, 1)
        // this.setState({
        //     list: list
        // })
    }
}

// 导出组件 
export default TodoList;