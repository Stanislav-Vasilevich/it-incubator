import React from 'react';
import {TasksType} from './App';

type PropsType = {
  title: string
  tasks: Array<TasksType>
  students: Array<string>
}

const Tasks = (props: PropsType) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        {
          props.tasks.map(i => {
            return (
              <li key={i.taskId}>
                <input type="checkbox"/>
                {i.title}
              </li>
            )
          })
        }
      </ul>

      <h2>Список студентов</h2>
      <ul>
        {
          props.students.map((i, index) => {
            return (
              <li key={index}>{i}</li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default Tasks;
