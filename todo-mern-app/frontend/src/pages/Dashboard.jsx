import { useEffect, useState } from "react";
import API from "../api/axios";

const Dashboard = () => {
 const [tasks, setTasks] = useState([]);
 const [title, setTitle] = useState("");

 const fetchTasks = async () => {
  const res = await API.get("/tasks");
  setTasks(res.data);
 };

 const addTask = async () => {
  await API.post("/tasks", { title });
  setTitle("");
  fetchTasks();
 };

 const toggleTask = async (id) => {
  await API.put(`/tasks/${id}`);
  fetchTasks();
 };

 const deleteTask = async (id) => {
  await API.delete(`/tasks/${id}`);
  fetchTasks();
 };

 useEffect(() => {
  fetchTasks();
 }, []);

 return (
  <div>
   <h2>My Tasks</h2>

   <input
    placeholder="New Task"
    value={title}
    onChange={e => setTitle(e.target.value)}
   />
   <button onClick={addTask}>Add</button>

   {tasks.map(task => (
    <div key={task._id}>
     {task.isEditing ? (
      <input
       value={task.title}
       onChange={(e) =>
        setTasks(tasks.map(t =>
         t._id === task._id ? { ...t, title: e.target.value } : t
        ))
       }
      />
     ) : (
      <span>{task.title}</span>
     )}
     <button
  onClick={async () => {
    await API.put(`/tasks/${task._id}/move`, { direction: "up" });
    fetchTasks();
  }}
>
  ⬆
</button>

<button
  onClick={async () => {
    await API.put(`/tasks/${task._id}/move`, { direction: "down" });
    fetchTasks();
  }}
>
  ⬇
</button>


     <button
      onClick={async () => {
       if (task.isEditing) {
        await API.put(`/tasks/${task._id}/edit`, { title: task.title });
        fetchTasks();
       }
       setTasks(tasks.map(t =>
        t._id === task._id ? { ...t, isEditing: !t.isEditing } : t
       ));
      }}
     >
      {task.isEditing ? "Save" : "Edit"}
     </button>

     <button onClick={() => deleteTask(task._id)}>X</button>
    </div>
   ))}

  </div>
 );
};

export default Dashboard;
