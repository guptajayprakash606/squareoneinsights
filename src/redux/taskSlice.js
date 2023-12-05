import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [
      {
        id: 1,
        name: 'Task 1',
        description: 'Description 1',
        category: 'Category A',
        dateLastEdited: '01-12-2023',
      },
      {
        id: 2,
        name: 'Task 2',
        description: 'Description 2',
        category: 'Category B',
        dateLastEdited: '02-12-2023',
      },
      {
        id: 3,
        name: 'Task 3',
        description: 'Description 3',
        category: 'Category C',
        dateLastEdited: '03-12-2023',
      },
      {
        id: 4,
        name: 'Task 4',
        description: 'Description 4',
        category: 'Category D',
        dateLastEdited: '04-12-2023',
      },
    ],
  },
  reducers: {
    addTask: (state, action) => {
      const newTask = action.payload;
      state.tasks = [...state.tasks, newTask];
    },
    removeTask: (state, action) => {
      const taskId = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
    editTask: (state, action) => {
      const updatedTask = action.payload;
      state.tasks = state.tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      );
      state.editingTask = null;
    },
  },
});

export const { addTask, removeTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
