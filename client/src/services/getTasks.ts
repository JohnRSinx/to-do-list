import { Task } from "@/components/Dashboard";
import { api } from "@/lib/axios";

export async function getTasks() {
  return await api.get<Task[]>("/task");
}
