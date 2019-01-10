import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {

    // 定义数据
    // constructor自动执行
    constructor(props) {
        super(props);
        // 定义数据,组件的状态,负责数据
        this.state = {
            inputValue: '123',
            list: []
        }
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input
                        value={this.state.inputValue}
                        // 改变this指向
                        onChange={this.handleInputChange.bind(this)}
                    />
                    <button onClick={this.handleBtnClick.bind(this)}>提交</button>
                </div>
                {/* 循环标签注释的写法 */}
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <div>
                                    <TodoItem content={item}/>
                                </div>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    // 事件函数
    handleInputChange(e) {
        // 改变数据
        this.setState({
            inputValue: e.target.value
        })
    }
    handleBtnClick() {
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

export default TodoList;