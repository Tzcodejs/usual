// 子组件
import React, { Component } from 'react';

class TodoItem extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    render(){
        // {子组件接收父组件的值}
        return (
            <div onClick={this.handleClick}>{this.props.content}</div>
        )
    }
    handleClick(){
        this.props.deleteItem(this.props.index)
        // 子组件改变父组件的数据
        // this.props.index
    }
}

export default TodoItem;