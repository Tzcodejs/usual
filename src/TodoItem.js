// 子组件
import React, { Component } from 'react';

class TodoItem extends Component {
    render(){
        // {子组件接收父组件的值}
        return <div onClick={this.handleClick}>{this.props.content}</div>
    }
    handleClick(){
        // 子组件改变父组件的数据
    }
}

export default TodoItem;