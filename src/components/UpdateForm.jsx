const UpdateForm = ({ updateData, editTask, updateTask, cancelUpdate }) => {
  return (
    <>
      <div className="flex mb-4 gap-x-2">
        <div className="w-full">
          <input
            value={updateData && updateData.title}
            onChange={(e) => editTask(e)}
            className="card-input"
            type="text"
          />
        </div>
        <div className="flex gap-x-2">
          <button onClick={updateTask} className="card-button">
            Modifier
          </button>
          <button onClick={cancelUpdate} className="card-button">
            Annuler
          </button>
        </div>
      </div>
    </>
  );
};

export default UpdateForm;
