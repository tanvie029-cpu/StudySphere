import { useState } from "react";

function GoalCard() {

  const totalTasks = 5;

  const [completedTasks, setCompletedTasks] = useState(0);

  // Derived value
  const percentage = (completedTasks / totalTasks) * 100;

  
  const remainingTasks =totalTasks-completedTasks;
  const goalCompleted=completedTasks===totalTasks;

  function handleCompleteTask() {
    if (completedTasks < totalTasks) {
      setCompletedTasks(completedTasks + 1);
    }
  }

  function handleUndoTask() {
    if (completedTasks > 0) {
      setCompletedTasks(completedTasks - 1);
    }
  }
  return (
    <div className="bg-white p-8 rounded-3xl shadow-md border border-slate-200">
      <h2 className="text-2xl font-bold">Today's Goal</h2>

      <p className="mt-2 text-gray-400">Complete React Hooks</p>

      <h3>
        {completedTasks} / {totalTasks} Tasks
      </h3>

      <p className="mt-5 font-medium">
        {Math.round(percentage)}% Completed</p>

      <div className="w-full h-3 bg-gray-300 rounded-full">
    <div
        className="h-3 bg-blue-500 rounded-full transition-all duration-300"
        style={{ width: `${percentage}%` }}
    />
</div>

      <p className="mt-4 text-orange-600 font-medium">
  🔥 {remainingTasks} {remainingTasks === 1 ? "Task" : "Tasks"} Remaining
</p>
    <div className="flex gap-3 mt-6">
      <button
  onClick={handleCompleteTask}
  disabled={completedTasks === totalTasks}
  className="bg-blue-600 text-white px-4 py-2 rounded-lg disabled:bg-gray-400">
  Complete
</button>

      <button
  onClick={handleUndoTask}
  disabled={completedTasks === 0}
  className="bg-gray-200 px-4 py-2 rounded-lg disabled:opacity-50">
  Undo
</button>
</div>

      {goalCompleted && (
  <p className="mt-4 text-green-600 font-semibold">
    🎉 Goal Completed!
  </p>
)}

    </div>
  );
}

export default GoalCard;