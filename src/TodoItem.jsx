import React from 'react';

function TodoItem({ task, completeTask, deleteTask }) {
  const handleComplete = () => {
    completeTask(task.id);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <span>{task.title}</span>
      <div>
        {!task.completed && (
          <button onClick={handleComplete}>Complete</button>
        )}
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
