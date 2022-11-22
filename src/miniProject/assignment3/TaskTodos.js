import React from 'react';
import './style3.css';
import TaskTodo from './TaskTodo';

const TaskTodos = (props) => {
    const { taskTodos } = props;

    return (
        <section className='task-todos'>
            {
                taskTodos.map(taskTodo => <TaskTodo
                    key={taskTodo.id}
                    taskTodo={taskTodo}
                ></TaskTodo>)
            }
        </section>
    );
};

export default TaskTodos;