import { api } from "@/lib/axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AlertTriangleIcon } from "./ui/alert-tringle-icon";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

interface Task {
  title: string;
  description: string;
  status: string;
}

export function GetTaskById() {
  const { id } = useParams<{ id: string }>();
  const [taskId, setTaskId] = useState<Task | null>(null);
  const navigation = useNavigate();

  function handleHomePage() {
    navigation(`/`);
  }

  const fetchTasksById = useCallback(async () => {
    try {
      const { data } = await api.get<Task>(`/task/${id}`);
      setTaskId(data);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    fetchTasksById();
  }, [fetchTasksById]);

  if (!taskId)
    return (
      <div className="flex items-center justify-center w-full min-h-[80vh] px-4 flex-col gap-4 text-center">
        <AlertTriangleIcon className="w-12 h-12" />
        <h1 className="text-3xl font-bold">Tarefa não encontrada</h1>
        <p className="text-gray-500">
          A tarefa que você está procurando não pôde ser encontrada.
        </p>
      </div>
    );

  return (
    <div className="flex justify-center mt-4">
      <Card>
        <CardHeader className="flex-col ">
          <div className="flex flex-col ">
            <h1>Tarefa</h1>
            <CardTitle className="text-sm">{taskId.title}</CardTitle>
            <CardDescription className="text-xs">
              {taskId.description}
            </CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <CardDescription className="text-xs">
              {taskId.status}
            </CardDescription>
          </div>
        </CardHeader>
        <CardFooter>
          <Button onClick={handleHomePage}>Voltar</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
