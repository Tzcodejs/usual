import React, { Component } from 'react';
import { Input, Button, List} from 'antd';

// 无状态组件性能更高
const TodoListUI = (props) => {
    return (
        // 必须有一个根节点，使用Fragment占位符
        <div style={{marginTop:'10px', marginLeft:'10px'}}>
            <div>
                <Input 
                value={this.props.inputValue} 
                placeholder='todo info' 
                style={{width:300, marginRight:'10px'}}
                onChange={this.props.handleInputChange}
                />
                <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
            </div>
            {/* 循环标签注释的写法 */}
            <List
                style={{marginTop:'10px',width:'300px'}}
                bordered
                dataSource={this.props.list}
                renderItem={(item, index) => (<List.Item onClick={this.props.handleItemDelete(index)}>{item}</List.Item>)}
            />
        </div>
    )
}

export default TodoListUI