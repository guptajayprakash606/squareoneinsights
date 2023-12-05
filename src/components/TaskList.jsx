import React from "react";
import Buttons from "../components/Buttons";
import { useSelector, useDispatch } from "react-redux";
import { removeTask } from '../redux/taskSlice';
import { useNavigate } from "react-router-dom";

const TaskList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const tasks = useSelector((state) => state.tasks.tasks);
  const handleEdit = (id) => {
    console.log(id);
    navigate(`./taskForm/${id}`);
  };

  const handleDelete = (id) => {
    console.log(id);
    dispatch(removeTask(id));
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className="task">
          <div className="task-name">{task.name}</div>
          <div className="task-description">{task.description}</div>
          <div className="task-category">{task.category}</div>
          <div className="task-date">{task.dateLastEdited}</div>
          <div className="task-btn">
            <Buttons
              classname="button yellow"
              name="Edit"
              onClick={() => handleEdit(task.id)}
            />
            <Buttons
              classname="button red"
              name="Delete"
              onClick={() => handleDelete(task.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
