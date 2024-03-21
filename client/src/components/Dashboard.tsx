import { NewTask } from "./NewTask";
import { TaskItem } from "./TaskItem";

export function Dashboard() {
  return (
    <main className="flex-1 flex flex-col p-4 md:p-6 lg:p-10">
      <div className="flex items-center gap-4 mb-4">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <NewTask text={"Nova Tarefa"} />
      </div>
      <div className="border rounded-lg">
        <TaskItem status={"pending"} />
        <TaskItem status={"pending"} />
      </div>
    </main>
  );
}
