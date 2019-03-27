import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List} from 'antd';
// import TodoItem from './TodoItem';
import store from './store';

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
            // 必须有一个根节点，使用Fragment占位符
            <div style={{marginTop:'10px', marginLeft:'10px'}}>
                <div>
                    <Input 
                      value={this.state.inputValue} 
                      placeholder='todo info' 
                      style={{width:300, marginRight:'10px'}}
                      onChange={this.handleInputChange}
                    />
                    <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
                </div>
                {/* 循环标签注释的写法 */}
                <List
                    style={{marginTop:'10px',width:'300px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </div>
        )
    }

    // 事件函数
    handleInputChange(e) {
        const action = {
            type:'change_input_value',
            value:e.target.value
        }
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
        const action = {
            type:'add_todo_item'
        }
        store.dispatch(action)
        this.setState({
            // 展开运算符
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    handleItemDelete(index) {
        // immutable
        // state不允许我们做任何改变，应该在拷贝中去修改
        const list = [...this.state.list];
        // 删除数组中的某一项
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}

// 导出组件 
export default TodoList;