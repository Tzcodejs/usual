// 子组件
import React, { Component } from 'react';

class TodoItem extends Component {

    constructor(props){
        super(props)
        // 提高性能
        this.handleClick = this.handleClick.bind(this)
    }

    // 此生命周期函数是避免render函数重复执行
    shouldComponentUpdate(nextProps, nextState){
       if(nextProps.content !== this.props.content){
           return true
       }else{
           return false
       } 
    }

    render(){
        // {子组件接收父组件的值}
        return (
            <div onClick={this.handleClick}>
                {this.props.content}
            </div>
        )
    }

    // 数据请求一般放在这里
    componentDidMount(){

    }

    handleClick(){
        this.props.deleteItem(this.props.index)
        // 子组件改变父组件的数据
        // this.props.index
    }
}

export default TodoItem;