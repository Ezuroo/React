import React, { useState, useEffect } from "react";

const AcceptTask = ({ data }) => {
  // Initialize state from localStorage
  const [updateEmployee, setUpdateEmployee] = useState(
    JSON.parse(localStorage.getItem("employees")) || []
  );
  const [LoggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser")) || {}
  );

  const heading = data.title;

  const acceptHandler = () => {
    const updatedEmployees = updateEmployee.map((employee) =>
      employee.id === LoggedInUser.data.id
        ? {
            ...employee,
            tasks: employee.tasks.map((task) =>
              task.title === heading
                ? { ...task, active: false, completed: true }
                : task
            ),
            taskCount: {
              ...employee.taskCount,
              active: employee.taskCount.active - 1,
              completed: employee.taskCount.completed + 1,
            },
          }
        : employee
    );

    // Update states
    setUpdateEmployee(updatedEmployees);
    const updatedUser = updatedEmployees.find(
      (emp) => emp.id === LoggedInUser.data.id
    );
    const newLoggedInUser = { role: "employee", data: updatedUser };
    setLoggedInUser(newLoggedInUser);

    // Sync with localStorage
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    localStorage.setItem("loggedInUser", JSON.stringify(newLoggedInUser));
  };

  // Sync localStorage with state on updates
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(updateEmployee));
  }, [updateEmployee]);

  useEffect(() => {
    localStorage.setItem("loggedInUser", JSON.stringify(LoggedInUser));
  }, [LoggedInUser]);

  return (
    <div className="h-full w-[300px] bg-yellow-400 p-5 rounded-xl flex-shrink-0">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 rounded text-sm">{data.category}</h3>
        <h4 className="text-base">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2"> {data.description} </p>
      <div className="mt-2">
        <button
          onClick={(e) => {
            acceptHandler(e);
          }}
          className="bg-green-500 py-1 px-2 text-sm mr-2 rounded-xl"
        >
          Mark as Completed
        </button>
        <button
          onClick={(e) => {
            // Add decline logic here
          }}
          className="bg-red-700 py-1 px-2 text-sm rounded-xl"
        >
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
