import { AddTask } from "./AddTask";
import { Header } from "./Header";
import { StatusSummaryTask } from "./StatusSummaryTask";
import { TaskItem } from "./TaskItem";

export function Dashboard() {
  return (
    <div className="w-full max-w-3xl">
      <Header />
      <div className="flex flex-col space-y-6">
        <AddTask />
        <StatusSummaryTask />
        <div className="space-y-4">
          <TaskItem isCompleted={false} />
          <TaskItem isCompleted={true} />
        </div>
      </div>
    </div>
  );
}
