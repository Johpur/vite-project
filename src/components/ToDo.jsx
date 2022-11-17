import React from "react";
import {
  TrashIcon,
  CheckCircleIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";

const ToDo = ({ toDo, doneTask, setUpdateData, deleteTask }) => {
  return (
    <>
      {toDo &&
        toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                <div className="task">
                  <div className={task.status ? "done" : ""}>
                    <span className="task-id">{index + 1}</span>
                    <span className="task-text">{task.title}</span>
                  </div>
                  <div className="icon-container">
                    <span onClick={(e) => doneTask(task.id)} title="Terminer">
                      <CheckCircleIcon className="hover:text-cyan-500" />
                    </span>

                    {task.status ? null : (
                      <span
                        onClick={() => setUpdateData(task)}
                        title="Modifier"
                      >
                        <PencilIcon className="hover:text-sky-500" />
                      </span>
                    )}

                    <span onClick={() => deleteTask(task.id)} title="Supprimer">
                      <TrashIcon className="hover:text-blue-500" />
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
    </>
  );
};

export default ToDo;
