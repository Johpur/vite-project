import React, { useState } from "react";
import CreateForm from "./components/CreateForm";
import UpdateForm from "./components/UpdateForm";
import ToDo from "./components/ToDo";

function App() {
  const [toDo, setToDo] = useState([]);

  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  //Ajoute une nouvelle tâche
  const createTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      setToDo([...toDo, { id: num, title: newTask, status: false }]);
      setNewTask("");
    }
  };

  //Supprime la tâche
  const deleteTask = (id) => {
    setToDo(toDo.filter((task) => task.id !== id));
  };

  //Change le status de la tâche
  const doneTask = (id) => {
    setToDo(
      toDo.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  };

  //Annulation de la modification
  const cancelUpdate = () => {
    setUpdateData("");
  };

  //Modification du titre de la tâche
  const editTask = (e) => {
    setUpdateData({
      ...updateData,
      title: e.target.value,
    });
  };

  //Met à jour la tâche
  const updateTask = () => {
    let removeOldData = [...toDo].filter((task) => task.id !== updateData.id);
    setToDo([...removeOldData, updateData]);
    setUpdateData("");
  };

  return (
    <div className="App">
      <div className="card">
        <h2>Application To Do</h2>

        {updateData && updateData ? (
          <UpdateForm
            updateData={updateData}
            editTask={editTask}
            updateTask={updateTask}
            cancelUpdate={cancelUpdate}
          />
        ) : (
          <CreateForm
            newTask={newTask}
            setNewTask={setNewTask}
            createTask={createTask}
          />
        )}

        {toDo && toDo.length ? "" : "Aucune tâche..."}

        <ToDo
          toDo={toDo}
          doneTask={doneTask}
          setUpdateData={setUpdateData}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
