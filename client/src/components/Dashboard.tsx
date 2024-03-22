import { useEffect, useState } from "react";

import { TaskItem } from "./TaskItem";
import { getTasks } from "@/services/getTasks";
import { SearchIcon } from "./ui/search-icon";
import { Input } from "./ui/input";
import { NewTask } from "./NewTask";

export interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  isDeleted: boolean;
}
export function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [search, setSearch] = useState("");

  const fetchTasks = async () => {
    try {
      const { data } = await getTasks();
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);
  const filteredCard =
    search.length > 0
      ? tasks.filter((value) => value.title.includes(search))
      : [];

  return (
    <main className="flex-1 flex flex-col p-4 md:p-6 lg:p-10">
      <div className="flex items-center gap-4 mb-4 justify-between">
        <div className="flex gap-4">
          <h1 className="text-2xl font-bold">Tarefas</h1>
          <form className="flex-1 ml-auto">
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                placeholder="Pesquisar tarefas..."
                type="search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </form>
        </div>
        <NewTask text={"Nova Tarefa"} getTasks={fetchTasks} />
      </div>
      <div className="space-y-1">
        {search.length > 0
          ? filteredCard.map((task) => (
              <TaskItem key={task.id} task={task} getTasks={fetchTasks} />
            ))
          : tasks.map((task) => (
              <TaskItem key={task.id} task={task} getTasks={fetchTasks} />
            ))}
      </div>
    </main>
  );
}
