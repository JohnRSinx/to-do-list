import { api } from "@/lib/axios";
import { Button } from "./ui/button";
import { TrashIcon } from "./ui/trash";

import { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

interface TaskItemProps {
  task: {
    id: number;
    title: string;
    description: string;
    status: string;
    isDeleted: boolean;
  };
  getTasks: () => void;
}

export function TaskItem({ task, getTasks }: TaskItemProps) {
  const navigation = useNavigate();
  function handleGetById() {
    navigation(`/${task.id}`);
  }

  async function handleDeleteTask() {
    try {
      await api.delete(`/task/${task.id}`);
      getTasks();
    } catch (error) {
      console.log(error);
    }
  }
  const handleChangeStatus = async (event: ChangeEvent<HTMLSelectElement>) => {
    const novoStatus = event.target.value;
    try {
      await api.put(`/task/${task.id}`, {
        title: task.title,
        description: task.description,
        status: novoStatus,
        isDelete: false,
      });
      getTasks();
    } catch (error) {
      console.error("Erro ao atualizar status:", error);
    }
  };

  const getStatusColor = () => {
    switch (task.status) {
      case "pending":
        return "bg-red-400";
      case "in-progress":
        return "bg-yellow-400";
      case "completed":
        return "bg-green-400";
      default:
        return "";
    }
  };
  return (
    <div className="border rounded-lg items-center">
      <div className="flex justify-between items-center p-4 border-b last:border-0">
        <div className="flex space-x-3">
          <div>
            <p>{task.title}</p>
            <p className="text-zinc-400 text-xs">{task.description}</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 ">
          <select
            id="status"
            name="status"
            onChange={handleChangeStatus}
            className={`m-0 block w-full py-2 px-2 border ${getStatusColor()}  rounded-md shadow-sm focus:outline-none  sm:text-sm`}
          >
            <option value="pending">Pendente</option>
            <option value="in-progress">Progresso</option>
            <option value="completed">Concluído</option>
          </select>
          <Button
            variant={"outline"}
            onClick={handleGetById}
            className="py-2 px-2 sm:text-sm block"
          >
            Inspecionar
          </Button>

          <Button
            variant={"outline"}
            className="p-2 bg-transparent hover:text-red-600 border-white"
            onClick={handleDeleteTask}
          >
            <TrashIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
