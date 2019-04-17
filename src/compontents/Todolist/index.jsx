import React from 'react'
import {observable} from 'mobx';
import {observer,inject} from 'mobx-react';
import {Icon  } from 'antd'
import './style.scss'

@inject("todoListStore") 
@observer
class Todolist extends React.Component {

  @observable title = ""
  @observable count = 0
    render() {
        const  {todos ,addTodo ,deleteTodo, total ,unfinishedTodoCount ,finishedTodoCount} = this.props.todoListStore;
        return <div className='page'>
            <h1>TodoList</h1> 
            <div className='input'>
              <input
              type="text"
              value={this.title}
              onChange={(e)=>{
                this.title = e.target.value
              }}
              />
              <button onClick={()=>{
               addTodo(this.title)
                this.title=''
              }}>添加</button>
            </div>
            <div className='list'>
              <ul>
                {todos.map((item,index)=>{
                  return <div key={item.id} className='list-item'>
                    <div className='left'>
                    <input 
                    key={item.id} 
                    type="checkbox" 
                    checked={item.finished} 
                    onChange={()=>{
                      this.count ++ 
                      item.finished = true
                      if(this.count % 2 === 0) {
                        item.finished = false
                      }
                    }}
                    />
                    <li key={index} className={ item.finished ? 'finished' : ''}>{item.title}</li>
                    </div>
                    <Icon type="close" 
                    onClick={() => {
                      deleteTodo(item.title)
                    }}
                    />
                  </div>
                })}
              </ul>
            </div>
            <h3>今日待办有
              <span className='total'>{total}</span>
              条，已完成
              <span className='finished'>{finishedTodoCount}</span>
              条，
              <span className='unfinished'>{unfinishedTodoCount}</span>
              未完成
            </h3>
        </div>
        
    }
}
export default Todolist

