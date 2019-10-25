
// export const ADDTODOS = "ADDTODOS";

export const RECEIVE_TODOS = "RECEIVE_TODOS";

export const receiveTodos = todo => (
  {
    type: RECEIVE_TODOS,
    todos: todo
  }
);

export const RECEIVE_TODO = "RECEIVE_TODO";

export const receiveTodo = todo => (
  {
    type: RECEIVE_TODO,
    todo: todo // {id: 4, TODO : OBJECT}
  }
);

// export const todo = {
//   type: ADDTODOS

// };

// export const addATodo = todo => (
//   {
//     type: ADDTODOS,
//     todo: todo

//   }
// );

// export const addTodos = todos => {
//     for (let i=0; i < todos.length; i++) {
//       addATodo(todos[i]);
//     }
//   };


