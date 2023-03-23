class ToDo {
    date: string;
    works: Array<string>;
    
    constructor(date: string, works: Array<string>) {
      this.date = date;
      this.works = works;
    }
  
    addWork(work: string) {
      this.works.push(work);
    }
  }
  
  class ToDoList {
    todos: Array<ToDo>;
  
    constructor(todos: Array<ToDo>) {
      this.todos = todos;
    }
  
    addTodoList(todo: ToDo) {
      const index = this.todos.findIndex(item => item.date === todo.date);
      if (index !== -1) {
        this.todos[index].works.push(...todo.works);
      } else {
        this.todos.push(todo);
      }
    }
  }
  
  const todoList = new ToDoList([]);
  
  const todo1 = new ToDo('21/3', ['DaBong', 'LamBT']);
  const todo2 = new ToDo('22/3', ['DiHoc', 'DiHoc']);
  const todo3 = new ToDo('23/3', ['DiHoc', 'XemPhim']);
  
  todoList.addTodoList(todo1);
  todoList.addTodoList(todo2);
  todoList.addTodoList(todo3);
  
  console.log(todoList.todos);