const CreateForm = ({ newTask, setNewTask, createTask }) => {
  return (
    <>
      <div className="flex mb-4 gap-x-2">
        <div className="w-full">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="card-input"
            type="text"
          />
        </div>
        <div>
          <button onClick={createTask} className="card-button">Ajouter</button>
        </div>
      </div>
    </>
  );
};

export default CreateForm;
