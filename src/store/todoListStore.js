import {observable, action ,computed} from 'mobx';
import {  observer } from 'mobx-react'

class Todo {
    id = Math.random();
    @observable title = "";
    @observable finished = false;
    
    constructor(title) {
        this.title = title;
    }
    
   
}

class todoListStore {
    // 可被观察的待办项 todos
    @observable todos = [];
    // 计算属性，重可观察属性 todos 衍生出来，返回没有完成的待办项的个数
    @computed get total() {
        return this.todos.length;
    }
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }
    @computed get finishedTodoCount() {
        return this.todos.filter(todo => todo.finished).length;
    }
    // 动作用来更新 todos 属性的值，添加待办项
    @action
    addTodo = title => {
        if (!title) return;
        this.todos.push(new Todo(title));
    }
    deleteTodo = title => {
       for ( let i of this.todos) {
           if(i.title === title ) {
            const idx = this.todos.indexOf(i)
             this.todos.splice(idx , 1) 
           }
       }
    }
}

// 创建TodoList 对象，此处的 store 对象可以理解为是一个单例，在将其引用暴露出去
const store = new todoListStore();
store.todos.push(new Todo('Get Coffee'), new Todo('Write blog'));
store.todos[0].finished = true;
export default observer(store)