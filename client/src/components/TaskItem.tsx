import { TrashIcon } from "./ui/Trash";
import { Checkbox } from "./ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface TaskItemProps {
  isCompleted: boolean;
}

export function TaskItem({ isCompleted }: TaskItemProps) {
  return (
    <>
      <div
        className={`flex items-center space-x-4 p-4 rounded-md ${
          isCompleted ? "bg-[#1A73E8]" : "bg-[#262626]"
        }`}
      >
        <Checkbox id="task-1" />
        <label className="flex-1 text-sm" htmlFor="task-1">
          Integer urna.
        </label>
        <Select>
          <SelectTrigger className="w-[140px] h-7 bg-black border-zinc-800">
            <SelectValue placeholder="Pendente" />
          </SelectTrigger>
          <SelectContent className="bg-black text-white">
            <SelectItem value="light">Pendente</SelectItem>
            <SelectItem value="dark">Andamento</SelectItem>
            <SelectItem value="system">Concluído</SelectItem>
          </SelectContent>
        </Select>
        <TrashIcon className="text-gray-400 hover:text-red-500" />
      </div>
    </>
  );
}
