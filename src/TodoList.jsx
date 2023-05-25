import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, completeTask, deleteTask }) {
  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TodoList;
