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
  
  const todo1 = new ToDo('2023-03-23', ['Work 1', 'Work 2']);
  const todo2 = new ToDo('2023-03-24', ['Work 3', 'Work 4']);
  const todo3 = new ToDo('2023-03-23', ['Work 5', 'Work 6']);
  
  todoList.addTodoList(todo1);
  todoList.addTodoList(todo2);
  todoList.addTodoList(todo3);
  
  console.log(todoList.todos);