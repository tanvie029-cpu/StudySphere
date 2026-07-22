import {
  BookOpen,
  NotebookPen,
  Brain,
  ClipboardCheck,
} from "lucide-react";

function QuickActions() {
  const actions = [
    {
      title: "Start Study",
      icon: BookOpen,
    },
    {
      title: "Notes",
      icon: NotebookPen,
    },
    {
      title: "Flashcards",
      icon: Brain,
    },
    {
      title: "Mock Test",
      icon: ClipboardCheck,
    },
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-md">
      <h2 className="text-2xl font-bold mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <div
              key={action.title}
              className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm cursor-pointer transition-all duration-200 hover:scale-105"
            >
              <Icon className="w-7 h-7 text-indigo-600 mb-3" />

              <h3 className="text-lg font-semibold text-slate-800">
                {action.title}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default QuickActions;