import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../redux/taskSlice";
import Buttons from "./Buttons";
import SelectOption from "./Select";
import InputField from "./Input";
import { useNavigate, useParams  } from "react-router-dom";
import Navbar from "./navbar";

const TaskForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const currentDate = new Date().toLocaleDateString();

  const { id } = useParams();
  const editTaskData = tasks.find(task => task.id === parseInt(id));

  console.log(editTaskData)

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    dateLastEdited: currentDate,
  });

  const options = [
    { value: "Category A", label: "Category A" },
    { value: "Category B", label: "Category B" },
    { value: "Category C", label: "Category C" },
    { value: "Category D", label: "Category D" },
  ];

  useEffect(() => {
    // If editTaskData prop is provided, set the formData with the data of the task being edited
    if (editTaskData) {
      setFormData({
        name: editTaskData.name || "",
        description: editTaskData.description || "",
        category: editTaskData.category || "",
        dateLastEdited: currentDate,
      });
    }
  }, [editTaskData, currentDate]);

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setFormData({ ...formData, category: selectedValue });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.description || !formData.category) {
      alert("All fields are required");
      return;
    }

    const taskToAddOrUpdate = {
      id: editTaskData ? editTaskData.id : Date.now(),
      ...formData,
    };

    if (editTaskData) {
      // If in edit mode, dispatch editTask action
      dispatch(editTask(taskToAddOrUpdate));
    } else {
      // If not in edit mode, dispatch addTask action
      dispatch(addTask(taskToAddOrUpdate));
    }

    navigate("../");
    console.log("Form submitted:", formData);
  };

  return (
    <>
    <Navbar />
      <div className="form-card">
        <h2>{editTask ? "Edit Task" : "Add New Task"}</h2>

        <InputField
          label="Task Name"
          type="text"
          name="name"
          value={formData.name}
          onChangeEvent={handleChange}
          required={true}
          disabled={false}
        />

        <label htmlFor="description">Task Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>

        <label htmlFor="category">Task Categories:</label>
        <SelectOption
          name="category"
          options={options}
          value={formData.category}
          onChange={handleSelectChange}
        />

        <InputField
          label="Current Date"
          id="datepicker"
          type="text"
          value={currentDate}
          onChange={handleChange}
          required={true}
          disabled={true}
        />

        <Buttons
          className="button green"
          type="submit"
          onClick={handleFormSubmit}
          name={editTask ? "Update" : "Submit"}
        />
      </div>
    </>
  );
};

export default TaskForm;
